import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type Image } from '../types';

interface ImageCarouselProps {
  images: Image[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onDragStart: (e: React.DragEvent<HTMLImageElement>, image: Image) => void;
  gameOver: boolean;
}

export const ImageCarousel = ({
  images,
  currentIndex,
  onPrev,
  onNext,
  onDragStart,
  gameOver,
}: ImageCarouselProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl h-full">
      <div
        className="flex h-full transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover flex-shrink-0"
            draggable={!gameOver}
            onDragStart={(e) => onDragStart(e, image)}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between items-center p-4 bg-gradient-to-t from-black/50 to-transparent">
        <button
          onClick={onPrev}
          className="bg-white/80 p-2 rounded-full transition-colors duration-200 hover:bg-white"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button
          onClick={onNext}
          className="bg-white/80 p-2 rounded-full transition-colors duration-200 hover:bg-white"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
      </div>
    </div>
  );
}