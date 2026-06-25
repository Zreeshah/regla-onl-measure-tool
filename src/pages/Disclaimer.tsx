
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  const { t } = useLanguage();
  
  const content = {
    title: "Descargo de responsabilidad de Regla",
    intro: "Si necesita más información o tiene alguna pregunta sobre el descargo de responsabilidad de nuestro sitio web, no dude en contactarnos por correo electrónico a admin@regla.onl.",
    mainTitle: "Descargo de responsabilidad de Regla",
    mainText: "Toda la información de este sitio web (https://regla.onl) se publica de buena fe y únicamente con fines informativos generales. Regla no ofrece garantías sobre la integridad, fiabilidad y exactitud de esta información. Cualquier acción que usted realice basándose en la información que encuentre en este sitio web (Regla) es bajo su propia responsabilidad. Regla no se hace responsable de las pérdidas o daños relacionados con el uso de nuestro sitio web.",
    externalLinks: "Desde nuestro sitio web, puede visitar otros sitios web a través de enlaces externos. Si bien nos esforzamos por proporcionar solo enlaces de calidad a sitios web útiles y éticos, no tenemos control sobre el contenido ni la naturaleza de estos sitios. Estos enlaces a otros sitios web no implican una recomendación de todo el contenido que se encuentra en ellos. Los propietarios y el contenido de los sitios pueden cambiar sin previo aviso, incluso antes de que tengamos la oportunidad de eliminar un enlace que ya no funcione. Tenga en cuenta que, al salir de nuestro sitio web, otros sitios pueden tener políticas de privacidad y términos diferentes que escapan a nuestro control. Asegúrese de consultar las políticas de privacidad y los términos de servicio de dichos sitios antes de realizar cualquier transacción o subir información.",
    consentTitle: "Consentimiento",
    consentText: "Al usar nuestro sitio web, usted acepta este descargo de responsabilidad y sus términos.",
    updateTitle: "Actualización",
    updateText: "En caso de que actualicemos, modifiquemos o realicemos algún cambio en este documento, dichos cambios se publicarán aquí de forma destacada."
  };
  
  return (
    <>
      <Helmet>
        <title>{content.title} - Regla.Onl</title>
        <meta name="description" content={content.mainText.substring(0, 160)} />
        <html lang="es" />
        <link rel="canonical" href="https://regla.onl/disclaimer" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-ruler-primary">
              {content.title}
            </h1>
            
            <p className="mb-6">
              {content.intro}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.mainTitle}
            </h2>
            <p className="mb-6">
              {content.mainText}
            </p>
            
            <p className="mb-6">
              {content.externalLinks}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.consentTitle}
            </h2>
            <p className="mb-6">
              {content.consentText}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.updateTitle}
            </h2>
            <p>
              {content.updateText}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
