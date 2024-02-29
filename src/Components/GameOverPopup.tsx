import * as React from 'react'
import { useEffect } from 'react';

interface GameOverPopupProps {
  matchCounter: number;
  onClose: () => void;
}

const GameOverPopup: React.FC<GameOverPopupProps> = ({ matchCounter, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Game Over!</h2>
        <p>{matchCounter} Bananas</p>
      </div>
    </div>
  );
};

export default GameOverPopup;
