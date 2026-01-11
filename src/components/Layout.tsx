
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NativeAd from './NativeAd';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
        {/* Native Ad placement in Layout */}
        <div className="container mx-auto px-4 my-6">
          <NativeAd className="rounded-lg" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
