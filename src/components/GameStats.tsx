import React from 'react';

interface GameStatsProps {
  correctAttempts: number;
  attempts: number;
}

export const GameStats = ({ correctAttempts, attempts }: GameStatsProps) => {
  return (
    <div className="flex justify-between items-center mb-2 sm:mb-6 px-4">
      <div className="text-base sm:text-xl font-semibold text-gray-700 transform transition-all hover:scale-110">
        <span className="text-green-600 inline-block animate-bounce">{correctAttempts}/3</span>
        <p className="text-xs sm:text-sm">Correctos</p>
      </div>
      <div className="text-base sm:text-xl font-semibold text-gray-700 transform transition-all hover:scale-110">
        <span className="text-red-600 inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>{3 - attempts}</span>
        <p className="text-xs sm:text-sm">Restantes</p>
      </div>
    </div>
  );
};