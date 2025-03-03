import React from 'react';
import './WhatsAppButton.css'; // Import the CSS for styling
import wa from '../assets/Whatsapp_Icon_Whatsapp_Logo_PNG_Images___Whatsapp_Icon__Whatsapp__Whatsapp_Logo_PNG_Transparent_Background_-_Pngtree-removebg-preview.png';

const WhatsAppButton = () => {
  const whatsappNumber = '+918124947406'; // Your WhatsApp number
  const whatsappURL = `https://wa.me/${whatsappNumber.replace('+', '')}`; // Generate WhatsApp link

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src={wa} // Replace with your WhatsApp icon file path
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
