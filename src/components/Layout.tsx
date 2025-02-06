import React, { ReactNode, useEffect } from 'react';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { WaveBackground } from './WaveBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVhProperty();
    window.addEventListener('resize', setVhProperty);
    return () => window.removeEventListener('resize', setVhProperty);
  }, []);

  return (
    <div className="min-h-screen h-[calc(var(--vh,1vh)*100)] bg-gradient-to-b from-red-500 to-orange-500 flex flex-col items-center justify-between py-2 md:py-4 relative overflow-hidden">
      <WaveBackground />
      <Logo />
      <main className="w-full max-w-[1200px] px-2 md:px-4 flex-1 flex items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}