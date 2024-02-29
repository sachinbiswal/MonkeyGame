import * as React from 'react';
import SpeechCloud from './SpeechCloud';
import { IoMdSettings } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const MonkeyPic = require("../assets/MonkeyPic.png");

interface StartPageProps {
  onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  return (
    <div className="page game-page">
      <img className="additional-image" src={MonkeyPic} alt="MonkeyPic" />
      <SpeechCloud>
        <div className="info-message">Welcome Kiddo!</div>
      </SpeechCloud>
      <div className="settings-icon bottom-left">
  <IoMdSettings />
</div>
<div className="star-icon bottom-left">
  <FaStar />
</div>



      <div className="next-button bottom-right" onClick={onStart}>START</div>
    </div>
  );
};

export default StartPage;
