import React from 'react';
import Confetti from 'react-confetti';
import { ImageCarousel } from './ImageCarousel';
import { GameStats } from './GameStats';
import { DropZone } from './DropZone';
import { GamePopup } from './GamePopup';
import { useGameState } from '../hooks/useGameState';
import { images } from '../data/images';

export function GameContainer() {
  const {
    currentIndex,
    targetImage,
    isCorrect,
    isError,
    showConfetti,
    attempts,
    correctAttempts,
    gameOver,
    showPopup,
    popupMessage,
    handleDrop,
    handleDragOver,
    handleDragStart,
    prevSlide,
    nextSlide,
    closePopup
  } = useGameState();

  return (
    <>
      <div className="w-full h-full bg-white bg-opacity-90 rounded-lg shadow-2xl p-2 sm:p-4 relative z-10 backdrop-filter backdrop-blur-lg flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-2 text-gray-800">
          Carrusel de Imágenes
        </h1>
        
        <GameStats correctAttempts={correctAttempts} attempts={attempts} />
        
        <p className="text-center text-sm md:text-base font-semibold text-gray-800 mb-2">
          {isCorrect
            ? '¡Correcto! Has colocado la imagen correcta.'
            : 'Arrastra la imagen correcta al cuadro de la izquierda.'}
        </p>

        <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0 overflow-hidden">
          <div className="flex-1 min-h-[150px] lg:min-h-0">
            <DropZone
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              isCorrect={isCorrect}
              isError={isError}
              targetImage={targetImage}
            />
          </div>
          
          <div className="flex-1 min-h-[150px] lg:min-h-0">
            <ImageCarousel
              images={images}
              currentIndex={currentIndex}
              onPrev={prevSlide}
              onNext={nextSlide}
              onDragStart={handleDragStart}
              gameOver={gameOver}
            />
          </div>
        </div>

        {showPopup && (
          <GamePopup
            message={popupMessage}
            onClose={closePopup}
            gameOver={gameOver}
          />
        )}
      </div>
      
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 50
          }}
          numberOfPieces={200}
          recycle={false}
        />
      )}
    </>
  );
}