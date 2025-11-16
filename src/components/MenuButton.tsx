
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
        <div className="py-6 overflow-y-auto max-h-[calc(100vh-8rem)]">
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/imprimir"
              className="text-lg font-medium hover:text-ruler-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              Imprimir Regla
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Información</p>
            </div>
            <Link 
              to="/sobre-nosotros" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link 
              to="/contacto" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link 
              to="/privacy" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('privacy')}
            </Link>
            <Link 
              to="/disclaimer" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              {t('disclaimer')}
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Blog</p>
            </div>
            <Link
              to="/blog/buscar-dni-por-nombre" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Buscar DNI por Nombre
            </Link>
            <Link 
              to="/blog/saber-dni-persona" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Cómo Saber el DNI de una Persona
            </Link>
            <Link 
              to="/blog/perdido-dni" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              He Perdido el DNI
            </Link>
            <Link 
              to="/blog/sistema-metrico-decimal" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Sistema Métrico Decimal
            </Link>
            <Link 
              to="/blog/sistema-mks" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Sistema MKS
            </Link>
            <Link 
              to="/blog/sistema-natural-unidades" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Sistema Natural de Unidades
            </Link>
            <Link 
              to="/blog/sistema-anglosajon-unidades" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Sistema Anglosajón de Unidades
            </Link>
            <Link 
              to="/blog/clinometro" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Clinómetro: Qué es y Cómo Usarlo
            </Link>
            <Link 
              to="/blog/medidor-profundidad" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Medidor de Profundidad: Qué es y Cómo Usarlo
            </Link>
            <Link 
              to="/blog/numeros-adimensionales" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Números Adimensionales
            </Link>
            <Link 
              to="/blog/como-saber-cuanto-paro" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Cómo Saber Cuánto Paro Tengo
            </Link>
            <Link 
              to="/blog/como-usar-regla" 
              className="text-base font-medium hover:text-ruler-primary py-2 pl-2"
              onClick={() => setIsOpen(false)}
            >
              Cómo Usar una Regla
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuButton;
