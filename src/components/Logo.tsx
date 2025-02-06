import React from 'react';
import { Image } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      <Image size={24} className="text-white" />
      <span className="text-xl md:text-2xl font-bold text-white">ImageGame</span>
    </div>
  );
};