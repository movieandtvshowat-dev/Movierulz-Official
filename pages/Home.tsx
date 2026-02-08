// import React, { useEffect, useState } from 'react';
// import { useLocation, useSearchParams, Link } from 'react-router-dom';
// import { fetchMovies, fetchTVShows, fetchSports, fetchTVLive } from '../services/tmdb';
// import { MediaItem } from '../types';
// import HeroSlider from '../components/HeroSlider';
// import MovieCard from '../components/MovieCard';
// import { Film, Tv, Trophy, Radio, ChevronDown, Clock, Globe, CalendarDays, PlayCircle, AlertCircle } from 'lucide-react';
// import { Helmet } from 'react-helmet-async';

// // Paginated Section Component for Movies/TV (Grid Layout)
// const PaginatedSection = ({ 
//   title, 
//   icon: Icon, 
//   items, 
//   visible,
//   customRender
// }: { 
//   title: string, 
//   icon: any, 
//   items: MediaItem[], 
//   visible: boolean,
//   customRender?: (item: MediaItem) => React.ReactNode
// }) => {
//   const [displayCount, setDisplayCount] = useState(12);

//   useEffect(() => {
//     setDisplayCount(12);
//   }, [items]);

//   if (!visible || !items || items.length === 0) return null;

//   const visibleItems = items.slice(0, displayCount);
//   const hasMore = displayCount < items.length;

//   const handleLoadMore = () => {
//     setDisplayCount(prev => prev + 12);
//   };

//   return (
//     <div className="mb-12 animate-slide-up">
//         <div className="flex items-center justify-between mb-6 px-4 md:px-0">
//             <div className="flex items-center gap-3">
//                 <div className="w-1 h-8 bg-miraj-gold rounded-full shadow-[0_0_10px_#d4af37]"></div>
//                 <div className="flex items-center gap-2">
//                   <Icon className="text-miraj-gold w-5 h-5 md:w-6 md:h-6" />
//                   <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
//                 </div>
//             </div>
//             <div className="text-xs text-gray-500 font-medium">
//                 Showing {Math.min(displayCount, items.length)} of {items.length}
//             </div>
//         </div>
        
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6 px-4 md:px-0">
//             {visibleItems.map((item, idx) => (
//                 <div key={item.id} style={{ animationDelay: `${(idx % 12) * 50}ms` }} className="animate-fade-in">
//                   {customRender ? customRender(item) : <MovieCard item={item} />}
//                 </div>
//             ))}
//         </div>

//         {hasMore && (
//           <div className="mt-8 flex justify-center">
//              <button 
//                 onClick={handleLoadMore}
//                 className="group flex items-center gap-2 px-8 py-3 bg-transparent border border-miraj-gold/50 text-miraj-gold rounded-full font-bold uppercase tracking-widest text-xs hover:bg-miraj-gold hover:text-black transition-all duration-300"
//              >
//                 Load More <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
//              </button>
//           </div>
//         )}
//     </div>
//   );
// };

// // Generate Timezone Offsets from -12 to +14 with 30-minute intervals
// const generateTimezones = () => {
//   const zones = [];
//   // Loop from -24 to 28 representing -12.0 to +14.0 in 0.5 steps
//   for (let i = -24; i <= 28; i++) {
//     const offset = i / 2;
//     const sign = offset >= 0 ? '+' : '-';
//     const absOffset = Math.abs(offset);
//     const hours = Math.floor(absOffset);
//     const minutes = (absOffset % 1) * 60;
    
//     // Format: GMT +05:30
//     const label = `GMT ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
//     zones.push({ label, value: offset });
//   }
//   return zones;
// };

// const timezones = generateTimezones();

// const Home: React.FC = () => {
//   const [movies, setMovies] = useState<MediaItem[]>([]);
//   const [tvShows, setTVShows] = useState<MediaItem[]>([]);
//   const [sports, setSports] = useState<MediaItem[]>([]);
//   const [tvLive, setTvLive] = useState<MediaItem[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // Real-time clock for status updates
//   const [currentTime, setCurrentTime] = useState(Date.now());

//   // Default to GMT 0
//   const [timezoneOffset, setTimezoneOffset] = useState<number>(0);
  
//   const location = useLocation();
//   const [searchParams] = useSearchParams();
//   const searchQuery = searchParams.get('search');
  
//   const path = location.pathname;

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const [m, t, s, l] = await Promise.all([
//           fetchMovies(),
//           fetchTVShows(),
//           fetchSports(),
//           fetchTVLive()
//         ]);
//         setMovies(m || []);
//         setTVShows(t || []);
//         setSports(s || []);
//         setTvLive(l || []);
//       } catch (e) {
//         console.error("Failed to load data", e);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadData();

//     // Set up a ticker to update current time every minute
//     // This ensures statuses (Upcoming -> Live) update automatically
//     const timer = setInterval(() => {
//       setCurrentTime(Date.now());
//     }, 60000); // Check every minute

//     return () => clearInterval(timer);
//   }, []);

//   if (loading) {
//     return (
//         <div className="h-screen w-full bg-miraj-black flex flex-col items-center justify-center gap-4">
//              <div className="w-16 h-16 border-4 border-gray-800 border-t-miraj-gold rounded-full animate-spin"></div>
//              <p className="text-miraj-gold text-sm tracking-widest animate-pulse">LOADING MOVIERULZ™ OFFICIAL</p>
//         </div>
//     );
//   }

//   // Handle Search Logic
//   if (searchQuery) {
//     const lowerQuery = searchQuery.toLowerCase();
//     const allItems = [...movies, ...tvShows, ...sports, ...tvLive];
//     const results = allItems.filter(item => 
//         item.title.toLowerCase().includes(lowerQuery) || 
//         item.genres?.some(g => g.toLowerCase().includes(lowerQuery))
//     );

//     return (
//         <div className="bg-miraj-black min-h-screen pt-24 pb-20 px-4">
//             <Helmet><title>Search: {searchQuery} | Movierulz Official</title></Helmet>
//             <div className="max-w-[1400px] mx-auto">
//                 <div className="mb-8 border-b border-gray-800 pb-4">
//                     <h1 className="text-2xl text-white font-bold">Search Results for: <span className="text-miraj-gold">"{searchQuery}"</span></h1>
//                     <p className="text-gray-500 text-sm mt-2">{results.length} items found</p>
//                 </div>
//                 {results.length > 0 ? (
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//                         {results.map(item => <MovieCard key={item.id} item={item} />)}
//                     </div>
//                 ) : (
//                     <div className="text-center py-20">
//                         <p className="text-gray-500">No content found matching your query.</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
//   }

//   // Determine what to show based on the current route
//   const showAll = path === '/';
//   const showMovies = showAll || path === '/movies';
//   const showTV = showAll || path === '/tv';
//   const showSports = showAll || path === '/sports';
//   const showLive = showAll || path === '/tv_live';

//   // Generate SEO Meta Data
//   const getPageTitle = () => {
//     if (path === '/movies') return 'Watch Latest Movies | Movierulz Official';
//     if (path === '/tv') return 'Watch TV Shows | Movierulz Official';
//     if (path === '/sports') return 'Live Sports Streaming | Movierulz Official';
//     if (path === '/tv_live') return 'Live TV Channels | Movierulz Official';
//     return 'Movierulz Official | Premium Video Entertainment';
//   };

//   // Hero Items Logic
//   let heroItems: MediaItem[] = [];
//   if (path === '/movies') heroItems = movies.slice(0, 8);
//   else if (path === '/tv') heroItems = tvShows.slice(0, 8);
//   else if (path === '/sports') heroItems = sports.slice(0, 8);
//   else if (path === '/tv_live') heroItems = tvLive.slice(0, 8);
//   else heroItems = [...movies.slice(0, 3), ...tvShows.slice(0, 2), ...sports.slice(0, 2)];

//   // --------------------------------------------------------------------------------
//   // SPORTS SCHEDULE LOGIC
//   // --------------------------------------------------------------------------------
  
//   // Helper: Get Current Date in Selected Timezone for the Header
//   const getHeaderDate = () => {
//     const now = new Date(currentTime); // Use reactive currentTime
//     // Get absolute UTC timestamp
//     const currentUTCTime = now.getTime();
//     // Shift timestamp by offset hours (in milliseconds)
//     const targetTimeMs = currentUTCTime + (timezoneOffset * 3600000);
//     const targetDate = new Date(targetTimeMs);
    
//     // Format using UTC zone to reflect the shifted time accurately
//     return targetDate.toLocaleDateString('en-GB', { 
//       weekday: 'long', 
//       day: 'numeric', 
//       month: 'short', 
//       year: 'numeric',
//       timeZone: 'UTC'
//     });
//   };

//   // Render a Single Sports Row
//   const renderSportsRow = (item: MediaItem) => {
//     // 1. Time Logic
//     const eventTimeUTC = new Date(item.release_date).getTime();
//     const durationMs = 4 * 60 * 60 * 1000;
//     const endTimeUTC = eventTimeUTC + durationMs;

//     // 2. Status Determination (Based on reactive currentTime)
//     let status: 'LIVE' | 'ENDED' | 'UPCOMING' = 'UPCOMING';
//     if (currentTime > endTimeUTC) status = 'ENDED';
//     else if (currentTime >= eventTimeUTC && currentTime <= endTimeUTC) status = 'LIVE';

//     // 3. Display Time Calculation (Relative to Offset)
//     // IMPORTANT: This strictly uses the item's fixed release_date. 
//     // It does not change with 'currentTime', only with 'timezoneOffset'.
//     const offsetMs = timezoneOffset * 60 * 60 * 1000;
//     const shiftedDate = new Date(eventTimeUTC + offsetMs);
    
//     // Check if the event date matches "Today" in the selected timezone
//     const headerDateStr = getHeaderDate();
//     const itemDateStr = shiftedDate.toLocaleDateString('en-GB', { 
//         weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' 
//     });
//     const isToday = headerDateStr === itemDateStr;

//     // Formatting using UTC methods to ensure stability
//     const hours = shiftedDate.getUTCHours();
//     const minutes = shiftedDate.getUTCMinutes().toString().padStart(2, '0');
//     const displayTime = `${hours.toString().padStart(2, '0')}:${minutes}`;
    
//     const displayDay = isToday ? '' : shiftedDate.toLocaleDateString('en-GB', { 
//         day: 'numeric', month: 'short', timeZone: 'UTC' 
//     });

//     return (
//         <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6 border-b border-gray-800 hover:bg-white/5 transition-colors px-4 md:px-6 group">
            
//             {/* Time Column */}
//             <div className="w-24 md:w-32 flex-shrink-0 flex flex-col items-start justify-center">
//                 {status === 'LIVE' ? (
//                     <span className="text-miraj-red font-bold animate-pulse flex items-center gap-2">
//                         <span className="w-2 h-2 bg-miraj-red rounded-full"></span> LIVE
//                     </span>
//                 ) : (
//                     <>
//                         <span className="text-2xl md:text-3xl text-miraj-gold font-mono font-bold leading-none">{displayTime}</span>
//                         {displayDay && <span className="text-[10px] text-gray-500 uppercase font-bold mt-1">{displayDay}</span>}
//                     </>
//                 )}
//             </div>

//             {/* Info Column */}
//             <div className="flex-grow min-w-0">
//                 <div className="flex items-center gap-2 mb-1">
//                      <span className="text-[10px] font-bold uppercase tracking-wider text-miraj-gold border border-miraj-gold/30 px-2 py-0.5 rounded">
//                         {item.genres?.[0] || 'Sport'}
//                      </span>
//                      {status === 'ENDED' && <span className="text-[10px] text-gray-500 font-bold uppercase">Event Ended</span>}
//                 </div>
//                 <h3 className="text-white font-bold text-lg md:text-xl truncate group-hover:text-miraj-gold transition-colors">{item.title}</h3>
//                 <p className="text-gray-400 text-xs md:text-sm mt-1 line-clamp-1">{item.overview}</p>
//             </div>

//             {/* Action Column */}
//             <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
//                 {status === 'ENDED' ? (
//                     <Link to={`/watch/sports/${item.id}`} className="flex items-center justify-center gap-2 w-full md:w-auto bg-gray-800 text-gray-400 px-6 py-3 rounded-lg font-bold text-xs uppercase hover:bg-gray-700 transition-colors">
//                         <PlayCircle size={16} /> Replay
//                     </Link>
//                 ) : (
//                      <Link to={`/watch/sports/${item.id}`} className={`flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-lg font-bold text-sm uppercase transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] ${status === 'LIVE' ? 'bg-miraj-red text-white hover:bg-red-700 hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]' : 'bg-miraj-gold text-black hover:bg-white'}`}>
//                         <PlayCircle size={18} fill={status === 'LIVE' ? 'white' : 'black'} /> 
//                         {status === 'LIVE' ? 'Watch Live' : 'Awaiting Live'}
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
//   }

//   return (
//     <div className="bg-miraj-black min-h-screen pb-20">
//       <Helmet>
//         <title>{getPageTitle()}</title>
//       </Helmet>

//       <HeroSlider items={heroItems} />
      
//       <div className="max-w-[1400px] mx-auto mt-8 md:mt-16 md:px-8 space-y-12">
        
//         <PaginatedSection title="Now Showing Movies" icon={Film} items={movies} visible={showMovies} />
        
//         <PaginatedSection title="Trending TV Shows" icon={Tv} items={tvShows} visible={showTV} />
        
//         {/* ================= SPORTS SCHEDULE SECTION ================= */}
//         {showSports && (
//             <div className="animate-slide-up mb-12">
//                 {/* Sports Header: Date & Timezone */}
//                 <div className="bg-miraj-card border-t-4 border-miraj-gold rounded-t-lg p-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
//                     <div>
//                         <div className="flex items-center gap-2 mb-2">
//                              <Trophy className="text-miraj-gold w-6 h-6" />
//                              <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Live Sports Schedule</h2>
//                         </div>
//                         <div className="flex items-center gap-2 text-gray-400 text-sm">
//                             <CalendarDays size={16} className="text-miraj-gold" />
//                             <span className="font-mono font-bold uppercase tracking-wider">{getHeaderDate()}</span>
//                         </div>
//                     </div>

//                     <div className="flex flex-col items-start md:items-end gap-1">
//                         <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Schedule Timezone</label>
//                         <div className="flex items-center gap-2 bg-black border border-miraj-gold/30 hover:border-miraj-gold transition-colors rounded px-4 py-2 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
//                             <Globe size={16} className="text-miraj-gold" />
//                             <select 
//                                 value={timezoneOffset}
//                                 onChange={(e) => setTimezoneOffset(Number(e.target.value))}
//                                 className="bg-transparent text-sm text-white outline-none border-none font-bold font-mono cursor-pointer appearance-none min-w-[100px] text-right"
//                             >
//                                 {timezones.map(tz => (
//                                     <option key={tz.label} value={tz.value} className="bg-miraj-gray text-white">
//                                         {tz.label}
//                                     </option>
//                                 ))}
//                             </select>
//                             <ChevronDown size={14} className="text-miraj-gold" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sports List Container */}
//                 <div className="bg-miraj-card/50 border-x border-b border-gray-800 rounded-b-lg overflow-hidden">
//                     {sports.length > 0 ? (
//                         <div className="divide-y divide-gray-800">
//                             {sports.map(renderSportsRow)}
//                         </div>
//                     ) : (
//                         <div className="p-12 text-center flex flex-col items-center text-gray-500">
//                             <AlertCircle size={48} className="mb-4 text-gray-700" />
//                             <p className="text-lg font-bold">No Events Scheduled</p>
//                             <p className="text-sm">Check back later for updated match times.</p>
//                         </div>
//                     )}
//                 </div>
//                 <p className="text-sm items-center text-red-700 font-bold">We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners</p>
//             </div>
//         )}
//         {/* ================= END SPORTS SECTION ================= */}

//         <PaginatedSection title="Live TV Channels" icon={Radio} items={tvLive} visible={showLive} />
//       </div>
//     </div>
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import { fetchMovies, fetchTVShows, fetchSports, fetchTVLive } from '../services/tmdb';
import { MediaItem } from '../types';
import HeroSlider from '../components/HeroSlider';
import MovieCard from '../components/MovieCard';
import { Film, Tv, Trophy, Radio, ChevronDown, Globe, CalendarDays, PlayCircle, AlertCircle, Search, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Paginated Section Component for Movies/TV (Grid Layout)
const PaginatedSection = ({ 
  title, 
  icon: Icon, 
  items, 
  visible,
  customRender
}: { 
  title: string, 
  icon: any, 
  items: MediaItem[], 
  visible: boolean,
  customRender?: (item: MediaItem) => React.ReactNode
}) => {
  const [displayCount, setDisplayCount] = useState(12);

  useEffect(() => {
    setDisplayCount(12);
  }, [items]);

  if (!visible || !items || items.length === 0) return null;

  const visibleItems = items.slice(0, displayCount);
  const hasMore = displayCount < items.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 12);
  };

  return (
    <div className="mb-12 animate-slide-up">
        <div className="flex items-center justify-between mb-6 px-4 md:px-0">
            <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-miraj-gold rounded-full shadow-[0_0_10px_#d4af37]"></div>
                <div className="flex items-center gap-2">
                  <Icon className="text-miraj-gold w-5 h-5 md:w-6 md:h-6" />
                  <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">{title}</h2>
                </div>
            </div>
            <div className="text-xs text-gray-500 font-medium">
                Showing {Math.min(displayCount, items.length)} of {items.length}
            </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6 px-4 md:px-0">
            {visibleItems.map((item, idx) => (
                <div key={item.id} style={{ animationDelay: `${(idx % 12) * 50}ms` }} className="animate-fade-in">
                  {customRender ? customRender(item) : <MovieCard item={item} />}
                </div>
            ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
             <button 
                onClick={handleLoadMore}
                className="group flex items-center gap-2 px-8 py-3 bg-transparent border border-miraj-gold/50 text-miraj-gold rounded-full font-bold uppercase tracking-widest text-xs hover:bg-miraj-gold hover:text-black transition-all duration-300"
             >
                Load More <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
             </button>
          </div>
        )}
    </div>
  );
};

// Generate Timezone Offsets from -12 to +14 with 30-minute intervals
const generateTimezones = () => {
  const zones = [];
  for (let i = -24; i <= 28; i++) {
    const offset = i / 2;
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = (absOffset % 1) * 60;
    const label = `GMT ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    zones.push({ label, value: offset });
  }
  return zones;
};

const timezones = generateTimezones();

const Home: React.FC = () => {
  const [movies, setMovies] = useState<MediaItem[]>([]);
  const [tvShows, setTVShows] = useState<MediaItem[]>([]);
  const [sports, setSports] = useState<MediaItem[]>([]);
  const [tvLive, setTvLive] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<MediaItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [timezoneOffset, setTimezoneOffset] = useState<number>(0);
  
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchQueryParam = searchParams.get('search');
  const path = location.pathname;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [m, t, s, l] = await Promise.all([
          fetchMovies(),
          fetchTVShows(),
          fetchSports(),
          fetchTVLive()
        ]);
        setMovies(m || []);
        setTVShows(t || []);
        setSports(s || []);
        setTvLive(l || []);
      } catch (e) {
        console.error("Failed to load data", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();

    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // CLIENT-SIDE SEARCH FUNCTION
  const performSearch = (query: string): MediaItem[] => {
    if (!query || query.trim().length < 2) return [];
    
    const lowerQuery = query.toLowerCase().trim();
    const allItems = [...movies, ...tvShows, ...sports, ...tvLive];
    
    return allItems.filter(item => {
      const title = (item.title || '').toLowerCase();
      const overview = (item.overview || '').toLowerCase();
      const genres = item.genres?.map(g => g.toLowerCase()).join(' ') || '';
      
      return title.includes(lowerQuery) || 
             overview.includes(lowerQuery) || 
             genres.includes(lowerQuery);
    });
  };

  // Search Handler
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim() || searchQuery.trim().length < 2) return;

    setIsSearching(true);
    setShowSearchResults(true);
    
    // Simulate async search with slight delay for UX
    setTimeout(() => {
      const results = performSearch(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    }, 300);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
  };

  if (loading) {
    return (
        <div className="h-screen w-full bg-miraj-black flex flex-col items-center justify-center gap-4">
             <div className="w-16 h-16 border-4 border-gray-800 border-t-miraj-gold rounded-full animate-spin"></div>
             <p className="text-miraj-gold text-sm tracking-widest animate-pulse">LOADING MOVIERULZ™ OFFICIAL</p>
        </div>
    );
  }

  // Handle Search from URL params
  if (searchQueryParam) {
    const results = performSearch(searchQueryParam);

    return (
        <div className="bg-miraj-black min-h-screen pt-24 pb-20 px-4">
            <Helmet><title>Search: {searchQueryParam} | Movierulz Official</title></Helmet>
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-8 border-b border-gray-800 pb-4">
                    <h1 className="text-2xl text-white font-bold">Search Results for: <span className="text-miraj-gold">"{searchQueryParam}"</span></h1>
                    <p className="text-gray-500 text-sm mt-2">{results.length} items found</p>
                </div>
                {results.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {results.map(item => <MovieCard key={item.id} item={item} />)}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No content found matching your query.</p>
                    </div>
                )}
            </div>
        </div>
    )
  }

  const showAll = path === '/';
  const showMovies = showAll || path === '/movies';
  const showTV = showAll || path === '/tv';
  const showSports = showAll || path === '/sports';
  const showLive = showAll || path === '/tv_live';

  const getPageTitle = () => {
    if (path === '/movies') return 'Watch Latest Movies | Movierulz Official';
    if (path === '/tv') return 'Watch TV Shows | Movierulz Official';
    if (path === '/sports') return 'Live Sports Streaming | Movierulz Official';
    if (path === '/tv_live') return 'Live TV Channels | Movierulz Official';
    return 'Movierulz Official | Premium Video Entertainment';
  };

  let heroItems: MediaItem[] = [];
  if (path === '/movies') heroItems = movies.slice(0, 8);
  else if (path === '/tv') heroItems = tvShows.slice(0, 8);
  else if (path === '/sports') heroItems = sports.slice(0, 8);
  else if (path === '/tv_live') heroItems = tvLive.slice(0, 8);
  else heroItems = [...movies.slice(0, 3), ...tvShows.slice(0, 2), ...sports.slice(0, 2)];

  const getHeaderDate = () => {
    const now = new Date(currentTime);
    const currentUTCTime = now.getTime();
    const targetTimeMs = currentUTCTime + (timezoneOffset * 3600000);
    const targetDate = new Date(targetTimeMs);
    
    return targetDate.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      timeZone: 'UTC'
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
        <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 py-6 border-b border-gray-800 hover:bg-white/5 transition-colors px-4 md:px-6 group">
            <div className="w-24 md:w-32 flex-shrink-0 flex flex-col items-start justify-center">
                {status === 'LIVE' ? (
                    <span className="text-miraj-red font-bold animate-pulse flex items-center gap-2">
                        <span className="w-2 h-2 bg-miraj-red rounded-full"></span> LIVE
                    </span>
                ) : (
                    <>
                        <span className="text-2xl md:text-3xl text-miraj-gold font-mono font-bold leading-none">{displayTime}</span>
                        {displayDay && <span className="text-[10px] text-gray-500 uppercase font-bold mt-1">{displayDay}</span>}
                    </>
                )}
            </div>

            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-miraj-gold border border-miraj-gold/30 px-2 py-0.5 rounded">
                        {item.genres?.[0] || 'Sport'}
                     </span>
                     {status === 'ENDED' && <span className="text-[10px] text-gray-500 font-bold uppercase">Event Ended</span>}
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl truncate group-hover:text-miraj-gold transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mt-1 line-clamp-1">{item.overview}</p>
            </div>

            <div className="w-full md:w-auto mt-2 md:mt-0 flex-shrink-0">
                {status === 'ENDED' ? (
                    <Link to={`/watch/sports/${item.id}`} className="flex items-center justify-center gap-2 w-full md:w-auto bg-gray-800 text-gray-400 px-6 py-3 rounded-lg font-bold text-xs uppercase hover:bg-gray-700 transition-colors">
                        <PlayCircle size={16} /> Replay
                    </Link>
                ) : (
                     <Link to={`/watch/sports/${item.id}`} className={`flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-lg font-bold text-sm uppercase transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] ${status === 'LIVE' ? 'bg-miraj-red text-white hover:bg-red-700 hover:shadow-[0_0_15px_rgba(229,9,20,0.4)]' : 'bg-miraj-gold text-black hover:bg-white'}`}>
                        <PlayCircle size={18} fill={status === 'LIVE' ? 'white' : 'black'} /> 
                        {status === 'LIVE' ? 'Watch Live' : 'Awaiting Live'}
                    </Link>
                )}
            </div>
        </div>
    );
  }

  return (
    <div className="bg-miraj-black min-h-screen pb-20">
      <Helmet>
        <title>{getPageTitle()}</title>
      </Helmet>

      <HeroSlider items={heroItems} />
      
      {/* SEARCH SECTION */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-8 md:mt-12">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 shadow-2xl transition-all duration-300 focus-within:border-miraj-gold focus-within:bg-white/15">
              <Search className="text-gray-400 ml-4" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies, TV shows, sports, live TV..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-2 py-3 text-sm md:text-base"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="text-gray-400" size={18} />
                </button>
              )}
              <button
                type="submit"
                disabled={isSearching || searchQuery.trim().length < 2}
                className="bg-miraj-gold hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSearching ? 'Searching...' : 'Find'}
              </button>
            </div>
          </form>

          {/* SEARCH RESULTS */}
          {showSearchResults && (
            <div className="mt-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Search Results {searchResults.length > 0 && (
                    <span className="text-miraj-gold ml-2">({searchResults.length})</span>
                  )}
                </h2>
                <button
                  onClick={clearSearch}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {isSearching ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-12 h-12 border-4 border-white/10 border-t-miraj-gold rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-400">Searching...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                  {searchResults.map((item) => (
                    <MovieCard key={`search-${item.media_type}-${item.id}`} item={item as any} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16">
                  <Search className="text-gray-600 mb-4" size={48} />
                  <p className="text-gray-400 text-center">
                    No results found for "<span className="text-white font-semibold">{searchQuery}</span>"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Try a different search term</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-8 md:mt-16 md:px-8 space-y-12">
        
        <PaginatedSection title="Now Showing Movies" icon={Film} items={movies} visible={showMovies} />
        
        <PaginatedSection title="Trending TV Shows" icon={Tv} items={tvShows} visible={showTV} />
        
        {/* SPORTS SCHEDULE SECTION */}
        {showSports && (
            <div className="animate-slide-up mb-12">
                <div className="bg-miraj-card border-t-4 border-miraj-gold rounded-t-lg p-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                             <Trophy className="text-miraj-gold w-6 h-6" />
                             <h2 className="text-2xl font-bold text-white uppercase tracking-wide">Live Sports Schedule</h2>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <CalendarDays size={16} className="text-miraj-gold" />
                            <span className="font-mono font-bold uppercase tracking-wider">{getHeaderDate()}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-1">
                        <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Schedule Timezone</label>
                        <div className="flex items-center gap-2 bg-black border border-miraj-gold/30 hover:border-miraj-gold transition-colors rounded px-4 py-2 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                            <Globe size={16} className="text-miraj-gold" />
                            <select 
                                value={timezoneOffset}
                                onChange={(e) => setTimezoneOffset(Number(e.target.value))}
                                className="bg-transparent text-sm text-white outline-none border-none font-bold font-mono cursor-pointer appearance-none min-w-[100px] text-right"
                            >
                                {timezones.map(tz => (
                                    <option key={tz.label} value={tz.value} className="bg-miraj-gray text-white">
                                        {tz.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="text-miraj-gold" />
                        </div>
                    </div>
                </div>

                <div className="bg-miraj-card/50 border-x border-b border-gray-800 rounded-b-lg overflow-hidden">
                    {sports.length > 0 ? (
                        <div className="divide-y divide-gray-800">
                            {sports.map(renderSportsRow)}
                        </div>
                    ) : (
                        <div className="p-12 text-center flex flex-col items-center text-gray-500">
                            <AlertCircle size={48} className="mb-4 text-gray-700" />
                            <p className="text-lg font-bold">No Events Scheduled</p>
                            <p className="text-sm">Check back later for updated match times.</p>
                        </div>
                    )}
                </div>
                <p className="text-sm items-center text-red-700 font-bold">We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners</p>
            </div>
        )}

        <PaginatedSection title="Live TV Channels" icon={Radio} items={tvLive} visible={showLive} />
      </div>
    </div>
  );
};

export default Home;