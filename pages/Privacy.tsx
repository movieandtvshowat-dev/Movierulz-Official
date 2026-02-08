import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-12 px-4">
      <Helmet>
        <title>Privacy Policy | Movierulz Official</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
            <ShieldCheck className="text-miraj-gold w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">Privacy Policy</h1>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed animate-fade-in">
          
          <section>
            <p className="text-sm text-gray-500 mb-4">Last Updated: January 1, 2026</p>
            <p className="mb-4">
              At Movierulz Official, we value your privacy. This Privacy Policy explains how we handle information when you visit our website. As a free streaming platform that does not require registration, our data collection is minimal.
            </p>
          </section>

          <section className="bg-miraj-card p-6 rounded-xl border border-miraj-gold/20 shadow-lg">
             <div className="flex items-start gap-3">
                <AlertTriangle className="text-miraj-gold flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">Content Disclaimer</h2>
                    <p className="font-medium text-white/90">
                        We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners.
                    </p>
                </div>
             </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p className="mb-2">We do not require you to create an account. Therefore, we do not collect personal identification information like names, email addresses, or phone numbers directly.</p>
            <p className="mb-2">However, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li><strong>Log Data:</strong> Information such as your IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, and other statistics.</li>
                <li><strong>Cookies:</strong> Small files stored on your device to improve site functionality and user preferences (e.g., volume settings, theme).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Information</h2>
            <p className="mb-2">Any technical information collected is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-400">
                <li>Provide and maintain the Service.</li>
                <li>Monitor the usage of the Service to detect, prevent and address technical issues.</li>
                <li>Improve user experience and site performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Services</h2>
            <p>
              Our Service embeds content from third-party video hosts. These third-party sites have their own privacy policies and may use their own cookies or tracking technologies. We do not control and are not responsible for the privacy practices of these external sites. We advise you to review the privacy policies of any third-party sites you interact with.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We use commercially reasonable methods to protect the limited data we collect (like server logs). However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:privacy@uwatchfree.stream" className="text-miraj-gold hover:underline">privacy@uwatchfree.stream</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;