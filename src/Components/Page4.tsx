import { IoArrowBackCircle } from "react-icons/io5";
import * as React from 'react';
const info = require("../assets/info.png");

interface Page4Props {
  onBack: () => void;
  onPlay: () => void;
}

const Page4: React.FC<Page4Props> = ({ onBack, onPlay }) => {
  return (
    <div className="page">
      <img className="additional-image" src={info} alt="pics" />
      <div className="back-button top-left" onClick={onBack}>
        <IoArrowBackCircle size={60} /> 
      </div>
      
      <div className="next-button bottom-right" onClick={onPlay}>PLAY</div>
    </div>
  );
};

export default Page4;
