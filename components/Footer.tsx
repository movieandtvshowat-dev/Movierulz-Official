import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-miraj-black border-t border-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
                <div className="flex items-center gap-1">
                <span className="text-miraj-gold font-extrabold text-2xl tracking-widest leading-none group-hover:text-white transition-colors">MOVIERULZ™</span>
                  </div>
                <span className="text-gray-400 text-[9px] tracking-[0.4em] font-medium group-hover:text-miraj-gold transition-colors text-center">OFFICIAL</span>
                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                    Experience cinema like never before. Premium streaming directly to your device with high-quality playback and exclusive content.
                </p>
            </div>
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><Link to="/movies" className="hover:text-miraj-gold transition-colors">Movies</Link></li>
                    <li><Link to="/tv" className="hover:text-miraj-gold transition-colors">TV Shows</Link></li>
                    <li><Link to="/sports" className="hover:text-miraj-gold transition-colors">Sports</Link></li>
                    <li><Link to="/tv_live" className="hover:text-miraj-gold transition-colors">Live TV</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Support</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><Link to="/contact" className="hover:text-miraj-gold transition-colors">Contact Us</Link></li>
                    <li><Link to="/faq" className="hover:text-miraj-gold transition-colors">FAQs</Link></li>
                    <li><Link to="/privacy" className="hover:text-miraj-gold transition-colors">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-miraj-gold transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
             <div>
                <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Connect</h3>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-miraj-gold transition-colors hover:scale-110 transform duration-200"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-miraj-gold transition-colors hover:scale-110 transform duration-200"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-miraj-gold transition-colors hover:scale-110 transform duration-200"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-miraj-gold transition-colors hover:scale-110 transform duration-200"><Youtube size={20} /></a>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">© 2026 Movierulz™ Official. All Rights Reserved.</p>
            {/* <p className="text-gray-600 text-xs text-center md:text-right">Clone for Educational Purposes</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;