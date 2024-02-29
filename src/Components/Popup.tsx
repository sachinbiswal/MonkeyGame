import * as React from 'react';
import { ReactNode } from 'react';
import './Popup.css'; 

interface PopupProps {
  content: ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {content}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

