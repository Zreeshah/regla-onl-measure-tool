
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDeviceInfo } from '@/hooks/use-device-info';
import { RefreshCw, Smartphone, RulerIcon, Maximize, Square, Pencil, Settings } from 'lucide-react';
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
import RulerCustomizer from './RulerCustomizer';

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
  
  const rulerHeight = 400; // Fixed height for the ruler

  const rulerRef = useRef<HTMLDivElement>(null);
  const [customValue, setCustomValue] = useState<string>('10');
  const [showCustomizer, setShowCustomizer] = useState(false);
  
  useEffect(() => {
    calibrateByScreen(screenSize);
  }, [screenSize, calibrateByScreen]);
  
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    const ticks = [];
    const maxValue = 25;
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
        <div className="flex items-center">
          <Button
            variant={showCustomizer ? 'default' : 'outline'}
            size="sm"
            className={`${showCustomizer ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} text-xs h-7`}
            onClick={() => setShowCustomizer(!showCustomizer)}
          >
            <Settings size={12} className="mr-1" />
            {t('customize') || "Customize"}
          </Button>
          <Button 
            onClick={redetectScreenSize} 
            size="sm" 
            variant="outline" 
            className="ml-2 text-xs h-7 text-[#9b87f5] border-[#9b87f5] hover:bg-[#F1F0FB]"
          >
            <RefreshCw size={10} className="mr-1" />
            Re-detect
          </Button>
        </div>
        <MenuButton />
      </div>
      
      {/* Customizer Panel */}
      {showCustomizer && (
        <div className="px-2 pt-2 pb-4">
          <RulerCustomizer />
        </div>
      )}
      
      {/* Fixed height container with overflow handling */}
      <div className="mobile-ruler-layout" style={{
      height: `${rulerHeight + 80}px`,
      overflow: 'hidden',
      position: 'relative'
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
              {deviceType} • {screenSize}"
            </p>
            
            <div className="flex justify-between">
              <Button
                variant={unit === 'cm' ? 'default' : 'outline'}
                size="sm"
                className={`${unit === 'cm' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} text-xs flex-1`}
                onClick={() => setUnit('cm')}
              >
                CM
              </Button>
              <Button
                variant={unit === 'mm' ? 'default' : 'outline'}
                size="sm"
                className={`${unit === 'mm' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} text-xs flex-1 mx-1`}
                onClick={() => setUnit('mm')}
              >
                MM
              </Button>
              <Button
                variant={unit === 'inch' ? 'default' : 'outline'}
                size="sm"
                className={`${unit === 'inch' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} text-xs flex-1`}
                onClick={() => setUnit('inch')}
              >
                PULG
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Homepage content after the ruler section */}
      <div className="px-4 py-6 mt-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <h1 className="text-2xl font-bold text-[#9b87f5] mb-2">
            Regla Online Tamaño Real
          </h1>
          <p className="text-gray-600 mb-4">
            Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla
          </p>
          <HomeContent />
        </div>
        
        <div className="mb-10">
          <Card className="bg-white p-4">
            <CardContent className="p-0">
              <p className="mb-4">{t('rulerDescription')}</p>
              <p className="mb-4">{t('contentIntro')}</p>
              
              <h2 className="text-xl font-bold mb-3 text-[#9b87f5]">{t('moreInfo')}</h2>
              <div className="grid grid-cols-1 gap-4 mb-6">
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
        
        <div className="grid grid-cols-1 gap-6 mb-10">
          <HowToUseSection />
          <WhyPerfectSection />
        </div>
        
        <FaqSection />
        
        <RulerSizesTable />
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
