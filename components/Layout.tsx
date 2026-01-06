import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { VisualEditorProvider } from './VisualEditor';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <VisualEditorProvider>
      <div className="min-h-screen flex flex-col pb-24">
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </VisualEditorProvider>
  );
};

export default Layout;