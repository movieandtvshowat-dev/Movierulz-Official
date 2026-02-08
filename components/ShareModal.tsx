import React, { useState } from 'react';
import { X, Copy, Check, Facebook, Twitter, MessageCircle, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, title, url }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'hover:text-[#1877F2]',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'hover:text-white', // X is usually black/white
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'hover:text-[#25D366]',
      href: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-miraj-card border border-miraj-gold/20 w-full max-w-md rounded-2xl p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] animate-slide-up">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Share2 size={20} className="text-miraj-gold" />
            <h3 className="text-xl font-bold text-white">Share Content</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Social Icons */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-miraj-gray border border-white/5 transition-all duration-300 hover:border-miraj-gold/30 hover:bg-white/5 group`}
            >
              <link.icon size={28} className={`text-gray-400 transition-colors ${link.color} group-hover:scale-110 duration-300`} />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Section */}
        <div className="relative">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 block ml-1">Page Link</label>
            <div className="flex items-center bg-black/50 border border-white/10 rounded-xl p-2 pr-2">
                <input 
                    type="text" 
                    readOnly 
                    value={url} 
                    className="bg-transparent text-sm text-gray-300 w-full outline-none px-2 font-mono"
                />
                <button 
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                        copied 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-miraj-gold text-black hover:bg-white'
                    }`}
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ShareModal;