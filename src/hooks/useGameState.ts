import { useState, useEffect } from 'react';
import { type Image } from '../types';
import { images } from '../data/images';

export function useGameState() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetImage, setTargetImage] = useState<Image | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correctAttempts, setCorrectAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    setRandomTargetImage();
  }, []);

  const setRandomTargetImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setTargetImage(images[randomIndex]);
    setIsCorrect(false);
    setIsError(false);
  };

  const handleError = () => {
    setIsError(true);
    setTimeout(() => setIsError(false), 500);
  };

  const handleSuccess = () => {
    setIsCorrect(true);
    setShowConfetti(true);
    setCorrectAttempts((prev) => prev + 1);
    
    setTimeout(() => {
      setShowConfetti(false);
      if (correctAttempts + 1 < 3) {
        const newTargetImage = images.find((img) => img.id !== targetImage?.id);
        setTargetImage(newTargetImage || null);
        setIsCorrect(false);
      } else {
        setGameOver(true);
        setPopupMessage('¡Felicidades! Has completado el juego.');
        setShowPopup(true);
      }
    }, 3000);
  };

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>, image: Image) => {
    e.dataTransfer.setData('text/plain', image.id.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedImageId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const droppedImage = images.find((img) => img.id === droppedImageId);

    if (droppedImage && targetImage && droppedImage.id === targetImage.id) {
      handleSuccess();
    } else {
      handleError();
      setAttempts((prev) => prev + 1);
      if (attempts + 1 >= 3) {
        setGameOver(true);
        setPopupMessage('Lo siento, has agotado tus intentos. ¡Gracias por participar!');
        setShowPopup(true);
      }
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
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
  };
}