
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

const Header: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <header className="py-4 mb-6 border-b">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Ruler size={28} className="text-ruler-primary mr-2" />
          <span className="text-2xl font-bold text-ruler-primary">Regla<span className="text-gray-800">.Onl</span></span>
        </Link>
        
        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`${navigationMenuTriggerStyle()} px-4`}>
                  Inicio
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[250px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/buscar-dni-por-nombre" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Buscar DNI por Nombre
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/saber-dni-persona" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Cómo Saber el DNI de una Persona
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/perdido-dni" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          He Perdido el DNI
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/sistema-metrico-decimal" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Sistema Métrico Decimal
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/sistema-mks" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Sistema MKS
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/sistema-natural-unidades" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Sistema Natural de Unidades
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/sistema-anglosajon-unidades" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Sistema Anglosajón de Unidades
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/clinometro" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Clinómetro: Qué es y Cómo Usarlo
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/medidor-profundidad" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Medidor de Profundidad: Qué es y Cómo Usarlo
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/numeros-adimensionales" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Números Adimensionales
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/como-saber-cuanto-paro" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Cómo Saber Cuánto Paro Tengo
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/blog/como-usar-regla" 
                          className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          Cómo Usar una Regla
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Más</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/privacy" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          {t('privacy')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/disclaimer" className="block select-none rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          {t('disclaimer')}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex md:hidden items-center">
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
