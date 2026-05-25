import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for Online-Ruler.Onl. Read about our terms and conditions of use.',
  alternates: { canonical: 'https://online-ruler.onl/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-1 py-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-ruler-primary">Disclaimer</h1>
          <p className="mb-6">If you need more information or have any questions about the disclaimer of our website, please feel free to contact us by email at info@online-ruler.onl.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Online Ruler Disclaimer</h2>
          <p className="mb-6">All information on this website (https://online-ruler.onl) is published in good faith and for general informational purposes only. Online Ruler makes no warranties about the completeness, reliability, and accuracy of this information. Any action you take based on the information found on this website (Online Ruler) is strictly at your own risk. Online Ruler is not liable for any losses or damages in connection with the use of our website.</p>
          
          <p className="mb-6">From our website, you can visit other websites through external links. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation of all content found on them. Site owners and content may change without notice. Please be aware that when you leave our website, other sites may have different privacy policies and terms beyond our control. Please review the privacy policies and terms of service of those sites before conducting any business or uploading information.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Consent</h2>
          <p className="mb-6">By using our website, you hereby consent to this disclaimer and agree to its terms.</p>
          
          <h2 className="text-xl font-semibold mb-3 text-ruler-primary">Update</h2>
          <p>Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
