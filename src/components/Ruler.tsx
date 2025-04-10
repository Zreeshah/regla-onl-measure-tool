
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Move, 
  Maximize, 
  Minimize, 
  RefreshCw, 
  ChevronDown, 
  Monitor
} from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

interface RulerProps {
  className?: string;
}

// Common screen size presets in inches
const COMMON_SCREEN_SIZES = [
  { label: "4.0\"", value: 4.0 },
  { label: "4.3\"", value: 4.3 },
  { label: "4.5\"", value: 4.5 },
  { label: "4.7\"", value: 4.7 },
  { label: "5.0\"", value: 5.0 },
  { label: "5.1\"", value: 5.1 },
  { label: "5.2\"", value: 5.2 },
  { label: "5.5\"", value: 5.5 },
  { label: "5.7\"", value: 5.7 },
  { label: "6.0\"", value: 6.0 },
  { label: "6.2\"", value: 6.2 },
  { label: "6.4\"", value: 6.4 },
  { label: "6.7\"", value: 6.7 },
  { label: "7.0\"", value: 7.0 },
  { label: "8.0\"", value: 8.0 },
  { label: "10.1\"", value: 10.1 },
  { label: "11\"", value: 11.0 },
  { label: "12.9\"", value: 12.9 },
  { label: "13.3\"", value: 13.3 },
  { label: "14\"", value: 14.0 },
  { label: "15.6\"", value: 15.6 },
  { label: "17\"", value: 17.0 },
  { label: "18.3\"", value: 18.3 },
];

const Ruler: React.FC<RulerProps> = ({ className }) => {
  const {
    pixelsPerCm,
    unit,
    setUnit,
    orientation,
    setOrientation,
    getValueInSelectedUnit,
    getPixelsFromValue,
    calibrateByScreen,
    autoCalibrate
  } = useCalibration();
  
  const { t } = useLanguage();
  
  const rulerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
  const [rulerWidth, setRulerWidth] = useState(0);
  const [rulerHeight, setRulerHeight] = useState(0);
  const [customScreenSize, setCustomScreenSize] = useState('15.6');
  const [screenSizeDropdownOpen, setScreenSizeDropdownOpen] = useState(false);
  
  useEffect(() => {
    const updateRulerDimensions = () => {
      if (orientation === 'horizontal') {
        setRulerWidth(Math.min(window.innerWidth - 40, 600)); // Limit width to avoid overlap
        setRulerHeight(120);
      } else {
        setRulerHeight(Math.min(window.innerHeight * 0.7, 500)); // Limit height to avoid overlap
        setRulerWidth(120);
      }
    };
    
    updateRulerDimensions();
    window.addEventListener('resize', updateRulerDimensions);
    
    return () => {
      window.removeEventListener('resize', updateRulerDimensions);
    };
  }, [orientation]);
  
  // Calculate the number of ticks based on orientation and container size
  const generateTicks = () => {
    if (!rulerRef.current) return [];
    
    const ticks = [];
    const isHorizontal = orientation === 'horizontal';
    const rulerLength = isHorizontal ? rulerWidth : rulerHeight;
    
    // Calculate max value based on unit and ruler length
    const maxValue = getValueInSelectedUnit(rulerLength);
    
    // Determine the appropriate tick interval based on the selected unit
    let majorTickInterval: number;
    let mediumTickInterval: number;
    let minorTickInterval: number;
    
    switch (unit) {
      case 'inch':
        majorTickInterval = 1; // Every inch
        mediumTickInterval = 0.5; // Every half inch
        minorTickInterval = 0.125; // Every 1/8 inch
        break;
      case 'cm':
        majorTickInterval = 1; // Every cm
        mediumTickInterval = 0.5; // Every 5mm
        minorTickInterval = 0.1; // Every 1mm
        break;
      case 'mm':
        majorTickInterval = 10; // Every 10mm (1cm)
        mediumTickInterval = 5; // Every 5mm
        minorTickInterval = 1; // Every 1mm
        break;
      default:
        majorTickInterval = 1;
        mediumTickInterval = 0.5;
        minorTickInterval = 0.1;
    }
    
    // Generate all the ticks
    for (let value = 0; value <= maxValue; value += minorTickInterval) {
      // Round to avoid floating point issues
      const roundedValue = Math.round(value * 100) / 100;
      
      // Skip 0 position for the ruler ticks
      if (roundedValue === 0) continue;
      
      // Determine tick type
      let tickType = 'minor';
      if (roundedValue % majorTickInterval === 0) {
        tickType = 'major';
      } else if (roundedValue % mediumTickInterval === 0) {
        tickType = 'medium';
      }
      
      // Calculate position in pixels
      const position = getPixelsFromValue(roundedValue);
      
      // Only show labels for major ticks
      const showLabel = tickType === 'major';
      
      // Format the label based on unit
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
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartDragPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartDragPosition({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startDragPosition.x,
          y: e.clientY - startDragPosition.y
        });
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        setPosition({
          x: e.touches[0].clientX - startDragPosition.x,
          y: e.touches[0].clientY - startDragPosition.y
        });
        e.preventDefault(); // Prevent scrolling while dragging
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    
    const handleTouchEnd = () => {
      setIsDragging(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startDragPosition]);

  const handleCustomScreenSizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseFloat(customScreenSize);
    if (!isNaN(size) && size > 0) {
      calibrateByScreen(size);
      setScreenSizeDropdownOpen(false);
    }
  };
  
  const ticks = generateTicks();
  
  return (
    <div
      className={`ruler-container ${orientation === 'horizontal' ? 'ruler-horizontal' : 'ruler-vertical'} ${className}`}
      ref={rulerRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        width: orientation === 'horizontal' ? `${rulerWidth}px` : `${rulerWidth}px`,
        height: orientation === 'vertical' ? `${rulerHeight}px` : `${rulerHeight}px`,
        backgroundColor: '#F5F7FA',
        zIndex: 50,
        position: 'absolute',
        left: 20,
        top: 100,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '6px',
        overflow: 'visible' // Allow buttons to overflow
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Ruler handle */}
      <div 
        className="absolute top-0 right-0 bg-[#9b87f5] text-white p-1 rounded-bl cursor-grab z-10 flex items-center"
        title={t('move')}
      >
        <Move size={16} />
      </div>
      
      {/* Control buttons */}
      <div className="absolute -top-10 left-0 flex space-x-1 z-10">
        {/* Orientation toggle buttons */}
        <Button
          variant={orientation === 'horizontal' ? 'default' : 'outline'}
          size="sm"
          className={`${orientation === 'horizontal' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} rounded-md text-xs`}
          onClick={() => setOrientation('horizontal')}
          title={t('horizontal')}
        >
          <Maximize size={16} className="mr-1" />
          {t('horizontal')}
        </Button>
        
        <Button
          variant={orientation === 'vertical' ? 'default' : 'outline'}
          size="sm"
          className={`${orientation === 'vertical' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} rounded-md text-xs`}
          onClick={() => setOrientation('vertical')}
          title={t('vertical')}
        >
          <Minimize size={16} className="mr-1 rotate-90" />
          {t('vertical')}
        </Button>
        
        {/* Auto calibrate button */}
        <Button
          variant="outline"
          size="sm"
          className="bg-white rounded-md text-xs"
          onClick={autoCalibrate}
          title={t('autoCalibrate')}
        >
          <RefreshCw size={16} className="mr-1" />
          {t('autoCalibrate')}
        </Button>
        
        {/* Screen size dropdown - Fix: Use DropdownMenu instead of Popover for screen sizes */}
        <DropdownMenu open={screenSizeDropdownOpen} onOpenChange={setScreenSizeDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-white rounded-md text-xs flex items-center"
              title={t('screenSize')}
            >
              <Monitor size={16} className="mr-1" />
              {customScreenSize}"
              <ChevronDown size={14} className="ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-0 w-48 max-h-80 overflow-y-auto" side="bottom" align="start">
            <div className="p-2 border-b">
              <form onSubmit={handleCustomScreenSizeSubmit} className="flex items-center space-x-1">
                <Input
                  type="number"
                  min="1"
                  step="0.1"
                  value={customScreenSize}
                  onChange={(e) => setCustomScreenSize(e.target.value)}
                  className="h-8 text-sm"
                  placeholder={t('screenSize') || ""}
                />
                <Button type="submit" size="sm" className="h-8 bg-[#9b87f5] hover:bg-[#7E69AB]">
                  OK
                </Button>
              </form>
            </div>
            <div className="py-1">
              {COMMON_SCREEN_SIZES.map((size) => (
                <DropdownMenuItem 
                  key={size.value}
                  className="text-sm px-3 py-1.5 cursor-pointer"
                  onClick={() => {
                    setCustomScreenSize(size.value.toString());
                    calibrateByScreen(size.value);
                    setScreenSizeDropdownOpen(false);
                  }}
                >
                  {size.label}
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Ruler markings */}
      <div className={`relative ${orientation === 'horizontal' ? 'w-full h-full' : 'h-full w-full'}`}>
        {/* Ruler base */}
        <div className={`absolute ${orientation === 'horizontal' ? 'w-full h-6 top-6' : 'h-full w-6 left-6'} bg-transparent border-t border-[#9b87f5]`}></div>
        
        {/* Ticks */}
        {ticks.map((tick, index) => (
          <div key={index} className="absolute">
            {/* Horizontal ruler */}
            {orientation === 'horizontal' && (
              <>
                <div 
                  className={`ruler-tick ruler-tick-${tick.type} absolute bg-[#1A1F2C]`}
                  style={{
                    height: tick.type === 'major' ? '16px' : tick.type === 'medium' ? '12px' : '8px',
                    width: '1px',
                    left: `${tick.position}px`,
                    top: '24px',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {tick.showLabel && (
                  <div 
                    className="ruler-number absolute text-xs font-semibold"
                    style={{
                      left: `${tick.position}px`,
                      top: '4px',
                      transform: 'translateX(-50%)',
                      color: '#1A1F2C',
                    }}
                  >
                    {tick.label}
                  </div>
                )}
              </>
            )}
            
            {/* Vertical ruler */}
            {orientation === 'vertical' && (
              <>
                <div 
                  className={`ruler-tick ruler-tick-${tick.type} absolute bg-[#1A1F2C]`}
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
                      color: '#1A1F2C',
                    }}
                  >
                    {tick.label}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
        
        {/* Unit label - ensure it's always visible */}
        <div 
          className="absolute text-xs bg-white px-1 rounded text-[#1A1F2C] font-semibold"
          style={
            orientation === 'horizontal' 
              ? { right: '8px', top: '4px' } 
              : { bottom: '24px', left: '8px', transform: 'rotate(-90deg)', transformOrigin: 'left bottom' }
          }
        >
          {unit.toUpperCase()}
        </div>

        {/* Unit buttons at bottom */}
        <div className={`absolute flex space-x-1 ${orientation === 'horizontal' ? 'bottom-2 left-2' : 'bottom-2 right-2'}`}>
          <Button 
            variant={unit === 'cm' ? 'default' : 'outline'} 
            size="sm" 
            className={`${unit === 'cm' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} h-6 text-[10px] px-2`}
            onClick={() => setUnit('cm')}
          >
            CM
          </Button>
          <Button 
            variant={unit === 'mm' ? 'default' : 'outline'} 
            size="sm" 
            className={`${unit === 'mm' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} h-6 text-[10px] px-2`}
            onClick={() => setUnit('mm')}
          >
            MM
          </Button>
          <Button 
            variant={unit === 'inch' ? 'default' : 'outline'} 
            size="sm" 
            className={`${unit === 'inch' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-white'} h-6 text-[10px] px-2`}
            onClick={() => setUnit('inch')}
          >
            PULG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ruler;
