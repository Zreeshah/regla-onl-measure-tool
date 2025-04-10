
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 mb-6 border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <h1 className="text-2xl font-bold text-ruler-primary">Regla<span className="text-gray-800">.Onl</span></h1>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
