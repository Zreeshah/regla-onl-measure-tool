"use client";

import React, { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  en: {
    title: "Online Ruler Real Size - Measure on Screen with Precision",
    subtitle: "Digital ruler and online tape measure with precise calibration to measure real objects on your screen",
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
    howToUse: "How to Use the Online Ruler",
    whyPerfect: "Why Our Real Size Ruler is Perfect",
    faq: "Frequently Asked Questions",
    adjustUp: "Adjust up",
    adjustDown: "Adjust down",
    dragInfo: "Drag to move the ruler",
    calibrationInstructions: "Align a known-size object with the ruler",
    creditCardSize: "A standard credit card measures 85.6mm x 53.98mm",
    howToUseStep1: "1. Calibrate your online ruler using one of the available methods",
    howToUseStep2: "2. Select your preferred measurement units (cm, mm, or inches)",
    howToUseStep3: "3. Change the digital ruler orientation as needed",
    howToUseStep4: "4. Move the real size ruler by dragging it across the screen",
    whyPerfectItem1: "Precision: The online ruler is calibrated for your specific screen",
    whyPerfectItem2: "Versatility: The online tape measure works on any device",
    whyPerfectItem3: "Ease of use: Intuitive interface and simple controls for the virtual ruler",
    faqQuestion1: "How do I calibrate the online ruler?",
    faqAnswer1: "You can calibrate the digital ruler by entering your screen size, using a credit card as a reference, or manually adjusting until it matches a known-size object.",
    faqQuestion2: "Can I use this real size ruler on my phone?",
    faqAnswer2: "Yes, our online ruler works perfectly on phones, tablets, and computers.",
    faqQuestion3: "How accurate is the online ruler?",
    faqAnswer3: "Our virtual ruler can be very accurate when properly calibrated, but final precision depends on your screen resolution and correct calibration.",
    learnMore: "Learn More",
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer",
    copyright: "© 2025 Online Ruler. All rights reserved.",
    autoCalibrate: "Auto Calibrate",
    move: "Move",
    deviceInfo: "Device information",
    detectedDevice: "Detected device",
    screenSizeDetected: "Detected screen size",
    diagonal: "diagonal",
    screenSizeNote: "If screen size detection is not accurate, you can adjust it manually in the calibration options.",
    show: "Show",
    hide: "Hide",
    commonRulerSizes: "Most Common Ruler Sizes",
    smallRulers: "Small Rulers",
    largeRulers: "Large Rulers",
    rulerOf: "Ruler of",
    rulerDescription: "Use our real size online ruler to measure objects on your screen with precision. The digital ruler and online tape measure lets you take measurements in centimeters (cm), millimeters (mm), and inches.",
    moreInfo: "More information about virtual rulers",
    measurementTools: "Online measurement tools",
    contentIntro: "The real size online ruler is an essential tool for making precise measurements on your screen. Whether you need to measure in centimeters, millimeters, or inches, our digital ruler offers a practical solution.",
    useCase1: "Graphic and web design",
    useCase2: "Craft measurements",
    useCase3: "Educational use",
    useCase4: "Quick measurements without physical tools",
    useCase1Description: "Digital ruler perfect for designers who need to measure visual elements with precision.",
    useCase2Description: "Online tape measure ideal for exact measurements in craft projects.",
    useCase3Description: "Real size ruler perfect for teaching measurements to students interactively.",
    useCase4Description: "Online cm ruler that allows precise measurements without needing physical tools."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations.en[key as keyof typeof translations.en] || key;
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
