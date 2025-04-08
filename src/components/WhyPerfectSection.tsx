
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhyPerfectSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-ruler-primary">{t('whyPerfect')}</h2>
      <Card className="bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{t('whyPerfect')}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc pl-5">
            <li>{t('whyPerfectItem1')}</li>
            <li>{t('whyPerfectItem2')}</li>
            <li>{t('whyPerfectItem3')}</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default WhyPerfectSection;
