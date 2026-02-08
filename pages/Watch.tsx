import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchById, fetchMovies, fetchTVShows, fetchSports, fetchTVLive } from '../services/tmdb';
import { MediaItem } from '../types';
import VideoPlayer from '../components/VideoPlayer';
import MovieCard from '../components/MovieCard';
import ShareModal from '../components/ShareModal';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Star, Share2, ChevronLeft, ChevronDown, Globe, PlayCircle } from 'lucide-react';

// Generate Timezone Offsets from -12 to +14 with 30-minute intervals
const generateTimezones = () => {
  const zones = [];
  // Loop from -24 to 28 representing -12.0 to +14.0 in 0.5 steps
  for (let i = -24; i <= 28; i++) {
    const offset = i / 2;
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = (absOffset % 1) * 60;
    
    // Format: GMT +05:30
    const label = `GMT ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    zones.push({ label, value: offset });
  }
  return zones;
};

const timezones = generateTimezones();

const Watch: React.FC = () => {
  const { type, id } = useParams<{ type: 'movie' | 'tv' | 'sports' | 'tv_live', id: string }>();
  const [media, setMedia] = useState<MediaItem | null>(null);
  const [recommendations, setRecommendations] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  
  // Real-time clock for status updates
  const [currentTime, setCurrentTime] = useState(Date.now());
  
  const [timezoneOffset, setTimezoneOffset] = useState<number>(0);

  // Dedicated scroll effect ensuring top position on ID change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id, type]);

  // Force re-fetch when ID changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setMedia(null); // Clear previous media to force player unmount/remount
      
      try {
        if (id && type) {
          const item = await fetchById(id, type);
          setMedia(item);
          
          // Strict Category Recommendations
          let recs: MediaItem[] = [];
          switch(type) {
            case 'movie': recs = await fetchMovies(); break;
            case 'tv': recs = await fetchTVShows(); break;
            case 'sports': recs = await fetchSports(); break;
            case 'tv_live': recs = await fetchTVLive(); break;
            default: recs = await fetchMovies();
          }

          // For sports, filter out ended events and sort by time
          if (type === 'sports') {
              const now = Date.now();
              const durationMs = 4 * 60 * 60 * 1000; // 4 hours event duration
              
              recs = recs
                .filter(r => r.id !== id)
                // Filter out events that have already ended
                .filter(r => {
                  const eventTimeUTC = new Date(r.release_date).getTime();
                  const endTimeUTC = eventTimeUTC + durationMs;
                  return now <= endTimeUTC; // Only show events that haven't ended yet
                })
                .sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime())
                .slice(0, 10);
          } else {
              recs = recs.filter(r => r.id !== id).slice(0, 6);
          }
          
          setRecommendations(recs);
        }
      } catch (e) {
        console.error("Error loading watch data", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();

    // Ticker for auto status updates
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);
    return () => clearInterval(timer);

  }, [id, type]);

  // Handle Sharing
  const handleShare = async () => {
    if (!media) return;
    const shareData = {
        title: media.title,
        text: `Watch ${media.title} on Movierulz Official. ${media.overview}`,
        url: window.location.href,
    };
    if (navigator.share) {
        try { await navigator.share(shareData); } catch (err) { console.log('Error sharing:', err); }
    } else {
        setIsShareModalOpen(true);
    }
  };

  // Helper: Get Current Date in Selected Timezone (for Sport Header)
  const getHeaderDate = () => {
    const now = new Date(currentTime);
    const currentUTCTime = now.getTime();
    const targetTimeMs = currentUTCTime + (timezoneOffset * 3600000);
    const targetDate = new Date(targetTimeMs);
    
    return targetDate.toLocaleDateString('en-GB', { 
      weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
    });
  };

  const renderSportsRow = (item: MediaItem) => {
    const eventTimeUTC = new Date(item.release_date).getTime();
    const durationMs = 4 * 60 * 60 * 1000;
    const endTimeUTC = eventTimeUTC + durationMs;

    let status: 'LIVE' | 'ENDED' | 'UPCOMING' = 'UPCOMING';
    if (currentTime > endTimeUTC) status = 'ENDED';
    else if (currentTime >= eventTimeUTC && currentTime <= endTimeUTC) status = 'LIVE';

    const offsetMs = timezoneOffset * 60 * 60 * 1000;
    const shiftedDate = new Date(eventTimeUTC + offsetMs);
    
    const headerDateStr = getHeaderDate();
    const itemDateStr = shiftedDate.toLocaleDateString('en-GB', { 
        weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
    });
    const isToday = headerDateStr === itemDateStr;

    const hours = shiftedDate.getUTCHours();
    const minutes = shiftedDate.getUTCMinutes().toString().padStart(2, '0');
    const displayTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
    const displayDay = isToday ? '' : shiftedDate.toLocaleDateString('en-GB', { 
        day: 'numeric', month: 'short', timeZone: 'UTC'
    });

    return (
        <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 py-4 border-b border-gray-800 hover:bg-white/5 transition-colors px-4 group">
            {/* Time */}
            <div className="w-20 flex-shrink-0 flex flex-col items-start justify-center">
                {status === 'LIVE' ? (
                    <span className="text-miraj-red font-bold animate-pulse flex items-center gap-2 text-xs">
                        <span className="w-1.5 h-1.5 bg-miraj-red rounded-full"></span> LIVE
                    </span>
                ) : (
                    <>
                        <span className="text-xl text-miraj-gold font-mono font-bold leading-none">{displayTime}</span>
                        {displayDay && <span className="text-[9px] text-gray-500 uppercase font-bold mt-0.5">{displayDay}</span>}
                    </>
                )}
            </div>

            {/* Info */}
            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                     <span className="text-[9px] font-bold uppercase tracking-wider text-miraj-gold border border-miraj-gold/30 px-1.5 py-px rounded">
                        {item.genres?.[0] || 'Sport'}
                     </span>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base truncate group-hover:text-miraj-gold transition-colors">{item.title}</h3>
            </div>

            {/* Action */}
            <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
                <Link to={`/watch/sports/${item.id}`} className={`flex items-center justify-center gap-2 w-full md:w-auto px-4 py-2 rounded font-bold text-xs uppercase transition-all ${status === 'LIVE' ? 'bg-miraj-red text-white hover:bg-red-700' : 'bg-miraj-gold text-black hover:bg-white'}`}>
                    <PlayCircle size={14} fill={status === 'LIVE' ? 'white' : 'black'} /> 
                    {status === 'LIVE' ? 'Watch' : 'Awaiting Live'}
                </Link>
            </div>
        </div>
    );
  };

  if (loading) {
    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-miraj-gold gap-4">
            <div className="w-12 h-12 border-4 border-gray-800 border-t-miraj-gold rounded-full animate-spin"></div>
            <p className="tracking-widest text-sm font-bold">LOADING Movierulz Official</p>
        </div>
    );
  }

  if (!media) {
    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-white gap-4">
            <p className="text-xl">Content not found</p>
            <Link to="/" className="px-6 py-2 bg-miraj-gold text-black font-bold rounded-full">Go Home</Link>
        </div>
    );
  }

  const absolutePosterUrl = media.poster_path.startsWith('http') 
    ? media.poster_path 
    : `${window.location.origin}${media.poster_path.startsWith('/') ? '' : '/'}${media.poster_path}`;

  return (
    <div className="bg-miraj-black min-h-screen pb-12 pt-20 md:pt-24">
      <Helmet>
        <title>{media.title} | Movierulz Official</title>
        <meta name="description" content={media.overview.substring(0, 150)} />
        <meta property="og:image" content={absolutePosterUrl} />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-4 mb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-miraj-gold transition-colors font-bold uppercase text-xs tracking-wider">
            <ChevronLeft size={16} /> Back to Home
        </Link>
      </div>

      <div className="w-full bg-black min-h-[40vh] md:min-h-[60vh] flex flex-col items-center justify-center border-y border-gray-900 shadow-2xl">
        <div className="w-full max-w-[1400px] mx-auto md:px-4 lg:px-8 py-0 md:py-6">
             <VideoPlayer key={media.id} tmdbId={media.id} type={media.media_type} title={media.title} customStreams={media.streams} />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-in">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{media.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6 bg-miraj-gray/30 p-3 rounded-lg w-fit">
                    <span className="flex items-center gap-1 text-white font-bold"><Star size={16} className="text-miraj-gold" fill="#d4af37" /> {media.vote_average.toFixed(1)}</span>
                    <span className="w-px h-4 bg-gray-700"></span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {media.duration}</span>
                    <span className="px-2 py-0.5 bg-miraj-gold text-black font-bold rounded text-[10px] uppercase">HD</span>
                </div>
                <div className="flex gap-4 mb-8">
                    <button onClick={handleShare} className="flex items-center gap-2 bg-miraj-gray hover:bg-miraj-gold hover:text-black text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border border-gray-700 group">
                        <Share2 size={18} className="text-miraj-gold group-hover:text-black transition-colors" /> Share
                    </button>
                </div>
                <div className="mb-8">
                    <h3 className="text-miraj-gold font-bold uppercase text-xs tracking-widest mb-3">Synopsis</h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{media.overview}</p>
                </div>
            </div>

            <div className="hidden lg:block animate-slide-up">
                <img src={media.poster_path} alt={media.title} className="w-full rounded-xl shadow-2xl mb-6 border border-gray-800" />
            </div>
        </div>

        {/* Recommendations Section */}
        {type === 'sports' ? (
            <div className="mt-16 border-t border-gray-800 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                     <h2 className="text-2xl font-bold text-white border-l-4 border-miraj-gold pl-4">
                        Upcoming Live Sports
                     </h2>
                     <div className="flex items-center gap-2">
                        <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest hidden md:block">Timezone</label>
                        <div className="flex items-center gap-2 bg-black border border-miraj-gold/30 hover:border-miraj-gold transition-colors rounded px-3 py-1.5">
                            <Globe size={14} className="text-miraj-gold" />
                            <select 
                                value={timezoneOffset}
                                onChange={(e) => setTimezoneOffset(Number(e.target.value))}
                                className="bg-transparent text-xs text-white outline-none border-none font-bold font-mono cursor-pointer appearance-none min-w-[90px] text-right"
                            >
                                {timezones.map(tz => (
                                    <option key={tz.label} value={tz.value} className="bg-miraj-gray text-white">
                                        {tz.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={12} className="text-miraj-gold" />
                        </div>
                     </div>
                </div>

                <div className="bg-miraj-card/50 border border-gray-800 rounded-lg overflow-hidden">
                     {recommendations.length > 0 ? (
                        <div className="divide-y divide-gray-800">
                            {recommendations.map(renderSportsRow)}
                        </div>
                     ) : (
                        <p className="p-8 text-center text-gray-500">No upcoming events scheduled.</p>
                     )}
                </div>
                  <p className="text-sm items-center text-red-700 font-bold">We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners</p>
            </div>
        ) : (
            <div className="mt-16 border-t border-gray-800 pt-12">
                <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-miraj-gold pl-4">
                    {type === 'tv' ? 'Similar TV Shows' : type === 'tv_live' ? 'Recommended Live TV' : 'Recommended Movies'}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                    {recommendations.map(item => (
                        <MovieCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )}
      </div>
      
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} title={media.title} url={window.location.href} />
    </div>
  );
};

export default Watch;
