
import React, { useState, useRef, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Move } from 'lucide-react';

interface RulerProps {
  className?: string;
}

const Ruler: React.FC<RulerProps> = ({ className }) => {
  const {
    pixelsPerCm,
    unit,
    orientation,
    getValueInSelectedUnit,
    getPixelsFromValue
  } = useCalibration();
  
  const { t } = useLanguage();
  
  const rulerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
  const [rulerWidth, setRulerWidth] = useState(0);
  const [rulerHeight, setRulerHeight] = useState(0);
  
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
        backgroundColor: '#F5F7FA', // Updated to match site theme
        zIndex: 50, // Higher z-index to ensure ruler stays on top
        position: 'absolute', // Make it absolute positioned to avoid layout conflicts
        left: 20,
        top: 100, // Position it below the header
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
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
      </div>
    </div>
  );
};

export default Ruler;
