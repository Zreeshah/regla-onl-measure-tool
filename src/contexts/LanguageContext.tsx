
import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  es: {
    title: "Regla Online Tamaño Real - Medir en Pantalla con Precisión",
    subtitle: "Regla digital y cinta métrica online con calibración precisa para medir objetos reales en tu pantalla",
    calibrationTitle: "Calibración",
    screenSize: "Tamaño de Pantalla",
    inches: "pulgadas",
    creditCard: "Tarjeta de Crédito",
    manual: "Manual",
    unitTitle: "Unidades",
    cm: "Centímetros",
    mm: "Milímetros",
    inch: "Pulgadas",
    orientation: "Orientación",
    horizontal: "Horizontal",
    vertical: "Vertical",
    printRuler: "Imprimir Regla",
    howToUse: "Cómo Usar la Regla Online",
    whyPerfect: "Por Qué Nuestra Regla Tamaño Real es Perfecta",
    faq: "Preguntas Frecuentes",
    adjustUp: "Ajustar hacia arriba",
    adjustDown: "Ajustar hacia abajo",
    dragInfo: "Arrastra para mover la regla",
    calibrationInstructions: "Alinea un objeto de tamaño conocido con la regla",
    creditCardSize: "Una tarjeta de crédito estándar mide 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibra tu regla online usando uno de los métodos disponibles",
    howToUseStep2: "2. Selecciona las unidades de medida preferidas (cm, mm o pulgadas)",
    howToUseStep3: "3. Cambia la orientación de la regla digital según lo necesites",
    howToUseStep4: "4. Mueve la regla tamaño real arrastrándola por la pantalla",
    whyPerfectItem1: "Precisión: La regla online está calibrada para tu pantalla específica",
    whyPerfectItem2: "Versatilidad: La cinta métrica online funciona en cualquier dispositivo",
    whyPerfectItem3: "Facilidad: Interfaz intuitiva y controles simples de la regla virtual",
    faqQuestion1: "¿Cómo calibro la regla online?",
    faqAnswer1: "Puedes calibrar la regla digital ingresando el tamaño de tu pantalla, usando una tarjeta de crédito como referencia, o ajustando manualmente hasta que coincida con un objeto de tamaño conocido.",
    faqQuestion2: "¿Puedo usar esta regla tamaño real en mi teléfono?",
    faqAnswer2: "Sí, nuestra regla online funciona perfectamente en teléfonos, tablets y computadoras.",
    faqQuestion3: "¿Qué tan precisa es la regla online?",
    faqAnswer3: "Nuestra regla virtual puede ser muy precisa cuando está correctamente calibrada, pero la precisión final depende de la resolución de tu pantalla y la correcta calibración.",
    learnMore: "Aprender Más",
    privacy: "Política de Privacidad",
    disclaimer: "Aviso Legal",
    copyright: "© 2024 Regla Online. Todos los derechos reservados.",
    autoCalibrate: "Calibración Automática",
    move: "Mover",
    deviceInfo: "Información del dispositivo",
    detectedDevice: "Dispositivo detectado",
    screenSizeDetected: "Tamaño de pantalla detectado",
    diagonal: "diagonal",
    screenSizeNote: "Si la detección del tamaño de pantalla no es precisa, puedes ajustarla manualmente en las opciones de calibración.",
    show: "Mostrar",
    hide: "Ocultar",
    commonRulerSizes: "Tamaños de Reglas Más Habituales",
    smallRulers: "Reglas pequeñas",
    largeRulers: "Reglas grandes",
    rulerOf: "Regla de",
    rulerDescription: "Usa nuestra regla online tamaño real para medir objetos en tu pantalla con precisión. La regla digital y cinta métrica online te permite hacer mediciones en centímetros (cm), milímetros (mm) y pulgadas.",
    moreInfo: "Más información sobre reglas virtuales",
    measurementTools: "Herramientas de medición online",
    contentIntro: "La regla online tamaño real es una herramienta esencial para hacer mediciones precisas en tu pantalla. Ya sea que necesites medir en centímetros, milímetros o pulgadas, nuestra regla digital te ofrece una solución práctica.",
    useCase1: "Diseño gráfico y web",
    useCase2: "Mediciones para manualidades",
    useCase3: "Uso educativo",
    useCase4: "Mediciones rápidas sin herramientas físicas",
    useCase1Description: "Regla digital perfecta para diseñadores que necesitan medir elementos visuales con precisión.",
    useCase2Description: "Cinta métrica online ideal para medir con exactitud en proyectos de manualidades.",
    useCase3Description: "Regla tamaño real perfecta para enseñar mediciones a estudiantes de forma interactiva.",
    useCase4Description: "Regla online cm que permite realizar mediciones precisas sin necesidad de herramientas físicas."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations.es[key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
