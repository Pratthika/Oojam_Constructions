import React from 'react';
import './HeroSection.css';
import heroVideo from '../assets/673edfb2901f44a30fe1dec7.mp4';  // Import the video file

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to OOJAM Construction</h1>
        <p>Your dream home, built with precision and care.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="video-container">
        <video autoPlay muted loop className="hero-video">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default HeroSection;
