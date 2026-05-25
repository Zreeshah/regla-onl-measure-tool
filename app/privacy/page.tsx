import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Online-Ruler.Onl. Learn how we collect, use, and protect your data.',
  alternates: { canonical: 'https://online-ruler.onl/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Privacy Policy</h1>
          <p className="mb-4">Online Ruler (&quot;we&quot; or &quot;our&quot;) operates the website https://online-ruler.onl (the &quot;Service&quot;). This page informs you about our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          <p className="mb-6">We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Information Collection and Use</h2>
          <p className="mb-6">We collect different types of information for various purposes to provide and improve our Service.</p>
          
          <h3 className="text-lg font-semibold mb-3 text-ruler-primary">Types of Data Collected</h3>
          <h4 className="text-base font-semibold mb-2 text-ruler-primary">Personal Data</h4>
          <p className="mb-3">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:</p>
          <ul className="list-disc pl-6 mb-6"><li className="mb-1">Email address</li><li className="mb-1">Cookies and Usage Data</li></ul>
          
          <h4 className="text-base font-semibold mb-2 text-ruler-primary">Usage Data</h4>
          <p className="mb-3">We may also collect information about how the Service is accessed and used (&quot;Usage Data&quot;). This may include:</p>
          <ul className="list-disc pl-6 mb-6"><li className="mb-1">IP Address</li><li className="mb-1">Browser type and version</li><li className="mb-1">Pages visited</li><li className="mb-1">Date and time of visit</li><li className="mb-1">Time spent on pages</li><li className="mb-1">Unique device identifiers</li><li className="mb-1">Diagnostic data</li></ul>
          
          <h4 className="text-base font-semibold mb-2 text-ruler-primary">Tracking & Cookies Data</h4>
          <p className="mb-3">We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can set your browser to refuse cookies. If you do not accept cookies, some features of the Service may not be available.</p>
          <p className="mb-2 font-medium">Cookie examples:</p>
          <ul className="list-disc pl-6 mb-6"><li className="mb-1">Session Cookies: to operate the Service.</li><li className="mb-1">Preference Cookies: to remember settings.</li><li className="mb-1">Security Cookies: for security features.</li></ul>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Use of Data</h2>
          <p className="mb-3">Online Ruler uses the collected data to:</p>
          <ul className="list-disc pl-6 mb-6"><li className="mb-1">Provide and maintain the Service</li><li className="mb-1">Notify you about changes to the Service</li><li className="mb-1">Allow interactive features</li><li className="mb-1">Provide customer support</li><li className="mb-1">Analyze Service performance</li><li className="mb-1">Monitor usage</li><li className="mb-1">Detect and prevent technical issues</li></ul>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Data Transfer</h2>
          <p className="mb-6">Your data may be transferred to and stored on systems outside your region, where data protection laws may vary. Online Ruler ensures reasonable security and will not transfer Personal Data without adequate controls.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Data Disclosure</h2>
          <h3 className="text-lg font-semibold mb-2 text-ruler-primary">Legal Requirements</h3>
          <p className="mb-3">Online Ruler may disclose Personal Data to:</p>
          <ul className="list-disc pl-6 mb-6"><li className="mb-1">Comply with legal obligations</li><li className="mb-1">Protect property or rights</li><li className="mb-1">Investigate misuse</li><li className="mb-1">Protect user safety</li><li className="mb-1">Defend against legal liabilities</li></ul>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Data Security</h2>
          <p className="mb-6">Security is important to us. However, no system is 100% secure. We strive to use commercially acceptable measures to protect your data.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Service Providers</h2>
          <p className="mb-3">We may employ third parties to:</p>
          <ul className="list-disc pl-6 mb-3"><li className="mb-1">Facilitate the Service</li><li className="mb-1">Provide it on our behalf</li><li className="mb-1">Perform Service-related analysis</li></ul>
          <p className="mb-6">These third parties only have access to Personal Data to perform these tasks and cannot use it for other purposes.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Links to Other Sites</h2>
          <p className="mb-6">Our Service may contain external links. We are not responsible for the privacy policies or content of external sites.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Advertising</h2>
          <p className="mb-6">Our site may display third-party ads. By accepting our policy, you agree that we may show interest-based advertisements.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Children&apos;s Privacy</h2>
          <p className="mb-6">Our Service is not directed to anyone under 18. We do not knowingly collect data from minors. If collected without parental consent, it will be deleted.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Changes to This Privacy Policy</h2>
          <p className="mb-6">We may update this policy. You will be notified before changes take effect. The effective date will be updated on this page. We recommend reviewing it periodically.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Contact Us</h2>
          <p>If you have questions about this Privacy Policy: Email: info@online-ruler.onl</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
