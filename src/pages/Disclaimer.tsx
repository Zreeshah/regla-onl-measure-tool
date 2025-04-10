
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Disclaimer = () => {
  const { t } = useLanguage();
  
  // Content for Spanish only since we removed English support
  const content = {
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
  };
  
  return (
    <>
      <Helmet>
        <title>{content.title} - Regla.Onl</title>
        <meta name="description" content={content.disclaimerText} />
        <html lang="es" />
        <link rel="canonical" href="https://regla.onl/disclaimer" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
        <main className="container flex-1 py-8">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-6 text-ruler-primary">
              {content.title}
            </div>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.accuracy}
            </h2>
            <p className="mb-3">
              {content.accuracyText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.accuracyItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.disclaimer}
            </h2>
            <p className="mb-3">
              {content.disclaimerText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.disclaimerItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.usage}
            </h2>
            <p className="mb-3">
              {content.usageText}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.usageItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.changes}
            </h2>
            <p className="mb-6">
              {content.changesText}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.contact}
            </h2>
            <p>
              {content.contactText}
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;
