
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const { t } = useLanguage();
  
  // Privacy policy content in Spanish only
  const content = {
    title: "Política de Privacidad",
    intro: "En Regla.Onl, valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información cuando utiliza nuestra herramienta de regla online.",
    collection: "Información que recopilamos",
    collectionDetails: "Nuestra herramienta de regla online es principalmente una utilidad que funciona en su navegador sin necesidad de crear cuentas o proporcionar información personal. Sin embargo, recopilamos los siguientes datos:",
    collectionItems: [
      "Información técnica: resolución de pantalla y configuración del navegador para proporcionar medidas precisas",
      "Datos de uso anónimos: cómo interactúa con nuestra herramienta para mejorar nuestros servicios",
      "Cookies y tecnologías similares: para recordar sus preferencias de calibración"
    ],
    usage: "Cómo utilizamos su información",
    usageDetails: "Utilizamos la información recopilada para:",
    usageItems: [
      "Proporcionar y mantener nuestra herramienta de medición",
      "Mejorar, personalizar y ampliar nuestros servicios",
      "Analizar cómo se utiliza nuestra herramienta",
      "Desarrollar nuevas funciones y herramientas"
    ],
    storage: "Almacenamiento de datos",
    storageDetails: "Sus preferencias de calibración se almacenan localmente en su navegador mediante localStorage, no en nuestros servidores. Esto permite que la herramienta recuerde sus ajustes para futuras visitas.",
    rights: "Sus derechos",
    rightsDetails: "Usted tiene derecho a:",
    rightsItems: [
      "Solicitar información sobre los datos que almacenamos",
      "Solicitar la eliminación de cualquier dato almacenado localmente (puede borrar el caché de su navegador)",
      "Desactivar las cookies a través de la configuración de su navegador"
    ],
    contact: "Contáctenos",
    contactDetails: "Si tiene alguna pregunta sobre esta política de privacidad, puede contactarnos a través de: info@regla.onl"
  };
  
  return (
    <>
      <Helmet>
        <title>{content.title} - Regla.Onl</title>
        <meta name="description" content={content.intro} />
        <html lang="es" />
        <link rel="canonical" href="https://regla.onl/privacy" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-6 text-ruler-primary">
              {content.title}
            </div>
            
            <p className="mb-6">
              {content.intro}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.collection}
            </h2>
            <p className="mb-3">
              {content.collectionDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.collectionItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.usage}
            </h2>
            <p className="mb-3">
              {content.usageDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.usageItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.storage}
            </h2>
            <p className="mb-6">
              {content.storageDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.rights}
            </h2>
            <p className="mb-3">
              {content.rightsDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.rightsItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.contact}
            </h2>
            <p>
              {content.contactDetails}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
