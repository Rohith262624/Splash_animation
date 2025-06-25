const Privacy = () => {
  return (
    <div className="mobile-container bg-white relative overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
        <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We collect information you provide directly to us, such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Phone number and contact information</li>
            <li>Profile information and preferences</li>
            <li>Purchase history and shopping behavior</li>
            <li>Communication with our support team</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide and improve our services</li>
            <li>Personalize your fashion experience</li>
            <li>Process transactions and send notifications</li>
            <li>Communicate with you about promotions and updates</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            3. Information Sharing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in limited
            circumstances, such as with your consent, to comply with legal
            obligations, or to protect our rights.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            4. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            5. Cookies and Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and similar technologies to enhance your experience,
            analyze usage patterns, and deliver personalized content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access and update your personal information</li>
            <li>Delete your account and associated data</li>
            <li>Opt-out of promotional communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            7. Children's Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our services are not intended for children under 13. We do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            8. Changes to Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes through the app or by email.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@furrl.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
