
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDeviceInfo } from '@/hooks/use-device-info';
import { RefreshCw, RulerIcon, Maximize, Square, Pencil, Book, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import HomeContent from '@/components/HomeContent';
import MenuButton from '@/components/MenuButton';
import { Card, CardContent } from '@/components/ui/card';
import HowToUseSection from '@/components/HowToUseSection';
import WhyPerfectSection from '@/components/WhyPerfectSection';
import FaqSection from '@/components/FaqSection';
import RulerSizesTable from '@/components/RulerSizesTable';
import { blogArticles } from '@/utils/internalLinks';
import calibrationGuide from '@/assets/calibration-guide.png';
import reglaOnline from '@/assets/regla-online.jpg';
import reglaPrecision from '@/assets/regla-precision.jpg';

const MobileRuler: React.FC = () => {
  const {
    pixelsPerCm,
    unit,
    setUnit,
    getValueInSelectedUnit,
    getPixelsFromValue,
    calibrateByScreen
  } = useCalibration();
  const {
    deviceType,
    screenSize,
    redetectScreenSize,
    setScreenSize
  } = useDeviceInfo();
  const {
    t
  } = useLanguage();

  const featuredArticles = blogArticles.filter(article => article.url !== "/").slice(0, 3);
  
  // Dynamic ruler height based on screen size
  const calculateRulerHeight = () => {
    // Ensure we show at least up to 25 units or screen size + buffer, whichever is larger
    const minHeight = 400; // Minimum height
    const unitsToShow = Math.max(25, Math.ceil(screenSize) + 5); // Show at least screen size + 5 units
    const heightPerUnit = 40; // Approximate pixels per unit
    return Math.max(minHeight, unitsToShow * heightPerUnit);
  };
  
  const [rulerHeight, setRulerHeight] = useState(calculateRulerHeight());
  const rulerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState<string>(screenSize.toString());
  
  // Recalculate ruler height when screen size changes
  useEffect(() => {
    setRulerHeight(calculateRulerHeight());
    setInputValue(screenSize.toString());
  }, [screenSize]);
  
  useEffect(() => {
    calibrateByScreen(screenSize);
  }, [screenSize, calibrateByScreen]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleInputBlur = () => {
    const newSize = parseFloat(inputValue);
    if (!isNaN(newSize) && newSize > 0) {
      setScreenSize(newSize);
      calibrateByScreen(newSize);
    } else {
      setInputValue(screenSize.toString());
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };
  
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    const ticks = [];
    // Increased maximum value to ensure all units are shown
    const maxValue = Math.max(25, Math.ceil(screenSize) + 5);
    const majorTickInterval = 1;
    const minorTickInterval = 0.2;
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      const roundedValue = Math.round(value * 10) / 10;
      if (roundedValue === 0) continue;
      let tickType = 'minor';
      if (roundedValue % majorTickInterval === 0) {
        tickType = 'major';
      }
      const position = getPixelsFromValue(roundedValue);
      const showLabel = tickType === 'major';
      let label = roundedValue.toString();
      ticks.push({
        position,
        type: tickType,
        showLabel,
        label,
        value: roundedValue
      });
    }
    return ticks;
  };
  
  const ticks = generateTicks();
  
  return <div className="relative mobile-ruler-container">
      <div className="px-2 pt-2 text-center flex justify-between items-center">
        <p className="text-xs text-gray-600 mb-1">(Scroll down to show full ruler)</p>
        <MenuButton />
      </div>
      
      {/* Updated container with dynamic height and scrollable area */}
      <div className="mobile-ruler-layout" style={{
        height: 'auto',
        maxHeight: '80vh',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto'
      }}>
        <div className="ruler-container ruler-vertical mobile-ruler" ref={rulerRef} style={{
          width: '80px',
          height: `${rulerHeight}px`,
          position: 'relative',
          overflow: 'visible',
          margin: '0'
        }}>
          <div className="relative h-full w-full rounded-none">
            <div className="absolute h-full w-8 left-8 bg-transparent border-l border-[#9b87f5]"></div>
            
            {ticks.map((tick, index) => <div key={index} className="absolute">
                <div className="absolute" style={{
                  width: tick.type === 'major' ? '32px' : '16px',
                  height: '2px',
                  top: `${tick.position}px`,
                  left: tick.type === 'major' ? '28px' : '44px',
                  transform: 'translateY(-50%)',
                  backgroundColor: '#9b87f5'
                }}></div>
                
                {tick.showLabel && <div className="absolute font-bold" style={{
                  top: `${tick.position}px`,
                  left: '12px',
                  transform: 'translateY(-50%)',
                  color: '#7E69AB',
                  fontSize: '20px'
                }}>
                    {tick.label}
                  </div>}
              </div>)}
            
            <div className="absolute text-sm bg-[#f1f0fb] px-2 rounded text-[#7E69AB] font-semibold" style={{
              bottom: '24px',
              left: '12px',
              transform: 'rotate(-90deg)',
              transformOrigin: 'left bottom'
            }}>
              {unit.toUpperCase()}
            </div>
          </div>
        </div>
        
        <div className="flex-1 px-2 absolute top-0 right-0 w-[calc(100%-80px)]">
          <div className="bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[200px] mx-auto">
            <p className="text-xs font-medium mb-2">
              {deviceType} • {parseFloat(screenSize.toFixed(2))}"
            </p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-16 h-28 border border-gray-300 rounded-lg flex items-center justify-center flex-col">
                <span className="text-sm text-gray-500">Screen</span>
                <Input 
                  type="number"
                  min="3"
                  max="25"
                  step="0.1"
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleKeyDown}
                  className="text-center h-8 w-14 text-sm font-bold"
                />
                <span className="text-xs">inches</span>
              </div>
              
              <div className="flex-grow flex flex-col">
                <p className="text-xs text-gray-500 mb-1">Enter your device's screen size</p>
                <Button 
                  onClick={redetectScreenSize} 
                  size="sm" 
                  variant="outline" 
                  className="w-full text-xs h-7 text-[#9b87f5] border-[#9b87f5] hover:bg-[#F1F0FB]"
                >
                  <RefreshCw size={10} className="mr-1" />
                  Re-detect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Homepage content after the ruler section with clear separation */}
      <div className="bg-gradient-to-b from-gray-100 to-white py-8 mt-8">
        <div className="h-1 bg-gradient-to-r from-transparent via-[#9b87f5] to-transparent mb-8"></div>

        <div className="px-4">
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-[#9b87f5] mb-3">
              Regla Online Tamaño Real
            </h1>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-4 text-[#9b87f5] flex items-center">
                  <Book size={20} className="mr-2" />
                  Artículos Destacados
                </h2>
                <div className="space-y-3">
                  {featuredArticles.map((article, index) => (
                    <Link
                      key={index}
                      to={article.url}
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <h3 className="font-semibold text-base mb-1 text-gray-800 group-hover:text-[#9b87f5]">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2">
                        {article.keywords.slice(0, 2).join(', ')}
                      </p>
                      <div className="flex items-center text-[#9b87f5] text-xs font-medium">
                        Leer más
                        <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calibration Guide Image */}
          <div className="mb-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <img
                  src={calibrationGuide}
                  alt="Guía de calibración: Se ajusta al ancho de una tarjeta de plástico"
                  className="w-full h-auto rounded-lg"
                  width={1200}
                  height={630}
                />
              </CardContent>
            </Card>
          </div>

          {/* Home Content */}
          <div className="mb-6">
            <Card className="bg-white shadow-md">
              <CardContent className="p-4">
                <HomeContent />
              </CardContent>
            </Card>
          </div>

        <div className="mb-6">
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <p className="mb-4">{t('rulerDescription')}</p>
              <p className="mb-4">{t('contentIntro')}</p>
              
              <h2 className="text-lg font-bold mb-3 text-[#9b87f5]">{t('moreInfo')}</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <RulerIcon className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t('useCase1')}</h3>
                    <p className="text-xs text-gray-600">{t('useCase1Description')}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <Pencil className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t('useCase2')}</h3>
                    <p className="text-xs text-gray-600">{t('useCase2Description')}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <Square className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t('useCase3')}</h3>
                    <p className="text-xs text-gray-600">{t('useCase3Description')}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-start">
                  <Maximize className="text-[#9b87f5] mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t('useCase4')}</h3>
                    <p className="text-xs text-gray-600">{t('useCase4Description')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mb-6">
          <HowToUseSection />
          <WhyPerfectSection />
        </div>

        <div className="mb-6">
          <FaqSection />
        </div>

        <div className="mb-6">
          <RulerSizesTable />
        </div>

        {/* How to Use Guide */}
        <div className="mb-6">
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">¿Cómo utilizar la regla online correctamente?</h2>
              <p className="mb-4 text-gray-700 text-sm">
                Aprende paso a paso a calibrar y usar la regla virtual en tu dispositivo para obtener medidas lo más precisas posibles.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">1. Elige la unidad de medida</h3>
                  <p className="text-gray-700 text-sm">
                    Selecciona la unidad que necesites: milímetros (mm), centímetros (cm) o pulgadas (in). Puedes cambiarla en cualquier momento desde el menú de la regla.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">2. Calibra la pantalla (método recomendado)</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Para que la regla muestre medidas reales, realiza una calibración rápida:
                  </p>

                  <div className="bg-gray-50 p-3 rounded-lg mb-3">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">Opción A — Calibración por tarjeta estándar (recomendada):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                      <li>Coloca una tarjeta de crédito o débito sobre la pantalla.</li>
                      <li>Ajusta el control de calibración hasta que la longitud de la tarjeta en pantalla coincida con 85.6 mm (tamaño estándar).</li>
                      <li>Guarda la calibración.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 text-gray-800 text-sm">Opción B — Calibración por diagonal de pantalla:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                      <li>Si conoces la diagonal de tu pantalla en pulgadas, introdúcela en el campo de calibración.</li>
                      <li>La web calculará la relación píxeles→mm automáticamente.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">3. Prepara el dispositivo y el objeto a medir</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                    <li>Coloca el dispositivo (teléfono/tablet/PC) sobre una superficie plana y estable.</li>
                    <li>Asegúrate de que la pantalla está limpia y sin reflejos que dificulten la lectura.</li>
                    <li>Coloca el objeto a medir lo más paralelo posible a la regla en pantalla.</li>
                  </ul>
                </div>

                <div className="my-4">
                  <img
                    src={reglaOnline}
                    alt="Instrumento de precisión calibrador digital sobre superficie oscura para mediciones exactas"
                    className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-md"
                    width={1200}
                    height={630}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">4. Mide correctamente</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                    <li>Sitúa el borde del objeto en el punto 0 de la regla virtual.</li>
                    <li>Lee la medida en la unidad seleccionada.</li>
                    <li>Si el objeto es más largo que la regla en pantalla, anota la medida visible y desplaza el objeto para medir el resto (o usa la función de desplazamiento/zoom si está disponible).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">5. Consejos para mayor precisión</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                    <li>Verifica que la escala del navegador esté al 100% (sin zoom).</li>
                    <li>Evita medir a través de fundas muy gruesas o protectores que alteren la posición del objeto.</li>
                    <li>Recalibra si cambias de dispositivo o después de una actualización del navegador.</li>
                    <li>Para mediciones críticas (ingeniería, construcción) usa instrumentos físicos certificados.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">6. Problemas comunes y soluciones rápidas</h3>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <p className="text-gray-700"><strong>Medidas incorrectas:</strong> Recalibra con la tarjeta estándar.</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <p className="text-gray-700"><strong>La regla se ve distorsionada:</strong> Asegúrate de que no haya zoom en la página ni en la configuración de accesibilidad.</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded text-xs">
                      <p className="text-gray-700"><strong>No funciona en mi navegador:</strong> Actualiza el navegador o prueba con Chrome/Firefox/Safari en su versión más reciente.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="mb-20">
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">¡Empieza a medir ahora!</h2>
              <p className="text-sm text-gray-700 mb-4">
                Tu pantalla puede convertirse en una herramienta de medición precisa y gratuita. Con nuestra regla online, puedes medir objetos directamente desde tu móvil, tablet o computadora sin necesidad de descargar nada.
              </p>

              <div className="my-4">
                <img
                  src={reglaPrecision}
                  alt="Persona usando regla de medición profesional sobre papel con precisión milimétrica en trabajo de diseño"
                  className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-md"
                  width={1200}
                  height={630}
                />
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-base font-semibold mb-1 text-gray-800">⚡ Rápido, fácil y gratis</h3>
                  <p className="text-gray-700 text-xs">
                    Solo calibra una vez, y podrás usar la regla virtual siempre que la necesites. Funciona perfectamente con las unidades más comunes: centímetros, milímetros y pulgadas.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-base font-semibold mb-1 text-gray-800">✓ Listo para comenzar</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
                    <li>Pulsa el botón "Calibrar pantalla".</li>
                    <li>Ajusta la regla según el tamaño de tu pantalla o con una tarjeta estándar.</li>
                    <li>¡Empieza a medir de inmediato cualquier objeto que tengas a la mano!</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="text-base font-semibold mb-1 text-gray-800">🎯 ¿Por qué esperar?</h3>
                  <p className="text-gray-700 text-xs">
                    Mide, compara y calcula al instante desde cualquier dispositivo. Ideal para estudiantes, diseñadores, artesanos y todo aquel que necesite una medición rápida y fiable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center">
        <div className="flex items-center space-x-4">
          <a href="#" className={`text-[#9b87f5] ${unit === 'cm' ? 'font-bold' : ''}`} onClick={e => {
          e.preventDefault();
          setUnit('cm');
        }}>
            CM
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className={`text-[#9b87f5] ${unit === 'inch' ? 'font-bold' : ''}`} onClick={e => {
          e.preventDefault();
          setUnit('inch');
        }}>
            INCH
          </a>
          <span className="text-gray-300">|</span>
          <Link to="/blog/buscar-dni-por-nombre" className="text-[#9b87f5] text-sm">
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/privacy" className="text-[#9b87f5] text-sm">
            {t('privacy')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link to="/disclaimer" className="text-[#9b87f5] text-sm">
            {t('disclaimer')}
          </Link>
        </div>
      </div>
    </div>;
};

export default MobileRuler;
