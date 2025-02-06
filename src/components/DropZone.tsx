import React from 'react';
import { type Image } from '../types';

interface DropZoneProps {
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  isCorrect: boolean;
  targetImage: Image | null;
  isError: boolean;
}

export const DropZone = ({ onDragOver, onDrop, isCorrect, targetImage, isError }: DropZoneProps) => {
  return (
    <div
      className={`w-full h-full border-4 border-dashed rounded-lg flex items-center justify-center overflow-hidden transition-colors duration-300 ${
        isError ? 'border-red-500 shake' : isCorrect ? 'border-green-500' : 'border-gray-300'
      }`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {targetImage && (
        <div className={`w-full h-full image-transition ${
          isCorrect ? 'image-transition-enter-active celebrate' : 'image-transition-enter'
        }`}>
          <img
            src={targetImage.src}
            alt={targetImage.alt}
            className={`w-full h-full object-cover rounded-lg transition-all duration-500 ${
              !isCorrect ? 'filter grayscale' : 'transform scale-105'
            }`}
          />
        </div>
      )}
    </div>
  );
}