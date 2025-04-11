
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useDeviceInfo } from '@/hooks/use-device-info';
import { RefreshCw, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

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
  
  // Set default ruler height to 13cm (in pixels)
  const rulerHeight = 13 * pixelsPerCm;
  
  // Force vertical orientation for mobile
  const orientation = 'vertical';
  
  const rulerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState<number>(screenSize);
  
  useEffect(() => {
    setSliderValue(screenSize);
  }, [screenSize]);
  
  useEffect(() => {
    // Apply calibration based on detected screen size
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
    const maxValue = 13; // Show 13cm on mobile
    
    const majorTickInterval = 1; // 1cm
    const mediumTickInterval = 0.5; // 5mm
    const minorTickInterval = 0.1; // 1mm
    
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      const roundedValue = Math.round(value * 100) / 100;
      
      if (roundedValue === 0) continue;
      
      let tickType = 'minor';
      if (roundedValue % majorTickInterval === 0) {
        tickType = 'major';
      } else if (roundedValue % mediumTickInterval === 0) {
        tickType = 'medium';
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
      <div className="mx-auto px-4 pt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">(Scroll down to show full ruler)</p>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <p className="text-sm font-medium mb-3">
            YOUR device is {deviceType}. The screen size is {screenSize} inch. 
            If the screen size detection is inaccurate, please adjust the screen size below.
          </p>
          
          <div className="flex justify-center mb-3">
            <div className="relative w-32 h-52 border-2 border-gray-300 rounded-xl flex items-center justify-center">
              <Smartphone className="absolute inset-0 m-auto text-gray-200" size={80} />
              <span className="text-lg font-bold">{sliderValue}"</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <Button 
              onClick={redetectScreenSize}
              size="sm"
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              <RefreshCw size={14} className="mr-1" />
              Re-detect
            </Button>
            
            <div className="flex-grow">
              <Slider
                defaultValue={[screenSize]}
                value={[sliderValue]}
                min={3}
                max={15}
                step={0.01}
                onValueChange={handleSliderChange}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="flex mobile-ruler-layout"
        style={{ minHeight: 'calc(100vh - 350px)' }}
      >
        {/* Vertical ruler on left */}
        <div
          className="ruler-container ruler-vertical mobile-ruler"
          ref={rulerRef}
          style={{
            width: '80px',
            height: `${rulerHeight}px`,
            backgroundColor: '#FEF7CD',
            position: 'relative',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '6px',
            overflow: 'visible',
            margin: '0'
          }}
        >
          <div className={`relative h-full w-full`}>
            <div className={`absolute h-full w-6 left-6 bg-transparent border-t border-black`}></div>
            
            {ticks.map((tick, index) => (
              <div key={index} className="absolute">
                <div 
                  className={`ruler-tick ruler-tick-${tick.type} absolute bg-black`}
                  style={{
                    width: tick.type === 'major' ? '16px' : tick.type === 'medium' ? '12px' : '8px',
                    height: '1px',
                    top: `${tick.position}px`,
                    left: '24px',
                    transform: 'translateY(-50%)',
                  }}
                ></div>
                
                {tick.showLabel && (
                  <div 
                    className="ruler-number absolute text-xs font-semibold"
                    style={{
                      top: `${tick.position}px`,
                      left: '4px',
                      transform: 'translateY(-50%)',
                      color: 'black',
                    }}
                  >
                    {tick.label}
                  </div>
                )}
              </div>
            ))}
            
            <div 
              className="absolute text-xs bg-[#FEF7CD] px-1 rounded text-black font-semibold"
              style={{ bottom: '24px', left: '8px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom' }}
            >
              {unit.toUpperCase()}
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex-1"></div>
      </div>
      
      {/* Footer unit selection */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center">
        <div className="flex space-x-4 items-center">
          <button 
            className={`text-[#1EAEDB] ${unit === 'cm' ? 'underline font-bold' : ''}`}
            onClick={() => setUnit('cm')}
          >
            CM
          </button>
          <span className="text-gray-300">|</span>
          <button 
            className={`text-[#1EAEDB] ${unit === 'inch' ? 'underline font-bold' : ''}`}
            onClick={() => setUnit('inch')}
          >
            INCH
          </button>
          <span className="text-gray-300">|</span>
          <button 
            className="text-[#1EAEDB]"
            onClick={() => console.log('Protractor - Not implemented yet')}
          >
            protractor
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileRuler;
