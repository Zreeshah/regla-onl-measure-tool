
import React, { useState, useEffect } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Settings, Check } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useLanguage } from '@/contexts/LanguageContext';

const RulerCustomizer: React.FC = () => {
  const { 
    unit, 
    setUnit, 
    getPixelsFromValue,
    getValueInSelectedUnit,
    setPixelsPerCm,
    pixelsPerCm
  } = useCalibration();
  
  const { t } = useLanguage();
  
  // State for the custom measurement input
  const [customValue, setCustomValue] = useState<string>('10');
  const [referenceLength, setReferenceLength] = useState<string>('10');
  const [isCalibrating, setIsCalibrating] = useState<boolean>(false);
  
  // Function to handle custom calibration
  const handleCustomCalibration = () => {
    const numValue = parseFloat(customValue);
    const numReferenceLength = parseFloat(referenceLength);
    
    if (!isNaN(numValue) && numValue > 0 && !isNaN(numReferenceLength) && numReferenceLength > 0) {
      // Calculate the new pixels per cm based on the custom measurement
      let newPixelsPerCm;
      
      if (unit === 'cm') {
        newPixelsPerCm = numReferenceLength / numValue;
      } else if (unit === 'mm') {
        newPixelsPerCm = (numReferenceLength / numValue) * 10; // Convert mm to cm
      } else if (unit === 'inch') {
        newPixelsPerCm = (numReferenceLength / numValue) * 2.54; // Convert inches to cm
      }
      
      if (newPixelsPerCm) {
        setPixelsPerCm(newPixelsPerCm);
        console.log(`Custom calibration: ${numValue} ${unit} = ${numReferenceLength}px (${newPixelsPerCm.toFixed(2)} px/cm)`);
      }
    }
  };
  
  const startCalibration = () => {
    setIsCalibrating(true);
  };
  
  const exitCalibration = () => {
    setIsCalibrating(false);
  };
  
  // Initialize customValue based on current unit when unit changes
  useEffect(() => {
    setCustomValue('10'); // Reset to default value when unit changes
  }, [unit]);
  
  return (
    <Card className="p-4 bg-white shadow-sm rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium flex items-center">
          <Settings size={14} className="mr-1 text-[#9b87f5]" />
          {t('customizeRuler') || "Customize Ruler"}
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-xs text-gray-500 mb-2">{t('selectUnit') || "Select Unit"}</p>
          <RadioGroup 
            defaultValue={unit} 
            value={unit}
            onValueChange={(value) => setUnit(value as 'cm' | 'mm' | 'inch')}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="cm" id="cm" className="h-3 w-3" />
              <Label htmlFor="cm" className="text-xs">CM</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="mm" id="mm" className="h-3 w-3" />
              <Label htmlFor="mm" className="text-xs">MM</Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="inch" id="inch" className="h-3 w-3" />
              <Label htmlFor="inch" className="text-xs">INCH</Label>
            </div>
          </RadioGroup>
        </div>
        
        {!isCalibrating ? (
          <Button 
            onClick={startCalibration} 
            size="sm" 
            className="w-full text-xs bg-[#9b87f5] hover:bg-[#7E69AB]"
          >
            {t('calibrate') || "Calibrate Measurement"}
          </Button>
        ) : (
          <div className="space-y-3">
            <div>
              <Label htmlFor="customValue" className="text-xs block mb-1">
                {t('customValue') || `Enter exact ${unit} measurement`}:
              </Label>
              <div className="flex items-center">
                <Input
                  id="customValue"
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  className="h-8 text-xs"
                />
                <span className="ml-1 text-xs font-medium">{unit}</span>
              </div>
            </div>
            
            <div>
              <Label htmlFor="referenceLength" className="text-xs block mb-1">
                {t('pixelLength') || "Enter pixel length"}:
              </Label>
              <div className="flex items-center">
                <Input
                  id="referenceLength"
                  type="number"
                  step="1"
                  min="1"
                  value={referenceLength}
                  onChange={(e) => setReferenceLength(e.target.value)}
                  className="h-8 text-xs"
                />
                <span className="ml-1 text-xs font-medium">px</span>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                onClick={handleCustomCalibration} 
                size="sm" 
                className="flex-1 text-xs bg-[#9b87f5] hover:bg-[#7E69AB]"
              >
                <Check size={12} className="mr-1" />
                {t('apply') || "Apply"}
              </Button>
              <Button 
                onClick={exitCalibration} 
                size="sm" 
                variant="outline"
                className="flex-1 text-xs"
              >
                {t('cancel') || "Cancel"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RulerCustomizer;
