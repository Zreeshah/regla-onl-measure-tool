import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Ruler, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Regla.Onl</title>
        <meta name="description" content="Conoce más sobre Regla.Onl, la herramienta de medición online más precisa y fácil de usar." />
        <html lang="es" />
        <link rel="canonical" href="https://regla.onl/sobre-nosotros" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h1 className="text-3xl font-bold mb-6 text-ruler-primary">
                Sobre Nosotros
              </h1>
              
              <p className="text-lg text-gray-700 mb-6">
                Bienvenido a Regla.Onl, tu herramienta de medición digital confiable y precisa. Creada con el objetivo de proporcionar una solución práctica para cuando necesitas medir objetos y no tienes una regla física a mano.
              </p>

              <p className="text-gray-700 mb-6">
                En un mundo cada vez más digital, entendemos que a veces las herramientas tradicionales no están disponibles cuando las necesitas. Por eso desarrollamos esta aplicación web que convierte tu pantalla en una regla calibrada, permitiéndote realizar mediciones precisas en cualquier momento y lugar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Target className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-gray-700">
                  Proporcionar una herramienta de medición online accesible, precisa y fácil de usar para todos, sin importar dónde se encuentren o qué dispositivo utilicen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Zap className="text-ruler-primary mr-3" size={32} />
                  <h2 className="text-xl font-semibold text-ruler-primary">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-gray-700">
                  Ser la herramienta de medición digital más confiable y utilizada en el mundo hispanohablante, ayudando a millones de personas en sus necesidades diarias.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-ruler-primary">
                ¿Por qué elegir Regla.Onl?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Precisión Garantizada</h3>
                    <p className="text-gray-700">Sistema de calibración avanzado que se adapta a tu pantalla específica para mediciones exactas.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">100% Gratis</h3>
                    <p className="text-gray-700">Sin registros, sin suscripciones, sin costos ocultos. Siempre será gratuita.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Fácil de Usar</h3>
                    <p className="text-gray-700">Interfaz intuitiva diseñada para que cualquier persona pueda usarla sin complicaciones.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Compatible con Todos los Dispositivos</h3>
                    <p className="text-gray-700">Funciona perfectamente en computadoras, tablets y smartphones.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ruler-primary/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-ruler-primary font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900">Privacidad Primero</h3>
                    <p className="text-gray-700">Todas las calibraciones se guardan localmente en tu navegador. No recopilamos ni compartimos tus datos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-ruler-primary">
                Nuestro Compromiso
              </h2>
              <p className="text-gray-700 mb-4">
                Nos comprometemos a mantener Regla.Onl como una herramienta gratuita, accesible y en constante mejora. Escuchamos a nuestra comunidad y trabajamos continuamente para añadir nuevas características y mejorar la experiencia de usuario.
              </p>
              <p className="text-gray-700">
                Si tienes alguna sugerencia o comentario, no dudes en contactarnos. Tu opinión es fundamental para nosotros.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
