
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdBanner from './AdBanner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-4">
          <AdBanner className="mb-4" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
