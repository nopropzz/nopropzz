
import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pb-24">
      <Navigation />
      <CartDrawer />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
