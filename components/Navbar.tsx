import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, MapPin, User, Home, Film, Tv, Trophy, Radio, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [searchOpen]);

  const navLinks = [
    { name: 'Movies', path: '/movies', icon: Film },
    { name: 'TV Shows', path: '/tv', icon: Tv },
    { name: 'Sports', path: '/sports', icon: Trophy },
    { name: 'Live TV', path: '/tv_live', icon: Radio },
  ];

  const isActive = (path: string) => location.pathname === path || (path === '/movies' && location.pathname === '/');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
        navigate(`/?search=${encodeURIComponent(searchTerm)}`);
        setSearchOpen(false);
        setSearchTerm('');
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-miraj-black/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 z-50">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col group">
                <div className="flex items-center gap-1">
                    <span className="text-miraj-gold font-extrabold text-2xl tracking-widest leading-none group-hover:text-white transition-colors">MOVIERULZ™</span>
                </div>
                <span className="text-gray-400 text-[9px] tracking-[0.4em] font-medium group-hover:text-miraj-gold transition-colors text-center">OFFICIAL</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
                to="/"
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${location.pathname === '/' ? 'text-miraj-gold' : 'text-gray-300 hover:text-white'}`}
            >
                Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-miraj-gold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Download APK Button */}
            <a
                href='https://median.co/share/xlrdylb'
                target='_blank'
                rel='noopener noreferrer'
                className='hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-3 lg:px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg hover:shadow-green-500/20 font-bold text-xs uppercase tracking-wide'
            >
                <Download className='w-4 h-4' />
                <span className="hidden xl:inline">Download APK</span>
                <span className="xl:hidden">APK</span>
            </a>

            <div className={`flex items-center bg-black/50 rounded-full border border-gray-700 transition-all duration-300 ${searchOpen ? 'w-64 px-3 py-1.5' : 'w-10 h-10 justify-center border-transparent bg-transparent'}`}>
                 {searchOpen ? (
                     <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center">
                        <input 
                            ref={inputRef}
                            type="text" 
                            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-500"
                            placeholder="Search movies, sports..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onBlur={() => {
                                if(!searchTerm) setSearchOpen(false);
                            }}
                        />
                        <button type="button" onClick={() => setSearchOpen(false)}>
                            <X size={16} className="text-gray-400 hover:text-white" />
                        </button>
                     </form>
                 ) : (
                    <button 
                        onClick={() => setSearchOpen(true)}
                        className="text-gray-300 hover:text-miraj-gold transition-colors p-2"
                    >
                        <Search size={20} />
                    </button>
                 )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden z-50 gap-4">
             <button 
                onClick={() => {
                    const term = prompt("Search Content:");
                    if (term) navigate(`/?search=${encodeURIComponent(term)}`);
                }}
                className="text-gray-300 hover:text-miraj-gold"
             >
                <Search size={24} />
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-miraj-gold hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-6">
            <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-bold p-4 rounded-xl border border-white/5 ${location.pathname === '/' ? 'bg-miraj-gold text-black' : 'text-white hover:bg-white/10'}`}
            >
                <Home size={24} /> Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-bold p-4 rounded-xl border border-white/5 ${
                  isActive(link.path)
                    ? 'bg-miraj-gold text-black'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <link.icon size={24} /> {link.name}
              </Link>
            ))}
            
            {/* Mobile Download APK Link */}
             <a
                href='https://median.co/share/xlrdylb'
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-xl font-bold p-4 rounded-xl border border-white/5 text-green-400 hover:bg-green-500/10"
              >
                <Download size={24} /> Download APK
              </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;