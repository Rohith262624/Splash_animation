const Terms = () => {
  return (
    <div className="mobile-container bg-white relative overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
        <h1 className="text-xl font-bold text-gray-900">Terms & Conditions</h1>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using Furrl's mobile application and services, you
            agree to be bound by these Terms and Conditions. If you do not agree
            to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            2. Use of Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Furrl provides a platform for fashion discovery and shopping from
            unique indie brands. You agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use the service for lawful purposes only</li>
            <li>Provide accurate and truthful information</li>
            <li>Respect intellectual property rights</li>
            <li>Not engage in fraudulent activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            3. Account Registration
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To access certain features, you may need to create an account. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            4. Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            5. Content
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on Furrl, including images, text, logos, and designs, is
            the property of Furrl or its licensors and is protected by copyright
            and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Furrl shall not be liable for any indirect, incidental, special, or
            consequential damages arising from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued
            use of our services after changes constitutes acceptance of the new
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            8. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms & Conditions, please
            contact us at legal@furrl.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
