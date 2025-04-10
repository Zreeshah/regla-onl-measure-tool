
import React, { useState } from 'react';
import { useCalibration } from '@/contexts/CalibrationContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowUp, ArrowDown, CreditCard, Ruler, Maximize, Minimize } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RulerControls: React.FC = () => {
  const {
    calibrateByScreen,
    calibrateByCard,
    adjustCalibration,
    autoCalibrate,
    unit,
    setUnit,
    orientation,
    setOrientation
  } = useCalibration();
  
  const { t } = useLanguage();
  
  const [screenSize, setScreenSize] = useState<string>('15.6');
  
  const handleScreenSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScreenSize(e.target.value);
  };
  
  const handleScreenSizeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseFloat(screenSize);
    if (!isNaN(size) && size > 0) {
      calibrateByScreen(size);
    }
  };
  
  return (
    <Card className="shadow-md bg-white">
      <CardHeader className="border-b pb-3">
        <CardTitle className="text-lg text-[#9b87f5]">{t('calibrationTitle')}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <Tabs defaultValue="screen" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="auto">{t('autoCalibrate')}</TabsTrigger>
            <TabsTrigger value="screen">{t('screenSize')}</TabsTrigger>
            <TabsTrigger value="card">{t('creditCard')}</TabsTrigger>
            <TabsTrigger value="manual">{t('manual')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="auto" className="space-y-2">
            <p className="text-sm text-gray-600 mb-2">
              {t('calibrationInstructions')}
            </p>
            <Button 
              onClick={autoCalibrate}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              {t('autoCalibrate')}
            </Button>
          </TabsContent>
          
          <TabsContent value="screen" className="space-y-2">
            <form onSubmit={handleScreenSizeSubmit} className="flex flex-col space-y-2">
              <Label htmlFor="screen-size" className="text-sm">
                {t('screenSize')} ({t('inches')})
              </Label>
              <div className="flex space-x-2">
                <Input
                  id="screen-size"
                  type="number"
                  min="1"
                  step="0.1"
                  value={screenSize}
                  onChange={handleScreenSizeChange}
                  className="flex-1"
                />
                <Button type="submit" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
                  <Ruler size={16} className="mr-1" />
                  {t('calibrationTitle')}
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="card" className="space-y-2">
            <p className="text-sm text-gray-600 mb-2">
              {t('creditCardSize')}
            </p>
            <Button 
              onClick={calibrateByCard}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              <CreditCard size={16} className="mr-1" />
              {t('calibrationTitle')}
            </Button>
          </TabsContent>
          
          <TabsContent value="manual" className="space-y-2">
            <div className="flex justify-between space-x-2">
              <Button 
                onClick={() => adjustCalibration('down')}
                variant="outline"
                className="flex-1"
                title={t('adjustDown')}
              >
                <ArrowDown size={16} className="mr-1" />
                {t('adjustDown')}
              </Button>
              <Button 
                onClick={() => adjustCalibration('up')}
                variant="outline"
                className="flex-1"
                title={t('adjustUp')}
              >
                <ArrowUp size={16} className="mr-1" />
                {t('adjustUp')}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 space-y-4">
          {/* Units */}
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('unitTitle')}
            </Label>
            <RadioGroup 
              value={unit} 
              onValueChange={(value) => setUnit(value as 'cm' | 'mm' | 'inch')}
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="cm" id="unit-cm" />
                <Label htmlFor="unit-cm" className="text-sm">{t('cm')}</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="mm" id="unit-mm" />
                <Label htmlFor="unit-mm" className="text-sm">{t('mm')}</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="inch" id="unit-inch" />
                <Label htmlFor="unit-inch" className="text-sm">{t('inch')}</Label>
              </div>
            </RadioGroup>
          </div>
          
          {/* Orientation */}
          <div>
            <Label className="text-sm font-medium mb-2 block">
              {t('orientation')}
            </Label>
            <div className="flex space-x-2">
              <Button
                variant={orientation === 'horizontal' ? 'default' : 'outline'}
                className={orientation === 'horizontal' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : ''}
                onClick={() => setOrientation('horizontal')}
              >
                <Maximize size={16} className="mr-1" />
                {t('horizontal')}
              </Button>
              <Button
                variant={orientation === 'vertical' ? 'default' : 'outline'}
                className={orientation === 'vertical' ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : ''}
                onClick={() => setOrientation('vertical')}
              >
                <Minimize size={16} className="mr-1 rotate-90" />
                {t('vertical')}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RulerControls;
