import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertTriangle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-miraj-black pt-24 pb-12 px-4">
      <Helmet>
        <title>Terms of Service | Movierulz Official</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
         <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
            <FileText className="text-miraj-gold w-10 h-10" />
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">Terms of Service</h1>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed animate-fade-in">
          
          <section>
            <p className="text-sm text-gray-500 mb-4">Last Updated: January 1, 2026</p>
            <p className="mb-4">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Movierulz Official website. By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section className="bg-miraj-card p-6 rounded-xl border border-miraj-gold/20 shadow-lg">
             <div className="flex items-start gap-3">
                <AlertTriangle className="text-miraj-gold flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">1. Content Hosting and Liability Disclaimer</h2>
                    <p className="font-medium text-white/90">
                        We DO NOT host nor transmit any audiovisual content itself and DO NOT control nor influence such content. We cannot accept any liability for the content transmitted by others. Any responsibility for this content lies with those who host or transmit it. We are not affiliated nor claim to be affiliated with any of the owners of streams and/or videos. All content is copyright of their respective owners.
                    </p>
                </div>
             </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Service Access</h2>
            <p>
              Movierulz Official is a free-to-use service. You do not need to create an account, register, or provide personal details to access content. Access is granted on a temporary basis, and we reserve the right to withdraw or amend the service without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
            <p>
              The design, layout, graphics, and original content of the website (excluding the third-party embedded media) are the property of Movierulz Official. You may not reproduce, duplicate, copy, sell, or exploit any portion of the Service without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third-Party Links and Content</h2>
            <p>
              Our Service contains links to third-party web sites or services that are not owned or controlled by Movierulz Official. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You acknowledge and agree that Movierulz Official shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              In no event shall Movierulz Official, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;