import React, { useState, useEffect } from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaItem } from '../types';

interface HeroSliderProps {
  items: MediaItem[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={item.backdrop_path}
            alt={item.title}
            className="w-full h-full object-cover opacity-60"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-miraj-black via-miraj-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
             <div className="max-w-3xl animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-miraj-gold text-black text-xs font-bold rounded mb-3 uppercase tracking-wider">
                    {item.media_type === 'movie' ? 'Now Showing' : 'Streaming Now'}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4 text-gray-300 text-sm font-medium">
                    <span>{item.genres[0]}</span>
                    <span className="text-miraj-gold">•</span>
                    <span>{item.duration}</span>
                    <span className="text-miraj-gold">•</span>
                    <span>{new Date(item.release_date).getFullYear()}</span>
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-3 max-w-xl">
                    {item.overview}
                </p>
                
                <div className="flex gap-4">
                    <Link 
                        to={`/watch/${item.media_type}/${item.id}`}
                        className="bg-miraj-gold hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105"
                    >
                        <Play size={20} fill="black" /> Watch Now
                    </Link>
                    <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-medium transition-colors">
                        More Info
                    </button>
                </div>
             </div>
          </div>
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-2">
        {items.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current ? 'w-8 bg-miraj-gold' : 'w-4 bg-gray-600'
                }`}
            />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;