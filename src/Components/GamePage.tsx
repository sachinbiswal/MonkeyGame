import * as React from 'react';
import SpeechCloud from './SpeechCloud';
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const MonkeyPic = require("../assets/MonkeyPic.png");

interface GamePageProps {
  onNext: () => void;
  onBack: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ onNext, onBack }) => {
  return (
    <div className="page game-page">
      <img className="additional-image" src={MonkeyPic} alt="MonkeyPic" />
      <div className="back-button top-left" onClick={onBack}>
        <IoArrowBackCircle size={60} /> 
      </div>
      <SpeechCloud>
        <div className="info-message">Hi, I am Mizo!<br/> And I love bananas</div>
      </SpeechCloud>
      <div className="settings-icon bottom-left">
        <IoMdSettings />
      </div>
      <div className="star-icon bottom-left">
        <FaStar />
</div>


      <div className="next-button bottom-right" onClick={onNext}>NEXT</div>
    </div>
  );
};

export default GamePage;
