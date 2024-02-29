import * as React from 'react'
import { ReactNode } from 'react';
import "./SpeechCloud.css";

interface SpeechCloudProps {
  children: ReactNode;
}

const SpeechCloud: React.FC<SpeechCloudProps> = ({ children }) => {
  return (
    <div className="speech-cloud-with-tail top-right">
      {children}
      <div className="tail"></div>
    </div>
  );
};

export default SpeechCloud;
