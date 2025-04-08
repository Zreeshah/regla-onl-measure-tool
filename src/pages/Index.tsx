
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import RulerControls from '@/components/RulerControls';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Index = () => {
  const { t, language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('subtitle')} />
        <meta name="keywords" content="regla online, regla virtual, regla tamaño real, regla online cm, regla digital, regla tamaño real celular, cinta metrica online, ruler online, ruler" />
        <html lang={language} />
        <link rel="canonical" href="https://regla.onl" />
        {/* Schema.org structured data for FAQs */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion1')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer1')}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion2')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer2')}"
                  }
                },
                {
                  "@type": "Question",
                  "name": "${t('faqQuestion3')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${t('faqAnswer3')}"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1">
          <div className="mb-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-ruler-primary animate-fade-in">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 animate-slide-in">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2">
              <Ruler className="mb-4 mx-auto" />
            </div>
            <div>
              <RulerControls />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <HowToUseSection />
            <WhyPerfectSection />
          </div>
          
          <FaqSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
