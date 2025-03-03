import React from 'react';
import './Header.css';
import logo from '../assets/logo-removebg-preview.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="OOJAM Logo" className="logo-image" />
        <h1 className="logo-text">OOJAM CONSTRUCTIONS</h1>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#service">Services</a>
        <a href="#why-oojam">About Us</a>
        <a href="#how-it-works">Workflow</a>
        <a href="#projects">Projects</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
