
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  const { t } = useLanguage();
  
  // Privacy policy content in Spanish only
  const content = {
    title: "Política de privacidad",
    intro: "Regla (\"nosotros\" o \"nuestro\") opera el sitio web https://Regla.com (el \"Servicio\"). Esta página le informa sobre nuestras políticas respecto a la recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y las opciones que tiene asociadas con esos datos.",
    intro2: "Utilizamos sus datos para proporcionar y mejorar el Servicio. Al usar el Servicio, usted acepta la recopilación y el uso de información de acuerdo con esta política. A menos que se establezca lo contrario en esta Política de Privacidad, los términos utilizados en esta Política tienen los mismos significados que en nuestros Términos y Condiciones, accesibles desde https://Regla.onl",
    
    collection: "Recopilación y uso de información",
    collectionDetails: "Recopilamos diferentes tipos de información para varios fines con el fin de proporcionar y mejorar nuestro Servicio.",
    
    dataTypes: "Tipos de datos recopilados",
    personalData: "Datos personales",
    personalDataDetails: "Mientras utiliza nuestro Servicio, podemos solicitarle que nos proporcione información personal identificable que pueda utilizarse para contactarlo o identificarlo (\"Datos Personales\"). La información personal identificable puede incluir, entre otras:",
    personalDataItems: [
      "Dirección de correo electrónico",
      "Cookies y Datos de Uso"
    ],
    
    usageData: "Datos de uso",
    usageDataDetails: "También podemos recopilar información sobre cómo se accede y utiliza el Servicio (\"Datos de Uso\"). Esto puede incluir:",
    usageDataItems: [
      "Dirección IP",
      "Tipo y versión del navegador",
      "Páginas visitadas",
      "Fecha y hora de la visita",
      "Tiempo dedicado en páginas",
      "Identificadores únicos de dispositivo",
      "Datos de diagnóstico"
    ],
    
    cookies: "Datos de seguimiento y cookies",
    cookiesDetails: "Utilizamos cookies y tecnologías similares para rastrear la actividad en nuestro Servicio y mantener cierta información. Puede configurar su navegador para rechazar cookies. Si no acepta cookies, es posible que no pueda utilizar algunas funciones del Servicio.",
    cookiesExamples: "Ejemplos de cookies:",
    cookiesItems: [
      "Cookies de Sesión: para operar el Servicio.",
      "Cookies de Preferencias: para recordar ajustes.",
      "Cookies de Seguridad: para funciones de seguridad."
    ],
    
    usage: "Uso de datos",
    usageDetails: "Regla utiliza los datos recopilados para:",
    usageItems: [
      "Proporcionar y mantener el Servicio",
      "Notificar cambios en el Servicio",
      "Permitir funciones interactivas",
      "Proporcionar soporte al cliente",
      "Analizar el rendimiento del Servicio",
      "Monitorear el uso",
      "Detectar y prevenir problemas técnicos"
    ],
    
    transfer: "Transferencia de datos",
    transferDetails: "Sus datos pueden ser transferidos y almacenados en sistemas fuera de su región, donde las leyes de protección de datos pueden variar. Si proporciona información desde fuera de Estados Unidos, acepta la transferencia y procesamiento de los datos en Estados Unidos. Regla garantiza seguridad razonable y que no transferirá Datos Personales sin controles adecuados.",
    
    disclosure: "Divulgación de datos",
    legalRequirements: "Requisitos legales",
    legalDetails: "Regla puede divulgar Datos Personales para:",
    legalItems: [
      "Cumplir con obligaciones legales",
      "Proteger propiedad o derechos de Regla",
      "Investigar uso indebido",
      "Proteger la seguridad de los usuarios",
      "Defenderse contra responsabilidades legales"
    ],
    
    security: "Seguridad de los datos",
    securityDetails: "La seguridad es importante para nosotros. Sin embargo, ningún sistema es 100% seguro. Nos esforzamos por utilizar medidas aceptables comercialmente para proteger sus datos.",
    
    providers: "Proveedores de servicios",
    providersDetails: "Podemos emplear terceros para:",
    providersItems: [
      "Facilitar el Servicio",
      "Proporcionarlo en nuestro nombre",
      "Realizar análisis relacionados al Servicio"
    ],
    providersNote: "Estos terceros solo tienen acceso a Datos Personales para realizar estas tareas y no pueden usarlos para otros fines.",
    
    links: "Enlaces a otros sitios",
    linksDetails: "Nuestro Servicio puede contener enlaces externos. No somos responsables de políticas de privacidad o contenido de sitios externos.",
    
    ads: "Anuncio",
    adsDetails: "Nuestro sitio puede mostrar anuncios de terceros. Al aceptar nuestra política, acepta que podemos mostrar anuncios basados en sus intereses.",
    
    children: "Privacidad de los niños",
    childrenDetails: "Nuestro Servicio no está dirigido a menores de 18 años. No recopilamos conscientemente datos de menores. Si se recopila información sin consentimiento parental, será eliminada.",
    
    changes: "Cambios en esta Política de Privacidad",
    changesDetails: "Podemos actualizar esta política. Se le notificará antes de que los cambios entren en vigor. La fecha de vigencia se actualizará en esta página. Se recomienda revisarla periódicamente.",
    
    contact: "Contacta con nosotros",
    contactDetails: "Si tiene preguntas sobre esta Política de Privacidad: Correo: info@Regla.onl"
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
            
            <p className="mb-4">
              {content.intro}
            </p>
            <p className="mb-6">
              {content.intro2}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.collection}
            </h2>
            <p className="mb-6">
              {content.collectionDetails}
            </p>
            
            <h3 className="text-lg font-semibold mb-3 text-ruler-primary">
              {content.dataTypes}
            </h3>
            
            <h4 className="text-base font-semibold mb-2 text-ruler-primary">
              {content.personalData}
            </h4>
            <p className="mb-3">
              {content.personalDataDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.personalDataItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h4 className="text-base font-semibold mb-2 text-ruler-primary">
              {content.usageData}
            </h4>
            <p className="mb-3">
              {content.usageDataDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.usageDataItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h4 className="text-base font-semibold mb-2 text-ruler-primary">
              {content.cookies}
            </h4>
            <p className="mb-3">
              {content.cookiesDetails}
            </p>
            <p className="mb-2 font-medium">
              {content.cookiesExamples}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.cookiesItems.map((item, index) => (
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
              {content.transfer}
            </h2>
            <p className="mb-6">
              {content.transferDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.disclosure}
            </h2>
            <h3 className="text-lg font-semibold mb-2 text-ruler-primary">
              {content.legalRequirements}
            </h3>
            <p className="mb-3">
              {content.legalDetails}
            </p>
            <ul className="list-disc pl-6 mb-6">
              {content.legalItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.security}
            </h2>
            <p className="mb-6">
              {content.securityDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.providers}
            </h2>
            <p className="mb-3">
              {content.providersDetails}
            </p>
            <ul className="list-disc pl-6 mb-3">
              {content.providersItems.map((item, index) => (
                <li key={index} className="mb-1">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mb-6">
              {content.providersNote}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.links}
            </h2>
            <p className="mb-6">
              {content.linksDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.ads}
            </h2>
            <p className="mb-6">
              {content.adsDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.children}
            </h2>
            <p className="mb-6">
              {content.childrenDetails}
            </p>
            
            <h2 className="text-xl font-semibold mb-3 text-ruler-primary">
              {content.changes}
            </h2>
            <p className="mb-6">
              {content.changesDetails}
            </p>
            
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
