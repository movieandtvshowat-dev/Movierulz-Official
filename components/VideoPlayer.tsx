import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Server, AlertCircle, Zap, Eye, Palette } from 'lucide-react';
import { StreamSource } from '../types';
import { UNIQUE_MOVIES, UNIQUE_TV_SHOWS, UNIQUE_SPORTS, UNIQUE_TV_LIVE } from '../services/tmdb';
import Hls from 'hls.js';

interface VideoPlayerProps {
  tmdbId?: string | number;
  type?: 'movie' | 'tv' | 'sports' | 'tv_live';
  season?: number;
  episode?: number;
  customStreams?: StreamSource[] | Record<string, string>;
  title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  tmdbId,
  type = 'movie',
  season = 1,
  episode = 1,
  customStreams,
  title,
}) => {
  const [activeServer, setActiveServer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnhancement, setVideoEnhancement] = useState(true);
  
  // Define presets first
  const filterPresets: Record<string, string> = {
    standard: 'brightness(1.0) contrast(1.0) saturate(1.0)',
    hdr: 'brightness(1.1) contrast(1.3) saturate(1.3)',
    vivid: 'brightness(1.15) contrast(1.25) saturate(1.4)',
    cinema: 'brightness(0.95) contrast(1.2) saturate(0.9) sepia(0.1)',
    sharp: 'brightness(1.1) contrast(1.4) saturate(1.1)',
    gaming: 'brightness(1.05) contrast(1.2) saturate(1.5)',
    sports: 'brightness(1.15) contrast(1.25) saturate(1.5)',
    night: 'brightness(0.9) contrast(1.1) sepia(0.2)',
    bw: 'grayscale(100%) contrast(1.2)',
  };

  // Determine smart default based on type
  const getDefaultFilter = () => {
    if (type === 'sports' || title?.toLowerCase().includes('sport')) return 'sports';
    if (type === 'movie' || title?.toLowerCase().includes('movie')) return 'cinema';
    if (type === 'tv_live') return 'vivid';
    return 'standard';
  };

  const [videoFilter, setVideoFilter] = useState<string>(getDefaultFilter());
  const [playerError, setPlayerError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset filter when content changes
  useEffect(() => {
    setVideoFilter(getDefaultFilter());
  }, [tmdbId, type]);

  const isM3U8Url = (url: string) => {
    return url.includes('.m3u8') || url.includes('/hls/') || url.includes('m3u8');
  };

  const isDirectVideoUrl = (url: string) => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.flv', '.wmv'];
    return videoExtensions.some((ext) => url.includes(ext)) || url.includes('videoplayback');
  };

  // Get current filter style object
  const getCurrentFilterStyle = (): React.CSSProperties => {
    if (!videoEnhancement) return {};
    
    const filterValue = filterPresets[videoFilter] || filterPresets.standard;
    
    return {
      filter: filterValue,
      WebkitFilter: filterValue, // Safari support
    };
  };

  const streams = useMemo(() => {
    const processStreams = (inputStreams: StreamSource[] | Record<string, string>): StreamSource[] => {
      if (Array.isArray(inputStreams)) {
        return inputStreams;
      }
      
      return Object.entries(inputStreams).map(([serverName, url], index) => {
        let processedUrl = url as string;
        // Basic replacement logic for TV shows
        if (type === 'tv' && processedUrl.includes('s=1')) {
            processedUrl = processedUrl
            .replace('s=1', `s=${season}`)
            .replace('e=1', `e=${episode}`);
        }

        return {
          id: `${type}-${tmdbId || 'custom'}-s${index + 1}`,
          name: serverName,
          url: processedUrl,
          quality: 'HD',
          type: isM3U8Url(processedUrl) ? 'hls' : isDirectVideoUrl(processedUrl) ? 'direct' : 'iframe',
        };
      });
    };

    if (customStreams) {
      const processed = processStreams(customStreams);
      if (processed.length > 0) return processed;
    }

    if (!tmdbId) return [];

    let sourceData: any[] = [];
    if (type === 'movie') sourceData = UNIQUE_MOVIES;
    else if (type === 'tv') sourceData = UNIQUE_TV_SHOWS;
    else if (type === 'sports') sourceData = UNIQUE_SPORTS;
    else if (type === 'tv_live') sourceData = UNIQUE_TV_LIVE;

    const item = sourceData.find((m) => m.id === tmdbId.toString());
    if (!item || !item.streams) return [];

    return processStreams(item.streams);
  }, [customStreams, tmdbId, type, season, episode]);

  useEffect(() => {
    setIsLoading(true);
    setPlayerError(false);
    setActiveServer(0);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    }
  }, [tmdbId, type, season, episode]);

  const loadHLSStream = (url: string) => {
    if (!videoRef.current) return;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hlsRef.current = hls;
      hls.loadSource(url);
      hls.attachMedia(videoRef.current);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        setPlayerError(false);
        videoRef.current?.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              setPlayerError(true);
              setIsLoading(false);
              break;
          }
        }
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = url;
      videoRef.current.addEventListener('loadedmetadata', () => {
        setIsLoading(false);
        setPlayerError(false);
        videoRef.current?.play().catch(() => {});
      });
      videoRef.current.addEventListener('error', () => {
        setPlayerError(true);
        setIsLoading(false);
      });
    } else {
      setPlayerError(true);
      setIsLoading(false);
    }
  };

  const loadDirectVideo = (url: string) => {
    if (!videoRef.current) return;
    videoRef.current.src = url;
    videoRef.current.load();
    videoRef.current.addEventListener('loadeddata', () => {
      setIsLoading(false);
      setPlayerError(false);
      videoRef.current?.play().catch(() => {});
    });
    videoRef.current.addEventListener('error', () => {
      setPlayerError(true);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (streams.length === 0 || !streams[activeServer]) return;
    setIsLoading(true);
    setPlayerError(false);
    const currentStream = streams[activeServer];

    if (isM3U8Url(currentStream.url)) {
      loadHLSStream(currentStream.url);
    } else if (isDirectVideoUrl(currentStream.url)) {
      loadDirectVideo(currentStream.url);
    } else {
      setIsLoading(false);
    }
  }, [activeServer, streams]);

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(e => console.log(e));
    } else {
      document.exitFullscreen?.().catch(e => console.log(e));
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const renderVideoPlayer = () => {
    if (streams.length === 0 || !streams[activeServer]) return null;
    const currentStream = streams[activeServer];
    const filterStyle = getCurrentFilterStyle();

    if (isM3U8Url(currentStream.url) || isDirectVideoUrl(currentStream.url)) {
      return (
        <video
          ref={videoRef}
          className="w-full h-full bg-black object-contain"
          style={filterStyle}
          controls
          playsInline
          autoPlay
          crossOrigin="anonymous"
        />
      );
    } else {
      return (
        <iframe
          src={currentStream.url}
          className="w-full h-full border-0 bg-black"
          style={filterStyle}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setPlayerError(true);
            setIsLoading(false);
          }}
        />
      );
    }
  };

  // Top Controls Component
  const TopControls = () => (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pointer-events-auto">
        {/* Title Badge */}
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
            <div className="w-2 h-2 bg-miraj-red rounded-full animate-pulse flex-shrink-0" />
            <span className="text-white text-[10px] sm:text-xs font-bold truncate uppercase tracking-wider max-w-[100px] sm:max-w-[200px]">
                {title || 'Now Playing'}
            </span>
        </div>

        {/* Enhancement Toggle */}
        <div className="flex items-center rounded-full overflow-hidden border border-white/20 shadow-lg">
            <button
                onClick={() => setVideoEnhancement(true)}
                className={`px-3 py-1.5 text-[10px] font-bold flex items-center gap-1 transition-colors ${videoEnhancement ? 'bg-miraj-gold text-black' : 'bg-black/60 text-gray-300 hover:text-white backdrop-blur-md'}`}
            >
                <Eye size={12} /> ON
            </button>
            <button
                onClick={() => setVideoEnhancement(false)}
                className={`px-3 py-1.5 text-[10px] font-bold transition-colors ${!videoEnhancement ? 'bg-miraj-gold text-black' : 'bg-black/60 text-gray-300 hover:text-white backdrop-blur-md'}`}
            >
                OFF
            </button>
        </div>

        {/* Filters */}
        {videoEnhancement && (
            <div className="relative shadow-lg group/select">
                <Palette size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover/select:text-miraj-gold transition-colors" />
                <select
                    value={videoFilter}
                    onChange={(e) => setVideoFilter(e.target.value)}
                    className="bg-black/60 backdrop-blur-md text-miraj-gold text-[10px] font-bold border border-white/20 rounded-full px-2 py-1.5 pl-7 pr-4 outline-none focus:border-miraj-gold cursor-pointer appearance-none uppercase tracking-wider hover:bg-black/80 transition-colors"
                >
                    {Object.keys(filterPresets).map(preset => (
                        <option key={preset} value={preset} className="bg-gray-900 text-white uppercase">{preset}</option>
                    ))}
                </select>
            </div>
        )}

        {/* Server Selector */}
        {streams.length > 1 && (
            <div className="relative shadow-lg group/select">
                <Server size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-hover/select:text-miraj-gold transition-colors" />
                <select
                    value={activeServer}
                    onChange={(e) => setActiveServer(Number(e.target.value))}
                    className="bg-black/60 backdrop-blur-md text-miraj-gold text-[10px] font-bold border border-white/20 rounded-full px-2 py-1.5 pl-7 pr-4 outline-none focus:border-miraj-gold cursor-pointer appearance-none max-w-[100px] sm:max-w-[140px] truncate hover:bg-black/80 transition-colors"
                >
                    {streams.map((s, i) => (
                        <option key={s.id} value={i} className="bg-gray-900 text-white">
                            {s.name.startsWith('Server') ? s.name : `Server ${i + 1}: ${s.name}`}
                        </option>
                    ))}
                </select>
            </div>
        )}

        {/* Fullscreen */}
        <button 
            onClick={handleFullscreen} 
            className="bg-black/60 backdrop-blur-md text-gray-300 border border-white/20 hover:text-white hover:border-miraj-gold hover:text-miraj-gold hover:bg-black/80 p-1.5 rounded-full transition-all shadow-lg"
            title="Toggle Fullscreen"
        >
            <Zap size={14} />
        </button>
    </div>
  );

  if (streams.length === 0) {
    return (
      <div className="w-full aspect-video bg-miraj-gray rounded-xl border border-gray-800 flex flex-col items-center justify-center text-gray-400">
        <AlertCircle className="mb-2 text-miraj-red" size={32} />
        <p>No streams available</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-black group ${isFullscreen ? 'h-screen w-screen fixed inset-0 z-50' : 'rounded-xl border border-gray-800 shadow-2xl overflow-hidden'}`}
    >
      {/* Top Controls Overlay - Centered and Responsive */}
      <div className="absolute top-0 left-0 right-0 p-4 z-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
         <div className="w-full flex justify-center">
            <TopControls />
         </div>
      </div>

      <div className={`relative w-full ${isFullscreen ? 'h-full' : 'aspect-video'}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-800 border-t-miraj-gold rounded-full animate-spin mb-4"></div>
            <span className="text-miraj-gold text-xs font-bold tracking-widest animate-pulse">CONNECTING...</span>
          </div>
        )}

        {playerError && (
          <div className="absolute inset-0 bg-black/90 z-30 flex flex-col items-center justify-center p-6 text-center">
            <AlertCircle size={40} className="text-miraj-red mb-3" />
            <p className="text-white font-bold mb-2">Stream Unavailable</p>
            <button 
                onClick={() => setActiveServer((prev) => (prev + 1) % streams.length)}
                className="mt-4 px-4 py-2 bg-miraj-gold text-black font-bold rounded-full text-sm hover:bg-white transition"
            >
                Try Next Server
            </button>
          </div>
        )}

        {renderVideoPlayer()}
      </div>
    </div>
  );
};

export default VideoPlayer;