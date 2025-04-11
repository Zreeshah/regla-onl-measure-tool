
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
    
    // Adjust tick spacing for cleaner appearance
    const majorTickInterval = 1; // 1cm
    const mediumTickInterval = 0.5; // 5mm
    const minorTickInterval = 0.1; // 1mm
    
    // Generate fewer ticks for a cleaner look
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
      
      // Only show labels for major ticks (whole centimeters)
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
      <div className="px-2 pt-2 text-center">
        <p className="text-xs text-gray-600 mb-1">(Scroll down to show full ruler)</p>
      </div>
      
      <div className="mobile-ruler-layout">
        {/* Vertical ruler on left */}
        <div
          className="ruler-container ruler-vertical mobile-ruler"
          ref={rulerRef}
          style={{
            width: '80px', // Made slightly narrower
            height: `${rulerHeight}px`,
            backgroundColor: '#F1F0FB',
            position: 'relative',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            borderRadius: '6px',
            overflow: 'visible',
            margin: '0',
            borderRight: '2px solid #9b87f5'
          }}
        >
          <div className={`relative h-full w-full`}>
            <div className={`absolute h-full w-8 left-8 bg-transparent border-t border-black`}></div>
            
            {ticks.map((tick, index) => (
              <div key={index} className="absolute">
                <div 
                  className={`ruler-tick ruler-tick-${tick.type} absolute bg-black`}
                  style={{
                    width: tick.type === 'major' ? '24px' : tick.type === 'medium' ? '16px' : '8px',
                    height: '1px',
                    top: `${tick.position}px`,
                    left: '36px',
                    transform: 'translateY(-50%)',
                  }}
                ></div>
                
                {tick.showLabel && (
                  <div 
                    className="ruler-number absolute font-semibold"
                    style={{
                      top: `${tick.position}px`,
                      left: '12px',
                      transform: 'translateY(-50%)',
                      color: '#1A1F2C',
                      fontSize: '14px',
                    }}
                  >
                    {tick.label}
                  </div>
                )}
              </div>
            ))}
            
            <div 
              className="absolute text-sm bg-[#F1F0FB] px-2 rounded text-[#9b87f5] font-semibold"
              style={{ bottom: '24px', left: '12px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom' }}
            >
              {unit.toUpperCase()}
            </div>
          </div>
        </div>
        
        {/* Device info card - moved to right side and made smaller */}
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
      
      {/* Footer unit selection */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center">
        <div className="flex space-x-4 items-center">
          <button 
            className={`text-[#9b87f5] ${unit === 'cm' ? 'underline font-bold' : ''}`}
            onClick={() => setUnit('cm')}
          >
            CM
          </button>
          <span className="text-gray-300">|</span>
          <button 
            className={`text-[#9b87f5] ${unit === 'inch' ? 'underline font-bold' : ''}`}
            onClick={() => setUnit('inch')}
          >
            INCH
          </button>
          <span className="text-gray-300">|</span>
          <button 
            className="text-[#9b87f5]"
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
