
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import HomeContent from '@/components/HomeContent';

const Index: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Regla Online Tamaño Real - Regla Virtual Precisa</title>
        <meta name="description" content="Usa esta regla online tamaño real para medir objetos físicos directamente en tu pantalla. Fácil de calibrar y precisa para medidas de hasta 20 cm" />
        <meta name="keywords" content="regla online, regla virtual, regla tamaño real, regla en cm, regla en pantalla" />
        <link rel="canonical" href="/" />
      </Helmet>
      <HomeContent />
    </Layout>
  );
};

export default Index;
