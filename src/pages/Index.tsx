
import React, { useState, useEffect, lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Ruler from '@/components/Ruler';
import MobileRuler from '@/components/MobileRuler';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Ruler as RulerIcon, Maximize, Square, Pencil, Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogArticles } from '@/utils/internalLinks';

// Lazy load components that aren't immediately visible
const HowToUseSection = lazy(() => import('@/components/HowToUseSection'));
const WhyPerfectSection = lazy(() => import('@/components/WhyPerfectSection'));
const FaqSection = lazy(() => import('@/components/FaqSection'));
const RulerSizesTable = lazy(() => import('@/components/RulerSizesTable'));
const HomeContent = lazy(() => import('@/components/HomeContent'));

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState("320px");
  const isMobile = useIsMobile();
  
  // Filter articles to exclude homepage
  const featuredArticles = blogArticles.filter(article => article.url !== "/").slice(0, 3);
  
  // Create a shortened meta description (150 characters max)
  const metaDescription = "Regla online con calibración precisa para medir en cm, mm y pulgadas en tu pantalla. Perfecta para mediciones exactas.";
  
  // Adjust content positioning based on ruler orientation
  useEffect(() => {
    // Skip margin adjustment on mobile
    if (isMobile) return;
    
    // Add extra space if ruler is vertical since it takes more space
    if (orientation === 'vertical') {
      setContentTopMargin("640px"); // Increased for vertical ruler
    } else {
      setContentTopMargin("320px"); // Increased for horizontal ruler
    }
  }, [orientation, isMobile]);
  
  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="regla online, regla virtual, regla tamaño real, regla online cm, cinta metrica online" />
        <html lang="es" />
        <link rel="canonical" href="https://regla.onl" />
        
        {/* Core Web Vitals optimizations */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#9b87f5" />
        
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
        
        {/* For mobile devices, show the mobile-specific ruler layout */}
        {isMobile ? (
          <MobileRuler />
        ) : (
          // Desktop version continues below
          <>
            {/* Title and subtitle section - completely separate from ruler */}
            <div className="container text-center mt-8 mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in">
                <strong>Regla Online Tamaño Real</strong>
              </h1>
              <p className="text-lg text-gray-600 mt-2 animate-slide-in">
                Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla
              </p>
            </div>
            
            {/* Ruler section - full width with no container constraints */}
            <div className="w-full overflow-hidden mt-4">
              <Ruler className="mb-4" />
            </div>
            
            <main 
              className="container flex-1 relative pb-6"
              style={{ marginTop: contentTopMargin }} // Dynamic margin based on ruler orientation
            >
              {/* Featured Articles Section */}
              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5] flex items-center">
                      <Book size={24} className="mr-2" />
                      Artículos Destacados
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {featuredArticles.map((article, index) => (
                        <Link 
                          key={index} 
                          to={article.url}
                          className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-[#9b87f5]">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {article.keywords.slice(0, 3).join(', ')}
                          </p>
                          <div className="flex items-center text-[#9b87f5] text-sm font-medium">
                            Leer más
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Suspense wrapped components for code splitting and lazy loading */}
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <div className="mb-10">
                  <Card className="bg-white p-6">
                    <CardContent className="p-0">
                      <HomeContent />
                    </CardContent>
                  </Card>
                </div>
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
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
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <HowToUseSection />
                  <WhyPerfectSection />
                </div>
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <FaqSection />
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <RulerSizesTable />
              </Suspense>
            </main>
            
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Index;

