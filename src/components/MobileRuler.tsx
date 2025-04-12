
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDeviceInfo } from '@/hooks/use-device-info';
import { RefreshCw, Smartphone, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import HomeContent from '@/components/HomeContent';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileRuler: React.FC = () => {
  const { 
    pixelsPerCm, 
    unit, 
    setUnit, 
    getValueInSelectedUnit, 
    getPixelsFromValue,
    calibrateByScreen
  } = useCalibration();
  
  const { deviceType, screenSize, redetectScreenSize, setScreenSize } = useDeviceInfo();
  const { t } = useLanguage();
  
  const rulerHeight = 400; // Fixed height for the ruler
  
  const rulerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState<number>(screenSize);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setSliderValue(screenSize);
  }, [screenSize]);
  
  useEffect(() => {
    calibrateByScreen(screenSize);
  }, [screenSize, calibrateByScreen]);
  
  const handleSliderChange = (value: number[]) => {
    const newSize = value[0];
    setSliderValue(newSize);
    setScreenSize(newSize);
    calibrateByScreen(newSize);
  };
  
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
  
  return (
    <div className="relative mobile-ruler-container">
      <div className="px-2 pt-2 text-center flex justify-between items-center">
        <p className="text-xs text-gray-600 mb-1">(Scroll down to show full ruler)</p>
        
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-ruler-primary hover:bg-gray-100">
              <Menu size={24} />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-ruler-primary">Menu</SheetTitle>
            </SheetHeader>
            <div className="py-6">
              <nav className="flex flex-col space-y-4">
                <Link 
                  to="/" 
                  className="text-lg font-medium hover:text-ruler-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link 
                  to="/privacy" 
                  className="text-lg font-medium hover:text-ruler-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('privacy')}
                </Link>
                <Link 
                  to="/disclaimer" 
                  className="text-lg font-medium hover:text-ruler-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('disclaimer')}
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="mobile-ruler-layout">
        <div
          className="ruler-container ruler-vertical mobile-ruler"
          ref={rulerRef}
          style={{
            width: '80px',
            height: `${rulerHeight}px`,
            position: 'relative',
            overflow: 'visible',
            margin: '0'
          }}
        >
          <div className="relative h-full w-full">
            <div className="absolute h-full w-8 left-8 bg-transparent border-l border-[#9b87f5]"></div>
            
            {ticks.map((tick, index) => (
              <div key={index} className="absolute">
                <div 
                  className="absolute"
                  style={{
                    width: tick.type === 'major' ? '32px' : '16px',
                    height: '2px',
                    top: `${tick.position}px`,
                    left: tick.type === 'major' ? '28px' : '44px',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#9b87f5'
                  }}
                ></div>
                
                {tick.showLabel && (
                  <div 
                    className="absolute font-bold"
                    style={{
                      top: `${tick.position}px`,
                      left: '12px',
                      transform: 'translateY(-50%)',
                      color: '#7E69AB',
                      fontSize: '20px'
                    }}
                  >
                    {tick.label}
                  </div>
                )}
              </div>
            ))}
            
            <div 
              className="absolute text-sm bg-[#f1f0fb] px-2 rounded text-[#7E69AB] font-semibold"
              style={{ bottom: '24px', left: '12px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom' }}
            >
              {unit.toUpperCase()}
            </div>
          </div>
        </div>
        
        <div className="flex-1 px-2">
          <div className="bg-white p-3 rounded-lg shadow-sm mb-4 max-w-[200px] mx-auto">
            <p className="text-xs font-medium mb-2">
              {deviceType} • {screenSize}"
            </p>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="relative w-16 h-28 border border-gray-300 rounded-lg flex items-center justify-center">
                <Smartphone className="absolute inset-0 m-auto text-gray-200" size={40} />
                <span className="text-sm font-bold">{sliderValue}"</span>
              </div>
              
              <div className="flex-grow">
                <Slider
                  defaultValue={[screenSize]}
                  value={[sliderValue]}
                  min={3}
                  max={15}
                  step={0.01}
                  onValueChange={handleSliderChange}
                  className="mb-2"
                  orientation="vertical"
                />
                
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
      
      {/* Homepage content after the ruler section */}
      <div className="px-4 py-6 mt-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <HomeContent />
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center">
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className={`text-[#9b87f5] ${unit === 'cm' ? 'font-bold' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setUnit('cm');
            }}
          >
            CM
          </a>
          <span className="text-gray-300">|</span>
          <a 
            href="#" 
            className={`text-[#9b87f5] ${unit === 'inch' ? 'font-bold' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setUnit('inch');
            }}
          >
            INCH
          </a>
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
    </div>
  );
};

export default MobileRuler;
