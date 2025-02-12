import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexum Capitals",
  description: "Our commitment to protecting your privacy and personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to You</h2>
          <p className="text-gray-600">
            We understand the importance of maintaining the confidentiality and privacy of personal information that we hold about our clients and other third parties. This Privacy Policy outlines how we hold, manage, and protect the personal information you provide. By visiting our website and using our services, your agreement to this Policy is implied. These principles reflect internationally accepted standards for personal information handling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Collection and Processing of Personal Information</h2>
          <p className="text-gray-600 mb-4">
            When we collect, store, and use your personal information, we do so in accordance with internationally recognized data protection standards. We are committed to being open and transparent about how we use your personal information.
          </p>
          <p className="text-gray-600">We may collect and process the following data:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2 mt-2">
            <li>Information that you provide by filling in forms on our website</li>
            <li>Records of our correspondence if you contact us or respond to surveys</li>
            <li>Details of any orders or transactions through our website</li>
            <li>Details of your visits to our website including traffic data and location data</li>
            <li>Information about your computer, including IP address and browser type</li>
            <li>Personal information contained in various documents</li>
            <li>Your name, username, title, date of birth, gender, and citizenship</li>
            <li>Contact information including addresses, email, and telephone numbers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Cookies</h2>
          <p className="text-gray-600">
            When you use our website, we use cookies to distinguish you from other users of our website. This helps us provide you with a more relevant and effective experience while browsing our site, personalize the experience according to your preferences, and improve the site generally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. How We Use the Data</h2>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
            <li>To ensure effective content presentation on our website</li>
            <li>To provide requested products and services</li>
            <li>To manage products and services provided to you</li>
            <li>To keep you updated about changes to our services</li>
            <li>To carry out our contractual obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Information Disclosure</h2>
          <p className="text-gray-600">We may disclose personal information to:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2 mt-2">
            <li>Potential successors in title to our business</li>
            <li>Third party service providers and contractors</li>
            <li>Organizations acting on your behalf</li>
            <li>Banks and financial institutions</li>
            <li>Regulatory authorities and government agencies</li>
            <li>Auditors and professional advisers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="text-gray-600">
            You have the right to obtain a copy of your personal data that we store and to advise us of any perceived inaccuracy. We retain personal data for 7 years, unless otherwise required by law or regulatory obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Safeguard Measures</h2>
          <p className="text-gray-600">
            We hold personal information in secure computer storage facilities and paper-based files, taking steps to protect it from misuse, loss, unauthorized access, modification, or disclosure. While we take reasonable measures to safeguard personal information, we cannot guarantee the security of data transferred via the Internet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions about this Policy, wish to access or change your information, or have a complaint about security on our site, please email us at{" "}
            <a href="mailto:support@nexumcapitals.com" className="text-primary hover:text-secondary">
              support@nexumcapitals.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
