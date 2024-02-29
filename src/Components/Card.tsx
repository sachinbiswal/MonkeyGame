import * as React from 'react';
import { useState } from 'react';
import './Card.css';

interface CardProps {
  image: string;
  onClick: () => void;
  side: string;
}

const Card: React.FC<CardProps> = ({ image, onClick, side }) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <div className={`card ${side} ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className={`card-inner ${clicked ? 'rotate' : ''}`}>
        {clicked && <img src={image} alt="fruit" />}
      </div>
    </div>
  );
};

export default Card;
