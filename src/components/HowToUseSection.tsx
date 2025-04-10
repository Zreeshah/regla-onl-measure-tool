
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HowToUseSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('howToUse')}</h2>
      <Card className="bg-white h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{t('howToUse')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc pl-5">
            <li>{t('howToUseStep1')}</li>
            <li>{t('howToUseStep2')}</li>
            <li>{t('howToUseStep3')}</li>
            <li>{t('howToUseStep4')}</li>
            <li>Usa esta regla online cm para medir cualquier objeto colocándolo junto a tu pantalla</li>
            <li>Nuestro medidor digital te permite hacer mediciones con regla tamaño real</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default HowToUseSection;
