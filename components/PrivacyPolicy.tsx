
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 animate-fade-in-up min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: 04/12/2025</p>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          <p>
            [CM SHRI] (“the School,” “we,” “our,” or “us”) is committed to protecting the privacy and personal information of our students, parents, staff, and all visitors who access our website. This Privacy Policy explains the types of information we collect, how we use and safeguard that information, and the choices you have regarding your data. By using our website, you acknowledge and agree to the practices outlined in this Policy.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information that may include names, email addresses, home addresses, phone numbers, enrollment details, and any information submitted through online forms such as admissions applications, event registrations, newsletters, or contact inquiries. We also collect non-personal information automatically, including browser type, device details, IP addresses, pages visited, time spent on the site, and general geographic location. Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and improve site performance. You may disable cookies through your browser settings, though some features may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p>
              The information we collect is used to operate and improve our website and school services, communicate with students, parents, and staff, process admissions and inquiries, manage school operations, customize user experiences, and maintain website security. We may also use this information to comply with legal obligations and regulatory requirements applicable to educational institutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Share Your Information</h2>
            <p>
              We do not sell or rent personal data. Information may be shared only with trusted third-party service providers that support our operations, such as website hosting companies, email distribution services, and school management systems, all of which are required to protect the confidentiality of your data. School administrators and authorized staff may access personal information solely for legitimate school purposes. We may also disclose information if required by law, to protect the safety of students and staff, or to respond to legal processes. Additionally, personal information related to students may be shared with parents or legal guardians when permitted or required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Student Privacy & Compliance</h2>
            <p>
              The School complies with all applicable privacy laws, including FERPA for student educational records in the United States, COPPA for the protection of children under 13 online, and GDPR when relevant to international users. We do not knowingly collect personal information from children under 13 without verified parental consent, as required by law. Any student-related information is handled with strict confidentiality and protected in accordance with governing regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
            <p>
              We take data security seriously and use a combination of administrative, technical, and physical measures to protect your information from unauthorized access, loss, misuse, or disclosure. These measures include encrypted data transmission, secure servers, access controls, and continuous system monitoring. Despite our efforts, no method of data storage or transmission is completely secure, and users share information at their own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
            <p>
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including operational needs, legal obligations, and educational requirements. When information is no longer needed, we securely delete, anonymize, or otherwise dispose of it in accordance with applicable regulations and best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites that operate independently of the School. We are not responsible for their content, policies, or practices, and we encourage users to review the privacy policies of any external sites they visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Rights</h2>
            <p>
              Depending on your region, you may have certain rights related to your personal information, such as accessing your data, requesting corrections or deletion, withdrawing consent, opting out of non-essential communications, or requesting copies of student records as permitted by FERPA. To exercise these rights, you may contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. Any updates will be posted on this page with a revised “Last Updated” date. Continued use of our website after changes are made constitutes your acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <p className="font-bold text-slate-900">CM SHRI SECTOR 5 DWARKA</p>
               <p>Address: Dwarka Sector 5 New Delhi</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
