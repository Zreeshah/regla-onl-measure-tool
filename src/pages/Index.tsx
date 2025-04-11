
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalibration } from '@/contexts/CalibrationContext';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, Square, Pencil } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState("320px"); // Increased default margin
  
  // Create a shortened meta description (150 characters max)
  const metaDescription = "Regla online con calibración precisa para medir en cm, mm y pulgadas en tu pantalla. Perfecta para mediciones exactas.";
  
  // Adjust content positioning based on ruler orientation
  useEffect(() => {
    // Add extra space if ruler is vertical since it takes more space
    if (orientation === 'vertical') {
      setContentTopMargin("640px"); // Increased for vertical ruler
    } else {
      setContentTopMargin("320px"); // Increased for horizontal ruler
    }
  }, [orientation]);
  
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="regla online, regla virtual, regla tamaño real, regla online cm, cinta metrica online" />
        <html lang="es" />
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
        
        {/* Title and subtitle section - completely separate from ruler */}
        <div className="container text-center mt-8 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in">
            Regla Online Tamaño Real
          </h1>
          <p className="text-lg text-gray-600 mt-2 mb-8 animate-slide-in">
            Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla
          </p>
        </div>
        
        {/* Ruler section - full width with no container constraints */}
        <div className="w-full overflow-hidden">
          <Ruler className="mb-4" />
        </div>
        
        <main 
          className="container flex-1 relative pb-6"
          style={{ marginTop: contentTopMargin }} // Dynamic margin based on ruler orientation
        >
          <div className="mb-10">
            <Card className="bg-white p-6">
              <CardContent className="p-0">
                <p className="mb-4">{t('rulerDescription')}</p>
                <p className="mb-4">{t('contentIntro')}</p>
                
                <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">{t('moreInfo')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <RulerIcon className="text-[#9b87f5] mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase1')}</h3>
                      <p className="text-sm text-gray-600">{t('useCase1Description')}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Pencil className="text-[#9b87f5] mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase2')}</h3>
                      <p className="text-sm text-gray-600">{t('useCase2Description')}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Square className="text-[#9b87f5] mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase3')}</h3>
                      <p className="text-sm text-gray-600">{t('useCase3Description')}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Maximize className="text-[#9b87f5] mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase4')}</h3>
                      <p className="text-sm text-gray-600">{t('useCase4Description')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <HowToUseSection />
            <WhyPerfectSection />
          </div>
          
          <FaqSection />
          
          <RulerSizesTable />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
