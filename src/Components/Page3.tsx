import * as React from 'react';
import SpeechCloud from './SpeechCloud';
import { IoArrowBackCircle } from "react-icons/io5";

const MonkeyPic = require("../assets/MonkeyPic.png");

interface Page3Props {
  onYesClick: () => void;
  onBack: () => void;
}
const Page3: React.FC<Page3Props> = ({ onYesClick, onBack }) => {
  return (
    <div className="page game-page">
      <img className="additional-image" src={MonkeyPic} alt="MonkeyPic" />
      <div className="back-button top-left" onClick={onBack}>
        <IoArrowBackCircle size={60} /> 
      </div>
      <SpeechCloud>
        <div className="info-message">Can you help<br/>me get some?</div>
      </SpeechCloud>
      <div className="next-button bottom-right" onClick={onYesClick}>YES</div>
    </div>
  );
};

export default Page3;
