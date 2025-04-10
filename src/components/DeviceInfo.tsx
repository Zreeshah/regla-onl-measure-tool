
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Smartphone } from 'lucide-react';

const DeviceInfo: React.FC = () => {
  const { t, language } = useLanguage();
  const [deviceType, setDeviceType] = useState<string>('');
  const [screenSize, setScreenSize] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    detectDevice();
    window.addEventListener('resize', detectDevice);
    
    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  const detectDevice = () => {
    const userAgent = navigator.userAgent;
    let detectedDevice = '';
    
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      detectedDevice = language === 'es' ? 'Tablet' : 'Tablet';
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
      detectedDevice = language === 'es' ? 'Teléfono móvil' : 'Mobile Phone';
    } else {
      detectedDevice = language === 'es' ? 'Computadora' : 'Desktop';
    }
    
    setDeviceType(detectedDevice);
    
    // Screen size calculation
    const width = window.innerWidth;
    const height = window.innerHeight;
    const diagonalPixels = Math.sqrt(width * width + height * height);
    const dpi = window.devicePixelRatio * 96;
    const diagonalInches = (diagonalPixels / dpi).toFixed(1);
    
    setScreenSize(diagonalInches);
  };

  return (
    <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Smartphone className="text-ruler-primary mr-2" size={20} />
          <h3 className="font-semibold text-ruler-primary">{t('deviceInfo')}</h3>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? t('hide') : t('show')}
        </Button>
      </div>
      
      {isExpanded && (
        <div className="mt-3 text-left">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 border-b pb-2 sm:border-b-0 sm:pb-0 sm:border-r sm:pr-4">
              <p className="text-sm text-gray-600">{t('detectedDevice')}:</p>
              <p className="font-medium">{deviceType}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">{t('screenSizeDetected')}:</p>
              <p className="font-medium">{screenSize}" {t('diagonal')}</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            {t('screenSizeNote')}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceInfo;
