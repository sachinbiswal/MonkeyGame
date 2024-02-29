import React, { useState } from 'react';
import './Card.css';

const Card1 = ({ start_alphabet, onClick, side }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <div className={`card ${side} ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className={`card-inner ${clicked ? 'rotate' : ''}`}>
        {clicked && <h2 className="large-text">{start_alphabet}</h2>}
      </div>
    </div>
  );
};

export default Card1;
