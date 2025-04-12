
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 mb-6 border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <span className="text-2xl font-bold text-ruler-primary">Regla<span className="text-gray-800">.Onl</span></span>
        </Link>
        <div className="flex items-center">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
