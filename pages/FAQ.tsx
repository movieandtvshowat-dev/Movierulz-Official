import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is Movierulz Official completely free?",
    answer: "Yes, absolutely! Movierulz Official is a free-to-use platform. There are no hidden fees, no subscription plans, and you will never be asked to provide credit card details."
  },
  {
    question: "Do I need to create an account or log in?",
    answer: "No. You do not need to register, create an account, or log in to access any content. We believe in providing instant access to entertainment without any barriers."
  },
  {
    question: "Is this website safe and legitimate?",
    answer: "Yes, Movierulz Official is a safe platform. We are not a spam website and we do not host malicious software. We simply provide an interface to stream content available publicly on the web. We do not ask for any personal or financial information."
  },
  {
    question: "Do you host the content streamed on this site?",
    answer: "We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners."
  },
  {
    question: "Can I watch on multiple devices?",
    answer: "Yes! Our website is fully optimized for all devices. You can watch on your Smart TV, smartphone (Android & iOS), tablet, laptop, or desktop computer without any restrictions."
  },
  {
    question: "Is content available in 4K HDR?",
    answer: "We strive to provide the best possible quality. Many movies and shows are available in Full HD (1080p) and 4K Ultra HD, depending on the source links available."
  },
  {
    question: "Do you offer live sports?",
    answer: "Yes, we have a dedicated Sports section featuring live coverage of major sporting leagues including the Premier League, NBA, F1, Cricket, and more."
  },
  {
    question: "What internet speed do I need?",
    answer: "We recommend a minimum reliable connection of 5 Mbps for HD streaming and at least 25 Mbps for a smooth 4K streaming experience."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-12 px-4">
      <Helmet>
        <title>FAQ | Movierulz Official</title>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <HelpCircle className="w-12 h-12 text-miraj-gold mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
            Frequently Asked <span className="text-miraj-gold">Questions</span>
          </h1>
          <p className="text-gray-400">Find answers to common questions about our free service.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-miraj-card border border-white/5 rounded-xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-bold text-sm md:text-base ${openIndex === index ? 'text-miraj-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-miraj-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 bg-miraj-gray rounded-xl border border-gray-800">
            <h3 className="text-white font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-400 text-sm mb-6">Can't find the answer you're looking for? Please contact our support team.</p>
            <a href="#/contact" className="inline-block bg-miraj-gold text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-colors">
                Get in Touch
            </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;