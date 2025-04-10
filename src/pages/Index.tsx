
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import RulerControls from '@/components/RulerControls';
import DeviceInfo from '@/components/DeviceInfo';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, RulerSquare, Pencil } from 'lucide-react';

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
              {t('title').split(' | ')[0]}
            </h1>
            <p className="text-lg text-gray-600 animate-slide-in">
              {t('subtitle')}
            </p>
          </div>
          
          <DeviceInfo />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2">
              <Ruler className="mb-4 mx-auto" />
            </div>
            <div>
              <RulerControls />
            </div>
          </div>
          
          <div className="mb-10">
            <Card className="bg-white p-6">
              <CardContent className="p-0">
                <p className="mb-4">{t('rulerDescription')}</p>
                <p className="mb-4">{t('contentIntro')}</p>
                
                <h2 className="text-xl font-bold mb-3 text-ruler-primary">{t('moreInfo')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <RulerIcon className="text-ruler-primary mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase1')}</h3>
                      <p className="text-sm text-gray-600">Regla digital perfecta para diseñadores que necesitan medir elementos visuales con precisión.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Pencil className="text-ruler-primary mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase2')}</h3>
                      <p className="text-sm text-gray-600">Cinta métrica online ideal para medir con exactitud en proyectos de manualidades.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <RulerSquare className="text-ruler-primary mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase3')}</h3>
                      <p className="text-sm text-gray-600">Regla tamaño real perfecta para enseñar mediciones a estudiantes de forma interactiva.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <Maximize className="text-ruler-primary mr-2 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">{t('useCase4')}</h3>
                      <p className="text-sm text-gray-600">Regla online cm que permite realizar mediciones precisas sin necesidad de herramientas físicas.</p>
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
