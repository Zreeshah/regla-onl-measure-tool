
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-6 border-t mt-10 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              {t('copyright')}
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm text-ruler-primary hover:underline">
              {t('privacy')}
            </Link>
            <Link to="/disclaimer" className="text-sm text-ruler-primary hover:underline">
              {t('disclaimer')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
