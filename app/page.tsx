import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Online Ruler - Real Size Ruler on Your Screen',
  description: 'Online ruler with precise calibration to measure in cm, mm, and inches on your screen. Perfect for exact measurements. Free online tape measure and phone ruler.',
  keywords: ['ruler', 'ruler online', 'online ruler', 'ruler measurements', 'inch ruler', 'cm ruler', 'ruler on phone', 'real size ruler', 'phone ruler', 'online tape measure'],
  alternates: {
    canonical: 'https://online-ruler.onl/',
  },
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Online Ruler",
  "description": "Online ruler with precise calibration to measure in cm, mm, and inches on your screen. Perfect for exact measurements.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "url": "https://online-ruler.onl",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Measurement in centimeters and inches",
    "Adjustable real size",
    "Compatible with all devices",
    "No downloads needed",
    "Precise calibration"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I calibrate the online ruler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can calibrate the digital ruler by entering your screen size, using a credit card as a reference, or manually adjusting until it matches a known-size object."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this real size ruler on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our online ruler works perfectly on phones, tablets, and computers."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the online ruler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our virtual ruler can be very accurate when properly calibrated, but final precision depends on your screen resolution and correct calibration."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
