import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full text-center py-1 md:py-2 text-white relative z-10">
      <p className="text-xs md:text-sm opacity-80">© {new Date().getFullYear()} ImageGame. Desarrollado con ❤️ por StackBlitz</p>
    </footer>
  );
};