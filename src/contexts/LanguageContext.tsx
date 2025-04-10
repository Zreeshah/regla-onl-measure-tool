
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    title: "Regla Online Tamaño Real - Medir en Pantalla con Precisión | Regla.Onl",
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
    useCase4: "Mediciones rápidas sin herramientas físicas"
  },
  en: {
    title: "Online Ruler Real Size - Measure on Screen with Precision | Regla.Onl",
    subtitle: "Digital ruler and online measuring tape with precise calibration to measure real objects on your screen",
    calibrationTitle: "Calibration",
    screenSize: "Screen Size",
    inches: "inches",
    creditCard: "Credit Card",
    manual: "Manual",
    unitTitle: "Units",
    cm: "Centimeters",
    mm: "Millimeters",
    inch: "Inches",
    orientation: "Orientation",
    horizontal: "Horizontal",
    vertical: "Vertical",
    printRuler: "Print Ruler",
    howToUse: "How To Use the Online Ruler",
    whyPerfect: "Why Our Real Size Ruler Is Perfect",
    faq: "FAQ",
    adjustUp: "Adjust up",
    adjustDown: "Adjust down",
    dragInfo: "Drag to move the ruler",
    calibrationInstructions: "Align an object of known size with the ruler",
    creditCardSize: "A standard credit card measures 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibrate your online ruler using one of the available methods",
    howToUseStep2: "2. Select your preferred units of measurement (cm, mm, or inches)",
    howToUseStep3: "3. Change the digital ruler orientation as needed",
    howToUseStep4: "4. Move the real size ruler by dragging it across the screen",
    whyPerfectItem1: "Precision: The online ruler is calibrated for your specific screen",
    whyPerfectItem2: "Versatility: The online measuring tape works on any device",
    whyPerfectItem3: "Ease of Use: Intuitive interface and simple controls of the virtual ruler",
    faqQuestion1: "How do I calibrate the online ruler?",
    faqAnswer1: "You can calibrate the digital ruler by entering your screen size, using a credit card as reference, or manually adjusting until it matches an object of known size.",
    faqQuestion2: "Can I use this real size ruler on my phone?",
    faqAnswer2: "Yes, our online ruler works perfectly on phones, tablets, and computers.",
    faqQuestion3: "How accurate is the online ruler?",
    faqAnswer3: "Our virtual ruler can be very accurate when properly calibrated, but the final precision depends on your screen resolution and proper calibration.",
    learnMore: "Learn More",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    copyright: "© 2024 Online Ruler. All rights reserved.",
    autoCalibrate: "Auto Calibrate",
    move: "Move",
    deviceInfo: "Device Information",
    detectedDevice: "Detected device",
    screenSizeDetected: "Detected screen size",
    diagonal: "diagonal",
    screenSizeNote: "If the screen size detection is inaccurate, you can adjust it manually in the calibration options.",
    show: "Show",
    hide: "Hide",
    commonRulerSizes: "Common Ruler Sizes",
    smallRulers: "Small rulers",
    largeRulers: "Large rulers",
    rulerOf: "Ruler of",
    rulerDescription: "Use our real size online ruler to measure objects on your screen with precision. The digital ruler and online measuring tape allows you to make measurements in centimeters (cm), millimeters (mm), and inches.",
    moreInfo: "More information about virtual rulers",
    measurementTools: "Online measurement tools",
    contentIntro: "The real size online ruler is an essential tool for making precise measurements on your screen. Whether you need to measure in centimeters, millimeters, or inches, our digital ruler provides a practical solution.",
    useCase1: "Graphic and web design",
    useCase2: "Craft measurements",
    useCase3: "Educational use",
    useCase4: "Quick measurements without physical tools"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
