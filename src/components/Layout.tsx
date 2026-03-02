
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
      <div className="container">
        <AdBanner className="my-2" />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
