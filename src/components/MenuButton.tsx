
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
              to="/imprimir"
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Imprimir Regla
            </Link>
            
            <div className="border-t border-gray-200 my-4 pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">Información</p>
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/sobre-nosotros" 
                  className="text-lg font-medium hover:text-ruler-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotros
                </Link>
                <Link 
                  to="/contacto" 
                  className="text-lg font-medium hover:text-ruler-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
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
              </div>
            </div>

            <div className="border-t border-gray-200 my-4 pt-4">
              <p className="text-sm font-semibold text-gray-500 mb-3">Blog</p>
              <div className="flex flex-col space-y-3">
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
              to="/blog/sistema-mks" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Sistema MKS
            </Link>
            <Link 
              to="/blog/sistema-natural-unidades" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Sistema Natural de Unidades
            </Link>
            <Link 
              to="/blog/sistema-anglosajon-unidades" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Sistema Anglosajón de Unidades
            </Link>
            <Link 
              to="/blog/clinometro" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Clinómetro: Qué es y Cómo Usarlo
            </Link>
            <Link 
              to="/blog/medidor-profundidad" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Medidor de Profundidad: Qué es y Cómo Usarlo
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
              to="/blog/como-usar-regla" 
              className="text-lg font-medium hover:text-ruler-primary"
              onClick={() => setIsOpen(false)}
            >
              Cómo Usar una Regla
            </Link>
              </div>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
