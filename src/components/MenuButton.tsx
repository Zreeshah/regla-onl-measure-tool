
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-ruler-primary hover:bg-gray-100">
          <Menu size={24} />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-ruler-primary">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/blog/buscar-dni-por-nombre" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Buscar DNI por Nombre
            </Link>
            <Link 
              to="/blog/saber-dni-persona" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Cómo Saber el DNI de una Persona
            </Link>
            <Link 
              to="/blog/perdido-dni" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              He Perdido el DNI
            </Link>
            <Link 
              to="/blog/sistema-metrico-decimal" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Sistema Métrico Decimal
            </Link>
            <Link 
              to="/blog/numeros-adimensionales" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Números Adimensionales
            </Link>
            <Link 
              to="/blog/como-saber-cuanto-paro" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Cómo Saber Cuánto Paro Tengo
            </Link>
            <Link 
              to="/privacy" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              {t('privacy')}
            </Link>
            <Link 
              to="/disclaimer" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              {t('disclaimer')}
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
