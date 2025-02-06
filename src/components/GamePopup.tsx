import React from 'react';
import { X } from 'lucide-react';

interface GamePopupProps {
  message: string;
  onClose: () => void;
  gameOver: boolean;
}

export const GamePopup = ({ message, onClose, gameOver }: GamePopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md">
        <button
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          <X size={24} />
        </button>
        <p className="text-2xl font-semibold mb-4 text-gray-800">{message}</p>
        {gameOver && (
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-200 hover:from-red-600 hover:to-orange-600 transform hover:scale-105"
          >
            Jugar de nuevo
          </button>
        )}
      </div>
    </div>
  );
};