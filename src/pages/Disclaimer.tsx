
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet';

const Disclaimer = () => {
  const { t, language } = useLanguage();
  
  // Disclaimer content based on language
  const content = {
    es: {
      title: "Aviso Legal",
      accuracy: "Precisión de las Medidas",
      accuracyText: "Nuestra herramienta de regla en línea está diseñada para proporcionar medidas lo más precisas posible. Sin embargo, la precisión puede verse afectada por varios factores:",
      accuracyItems: [
        "La resolución y tamaño de su pantalla",
        "La precisión de la información de calibración proporcionada",
        "Las configuraciones específicas del navegador y del sistema operativo",
        "Variaciones en la fabricación de dispositivos"
      ],
      disclaimer: "Descargo de Responsabilidad",
      disclaimerText: "Regla.Onl proporciona esta herramienta 'tal cual', sin garantías de ningún tipo. Aunque nos esforzamos por ofrecer mediciones precisas, no podemos garantizar la exactitud absoluta para todas las pantallas y dispositivos.",
      disclaimerItems: [
        "No somos responsables de cualquier error o inexactitud en las mediciones",
        "No asumimos responsabilidad por proyectos o decisiones basadas en las mediciones realizadas con nuestra herramienta",
        "Para mediciones que requieren precisión absoluta, recomendamos utilizar instrumentos de medición físicos calibrados"
      ],
      usage: "Uso Aceptable",
      usageText: "Al utilizar nuestra herramienta de regla en línea, usted acepta:",
      usageItems: [
        "Utilizarla solo para fines legales y apropiados",
        "No intentar manipular, descompilar o modificar la herramienta",
        "No utilizar la herramienta de manera que pueda dañar, sobrecargar o comprometer nuestros sistemas"
      ],
      changes: "Cambios en el Servicio",
      changesText: "Nos reservamos el derecho de modificar, suspender o interrumpir cualquier aspecto de nuestra herramienta en cualquier momento sin previo aviso.",
      contact: "Contacto",
      contactText: "Si tiene alguna pregunta sobre este aviso legal, puede contactarnos en: info@regla.onl"
    },
    en: {
      title: "Disclaimer",
      accuracy: "Measurement Accuracy",
      accuracyText: "Our online ruler tool is designed to provide measurements that are as accurate as possible. However, accuracy may be affected by several factors:",
      accuracyItems: [
        "Your screen's resolution and size",
        "The accuracy of the calibration information provided",
        "Specific browser and operating system settings",
        "Variations in device manufacturing"
      ],
      disclaimer: "Disclaimer of Liability",
      disclaimerText: "Regla.Onl provides this tool 'as is', without warranties of any kind. While we strive to offer accurate measurements, we cannot guarantee absolute precision for all screens and devices.",
      disclaimerItems: [
        "We are not responsible for any errors or inaccuracies in measurements",
        "We assume no liability for projects or decisions based on measurements made with our tool",
        "For measurements requiring absolute precision, we recommend using calibrated physical measuring instruments"
      ],
      usage: "Acceptable Use",
      usageText: "By using our online ruler tool, you agree to:",
      usageItems: [
        "Use it only for lawful and appropriate purposes",
        "Not attempt to manipulate, decompile, or modify the tool",
        "Not use the tool in a way that may damage, overload, or compromise our systems"
      ],
      changes: "Changes to Service",
      changesText: "We reserve the right to modify, suspend, or discontinue any aspect of our tool at any time without prior notice.",
      contact: "Contact",
      contactText: "If you have any questions about this disclaimer, you can contact us at: info@regla.onl"
    }
  };
  
  const currentContent = language === 'es' ? content.es : content.en;
  
  return (
    <>
      <Helmet>
        <title>{currentContent.title} - Regla.Onl</title>
        <meta name="description" content={currentContent.disclaimerText} />
        <html lang={language} />
        <link rel="canonical" href="https://regla.onl/disclaimer" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-6 text-ruler-primary">
              {currentContent.title}
            </div>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.accuracy}
            </h2>
            <p className="mb-3">
              {currentContent.accuracyText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.accuracyItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.disclaimer}
            </h2>
            <p className="mb-3">
              {currentContent.disclaimerText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.disclaimerItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.usage}
            </h2>
            <p className="mb-3">
              {currentContent.usageText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {currentContent.usageItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.changes}
            </h2>
            <p className="mb-6">
              {currentContent.changesText}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {currentContent.contact}
            </h2>
            <p>
              {currentContent.contactText}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
