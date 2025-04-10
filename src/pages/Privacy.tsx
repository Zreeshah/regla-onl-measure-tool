
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  const { t, language } = useLanguage();
  
  // Privacy policy content based on language
  const content = {
    es: {
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
    },
    en: {
      title: "Privacy Policy",
      intro: "At Regla.Onl, we value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our online ruler tool.",
      collection: "Information We Collect",
      collectionDetails: "Our online ruler tool is primarily a utility that works in your browser without requiring accounts or personal information. However, we collect the following data:",
      collectionItems: [
        "Technical information: screen resolution and browser settings to provide accurate measurements",
        "Anonymous usage data: how you interact with our tool to improve our services",
        "Cookies and similar technologies: to remember your calibration preferences"
      ],
      usage: "How We Use Your Information",
      usageDetails: "We use the collected information to:",
      usageItems: [
        "Provide and maintain our measurement tool",
        "Improve, personalize, and expand our services",
        "Analyze how our tool is used",
        "Develop new features and tools"
      ],
      storage: "Data Storage",
      storageDetails: "Your calibration preferences are stored locally in your browser using localStorage, not on our servers. This allows the tool to remember your settings for future visits.",
      rights: "Your Rights",
      rightsDetails: "You have the right to:",
      rightsItems: [
        "Request information about what data we store",
        "Request deletion of any locally stored data (you can clear your browser cache)",
        "Disable cookies through your browser settings"
      ],
      contact: "Contact Us",
      contactDetails: "If you have any questions about this privacy policy, you can contact us at: info@regla.onl"
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <Helmet>
        <title>{currentContent.title} - Regla.Onl</title>
        <meta name="description" content={currentContent.intro} />
        <html lang={language} />
        <link rel="canonical" href="https://regla.onl/privacy" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-6 text-ruler-primary">
              {currentContent.title}
            </div>
            
            <p className="mb-6">
              {currentContent.intro}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.collection}
            </h2>
            <p className="mb-3">
              {currentContent.collectionDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.collectionItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.usage}
            </h2>
            <p className="mb-3">
              {currentContent.usageDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.usageItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.storage}
            </h2>
            <p className="mb-6">
              {currentContent.storageDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.rights}
            </h2>
            <p className="mb-3">
              {currentContent.rightsDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.rightsItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.contact}
            </h2>
            <p>
              {currentContent.contactDetails}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
