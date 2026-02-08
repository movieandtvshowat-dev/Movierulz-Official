import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-12 px-4">
      <Helmet>
        <title>Contact Us | Movierulz Official</title>
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center uppercase tracking-wide">
          Get in <span className="text-miraj-gold">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-miraj-card p-8 rounded-2xl border border-white/5 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-miraj-gold/10 p-3 rounded-full">
                    <MapPin className="text-miraj-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Our Location</h3>
                    <p className="text-gray-400 text-sm mt-1">123 Cinema Boulevard, Entertainment District, Mumbai, India 400001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-miraj-gold/10 p-3 rounded-full">
                    <Mail className="text-miraj-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Email Us</h3>
                    <p className="text-gray-400 text-sm mt-1">support@movierulzofficial</p>
                    <p className="text-gray-400 text-sm">business@movierulzofficial</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-miraj-gold/10 p-3 rounded-full">
                    <Phone className="text-miraj-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Call Us</h3>
                    <p className="text-gray-400 text-sm mt-1">+91 1800 123 4567</p>
                    <p className="text-gray-500 text-xs mt-1">Mon - Fri, 9am - 6pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-miraj-gold p-8 rounded-2xl text-black">
                <h3 className="font-bold text-xl mb-2">Need Immediate Help?</h3>
                <p className="text-sm font-medium mb-4 opacity-80">Check our FAQ section for quick answers to common questions regarding subscriptions and streaming.</p>
                <a href="#/faq" className="inline-block bg-black text-white px-6 py-2 rounded-full text-sm font-bold uppercase hover:bg-gray-800 transition-colors">
                    Visit FAQ
                </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-miraj-card p-8 rounded-2xl border border-white/5 shadow-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-miraj-gold outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-miraj-gold outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-miraj-gold outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-miraj-gold outline-none transition-colors resize-none"
                  placeholder="Describe your issue..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-miraj-gold hover:bg-yellow-600 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest mt-4"
              >
                {status === 'success' ? 'Message Sent!' : <><Send size={18} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;