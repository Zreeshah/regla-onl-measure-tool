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
import CanonicalLink from '@/components/CanonicalLink';
import calibrationGuide from '@/assets/calibration-guide.png';
import reglaOnline from '@/assets/regla-online.jpg';
import reglaPrecision from '@/assets/regla-precision.jpg';
import HomeContent from '@/components/HomeContent';
import NativeAd from '@/components/NativeAd';

const HowToUseSection = lazy(() => import('@/components/HowToUseSection'));
const WhyPerfectSection = lazy(() => import('@/components/WhyPerfectSection'));
const FaqSection = lazy(() => import('@/components/FaqSection'));
const RulerSizesTable = lazy(() => import('@/components/RulerSizesTable'));

const Index = () => {
  const { t } = useLanguage();
  const { orientation } = useCalibration();
  const [contentTopMargin, setContentTopMargin] = useState("320px");
  const isMobile = useIsMobile();
  
  const featuredArticles = blogArticles.filter(article => article.url !== "/").slice(0, 3);
  
  const metaDescription = "Regla online con calibración precisa para medir en cm, mm y pulgadas en tu pantalla. Perfecta para mediciones exactas.";
  
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Regla Online",
    "description": metaDescription,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "url": "https://regla.onl",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Medición en centímetros y pulgadas",
      "Tamaño real ajustable",
      "Compatible con todos los dispositivos",
      "Sin descargas necesarias",
      "Calibración precisa"
    ]
  };
  
  useEffect(() => {
    if (isMobile) return;
    
    if (orientation === 'vertical') {
      setContentTopMargin("640px");
    } else {
      setContentTopMargin("320px");
    }
  }, [orientation, isMobile]);
  
  return (
    <>
      <Helmet>
        <title>Regla Online a Tamaño Real</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="regla online, regla virtual, regla tamaño real, regla online cm, cinta metrica online" />
        <html lang="es" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#9b87f5" />
        
        <script type="application/ld+json">
          {JSON.stringify(webApplicationSchema)}
        </script>
        
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
      
      <CanonicalLink />
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        {!isMobile && (
          <div className="container text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5] animate-fade-in">
              <strong>Regla Online a Tamaño Real</strong>
            </h1>
            <p className="text-lg text-gray-600 mt-2 animate-slide-in">
              Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla
            </p>
          </div>
        )}
        
        {isMobile ? (
          <MobileRuler />
        ) : (
          <div className="w-full overflow-hidden mt-4">
            <Ruler className="mb-4" />
          </div>
        )}
        
        <main 
          className={`container flex-1 relative pb-6 ${isMobile ? 'mt-4' : ''}`}
          style={!isMobile ? { marginTop: contentTopMargin } : {}}
        >
              {isMobile && (
                <div className="mb-6 text-center">
                  <h1 className="text-2xl font-bold text-[#9b87f5] mb-2">
                    Regla Online a Tamaño Real
                  </h1>
                  <p className="text-sm text-gray-600">
                    Regla digital con calibración precisa para medir objetos reales
                  </p>
                </div>
              )}
              
              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#9b87f5] flex items-center">
                      <Book size={20} className="mr-2" />
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

              {/* Ad placement 1 - After featured articles */}
              <div className="mb-6 md:mb-10">
                <NativeAd className="rounded-lg" />
              </div>

              <div className="mb-6 md:mb-10">
                <Card className="bg-white p-4 md:p-6">
                  <CardContent className="p-0">
                    <img 
                      src={calibrationGuide} 
                      alt="Guía de calibración: Se ajusta al ancho de una tarjeta de plástico" 
                      className="w-full h-auto rounded-lg object-cover"
                      loading="eager"
                      fetchPriority="high"
                      width={1200}
                      height={630}
                      decoding="async"
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <HomeContent />
                  </CardContent>
                </Card>
              </div>

              {/* Ad placement 2 - After HomeContent */}
              <div className="mb-6 md:mb-10">
                <NativeAd className="rounded-lg" />
              </div>
              
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

              {/* Ad placement 3 - After How to Use section */}
              <div className="mb-6 md:mb-10">
                <NativeAd className="rounded-lg" />
              </div>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <FaqSection />
              </Suspense>
              
              <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse rounded-lg"></div>}>
                <RulerSizesTable />
              </Suspense>

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">¿Cómo utilizar la regla online correctamente?</h2>
                    <p className="mb-6 text-gray-700">
                      Aprende paso a paso a calibrar y usar la regla virtual en tu dispositivo para obtener medidas lo más precisas posibles.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Elige la unidad de medida</h3>
                        <p className="text-gray-700">
                          Selecciona la unidad que necesites: milímetros (mm), centímetros (cm) o pulgadas (in). Puedes cambiarla en cualquier momento desde el menú de la regla.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Calibra la pantalla (método recomendado)</h3>
                        <p className="text-gray-700 mb-3">
                          Para que la regla muestre medidas reales, realiza una calibración rápida:
                        </p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold mb-2 text-gray-800">Opción A — Calibración por tarjeta estándar (recomendada):</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Coloca una tarjeta de crédito o débito sobre la pantalla.</li>
                            <li>Ajusta el control de calibración hasta que la longitud de la tarjeta en pantalla coincida con 85.6 mm (tamaño estándar).</li>
                            <li>Guarda la calibración.</li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 text-gray-800">Opción B — Calibración por diagonal de pantalla:</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Si conoces la diagonal de tu pantalla en pulgadas, introdúcela en el campo de calibración.</li>
                            <li>La web calculará la relación píxeles→mm automáticamente.</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Prepara el dispositivo y el objeto a medir</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Coloca el dispositivo (teléfono/tablet/PC) sobre una superficie plana y estable.</li>
                          <li>Asegúrate de que la pantalla está limpia y sin reflejos que dificulten la lectura.</li>
                          <li>Coloca el objeto a medir lo más paralelo posible a la regla en pantalla.</li>
                        </ul>
                      </div>

                      <div className="my-6">
                        <img
                          src={reglaOnline}
                          alt="Instrumento de precisión calibrador digital sobre superficie oscura para mediciones exactas"
                          className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={420}
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">4. Mide correctamente</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Sitúa el borde del objeto en el punto 0 de la regla virtual.</li>
                          <li>Lee la medida en la unidad seleccionada.</li>
                          <li>Si el objeto es más largo que la regla en pantalla, anota la medida visible y desplaza el objeto para medir el resto (o usa la función de desplazamiento/zoom si está disponible).</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">5. Consejos para mayor precisión</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Verifica que la escala del navegador esté al 100% (sin zoom).</li>
                          <li>Evita medir a través de fundas muy gruesas o protectores que alteren la posición del objeto.</li>
                          <li>Recalibra si cambias de dispositivo o después de una actualización del navegador.</li>
                          <li>Para mediciones críticas (ingeniería, construcción) usa instrumentos físicos certificados.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">6. Problemas comunes y soluciones rápidas</h3>
                        <div className="space-y-3">
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>Medidas incorrectas:</strong> Recalibra con la tarjeta estándar.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>La regla se ve distorsionada:</strong> Asegúrate de que no haya zoom en la página ni en la configuración de accesibilidad.</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded">
                            <p className="text-gray-700"><strong>No funciona en mi navegador:</strong> Actualiza el navegador o prueba con Chrome/Firefox/Safari en su versión más reciente.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-10">
                <Card className="bg-white p-6">
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold mb-4 text-[#9b87f5]">¡Empieza a medir ahora!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                      Tu pantalla puede convertirse en una herramienta de medición precisa y gratuita. Con nuestra regla online, puedes medir objetos directamente desde tu móvil, tablet o computadora sin necesidad de descargar nada.
                    </p>

                    <div className="my-6">
                      <img
                        src={reglaPrecision}
                        alt="Persona usando regla de medición profesional sobre papel con precisión milimétrica en trabajo de diseño"
                        className="w-full max-w-md mx-auto h-auto rounded-lg shadow-md object-cover"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={420}
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">⚡ Rápido, fácil y gratis</h3>
                        <p className="text-gray-700">
                          Solo calibra una vez, y podrás usar la regla virtual siempre que la necesites. Funciona perfectamente con las unidades más comunes: centímetros, milímetros y pulgadas.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">✓ Listo para comenzar</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>Pulsa el botón "Calibrar pantalla".</li>
                          <li>Ajusta la regla según el tamaño de tu pantalla o con una tarjeta estándar.</li>
                          <li>¡Empieza a medir de inmediato cualquier objeto que tengas a la mano!</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">🎯 ¿Por qué esperar?</h3>
                        <p className="text-gray-700">
                          Mide, compara y calcula al instante desde cualquier dispositivo. Ideal para estudiantes, diseñadores, artesanos y todo aquel que necesite una medición rápida y fiable.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
