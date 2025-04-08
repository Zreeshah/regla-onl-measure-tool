
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-1">
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={language === 'es' ? 'bg-ruler-primary' : ''}
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'bg-ruler-primary' : ''}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
