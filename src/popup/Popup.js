import React, { useState } from 'react';
import './Popup.css'; // Create this CSS file for styling
import FormComponent from './Popup_content';
const Popup = ({ isOpen, onClose, content }) => {
  return (
    isOpen && (
        <div className='container'>
      <div className="popup-overlay">
        <div className="popup">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="popup-content">{<FormComponent/>}</div>
        </div>
      </div>
      </div>
    )
  );
};

export default Popup;
