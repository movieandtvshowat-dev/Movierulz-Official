import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';
import { MediaItem } from '../types';

interface MovieCardProps {
  item: MediaItem;
  subtitle?: React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ item, subtitle }) => {
  // Ensure we have a valid link even if data is slightly malformed
  const linkPath = `/watch/${item.media_type || 'movie'}/${item.id}`;

  return (
    <Link to={linkPath} className="group relative block bg-miraj-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] border border-transparent hover:border-miraj-gold/30 h-full flex flex-col">
        <div className="aspect-[2/3] relative overflow-hidden bg-miraj-gray">
            <img 
                src={item.poster_path} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                style={{
                 filter: 'brightness(1.12) contrast(1.08) saturate(1.03)',
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/500x750/1a1a1a/d4af37?text=No+Poster";
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <PlayCircle size={48} className="text-miraj-gold drop-shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300" fill="black" />
            </div>
            {/* Rating Badge */}
            <div className="absolute top-2 right-2 bg-miraj-gold/90 text-black text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                ★ {item.vote_average.toFixed(1)}
            </div>
        </div>
        <div className="p-3 flex-grow flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50">
            <h3 className="text-gray-200 font-bold truncate text-sm mb-1 group-hover:text-miraj-gold transition-colors">{item.title}</h3>
            {subtitle ? (
                <div className="text-[10px] uppercase tracking-wider font-bold truncate">
                    {subtitle}
                </div>
            ) : (
                <p className="text-gray-500 text-[10px] uppercase tracking-wider truncate">
                    {item.genres && item.genres.length > 0 ? item.genres.slice(0, 2).join(', ') : 'Movie'}
                </p>
            )}
        </div>
    </Link>
  );
};

export default MovieCard;