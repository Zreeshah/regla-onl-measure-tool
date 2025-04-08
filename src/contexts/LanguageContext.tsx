
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    title: "Regla Online - Medición Precisa en Tu Pantalla",
    subtitle: "La herramienta de medición más precisa para tu pantalla",
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
    howToUse: "Cómo Usar",
    whyPerfect: "Por Qué Es Perfecta",
    faq: "Preguntas Frecuentes",
    adjustUp: "Ajustar hacia arriba",
    adjustDown: "Ajustar hacia abajo",
    dragInfo: "Arrastra para mover la regla",
    calibrationInstructions: "Alinea un objeto de tamaño conocido con la regla",
    creditCardSize: "Una tarjeta de crédito estándar mide 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibra tu regla usando uno de los métodos disponibles",
    howToUseStep2: "2. Selecciona las unidades de medida preferidas",
    howToUseStep3: "3. Cambia la orientación según lo necesites",
    howToUseStep4: "4. Mueve la regla arrastrándola por la pantalla",
    whyPerfectItem1: "Precisión: Calibrada para tu pantalla específica",
    whyPerfectItem2: "Versatilidad: Funciona en cualquier dispositivo",
    whyPerfectItem3: "Facilidad: Interfaz intuitiva y fácil de usar",
    faqQuestion1: "¿Cómo calibro la regla?",
    faqAnswer1: "Puedes calibrar la regla ingresando el tamaño de tu pantalla, usando una tarjeta de crédito como referencia, o ajustando manualmente hasta que coincida con un objeto de tamaño conocido.",
    faqQuestion2: "¿Puedo usar esto en mi teléfono?",
    faqAnswer2: "Sí, nuestra regla funciona perfectamente en teléfonos, tablets y computadoras.",
    faqQuestion3: "¿Qué tan precisa es la regla online?",
    faqAnswer3: "Nuestra regla puede ser muy precisa cuando está correctamente calibrada, pero la precisión final depende de la resolución de tu pantalla y la correcta calibración.",
    learnMore: "Aprender Más",
    privacy: "Política de Privacidad",
    disclaimer: "Aviso Legal",
    copyright: "© 2024 Regla Online. Todos los derechos reservados.",
    autoCalibrate: "Calibración Automática",
    move: "Mover",
  },
  en: {
    title: "Online Ruler - Precise Measurement on Your Screen",
    subtitle: "The most accurate measurement tool for your screen",
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
    howToUse: "How To Use",
    whyPerfect: "Why It's Perfect",
    faq: "FAQ",
    adjustUp: "Adjust up",
    adjustDown: "Adjust down",
    dragInfo: "Drag to move the ruler",
    calibrationInstructions: "Align an object of known size with the ruler",
    creditCardSize: "A standard credit card measures 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibrate your ruler using one of the available methods",
    howToUseStep2: "2. Select your preferred units of measurement",
    howToUseStep3: "3. Change the orientation as needed",
    howToUseStep4: "4. Move the ruler by dragging it across the screen",
    whyPerfectItem1: "Precision: Calibrated for your specific screen",
    whyPerfectItem2: "Versatility: Works on any device",
    whyPerfectItem3: "Ease of Use: Intuitive interface and simple controls",
    faqQuestion1: "How do I calibrate the ruler?",
    faqAnswer1: "You can calibrate the ruler by entering your screen size, using a credit card as reference, or manually adjusting until it matches an object of known size.",
    faqQuestion2: "Can I use this on my phone?",
    faqAnswer2: "Yes, our ruler works perfectly on phones, tablets, and computers.",
    faqQuestion3: "How accurate is the online ruler?",
    faqAnswer3: "Our ruler can be very accurate when properly calibrated, but the final precision depends on your screen resolution and proper calibration.",
    learnMore: "Learn More",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    copyright: "© 2024 Online Ruler. All rights reserved.",
    autoCalibrate: "Auto Calibrate",
    move: "Move",
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
