import React from 'react';
import { FaCheckCircle, FaSearch, FaShieldAlt } from 'react-icons/fa';  // Import icons
import './BuildSection.css';

function BuildSection() {
  return (
    <section className="build-section">
      <div className="build-content">
        <h2>Build Your Dream Home with <span>OOJAM CONSTRUCTIONS</span></h2>
        <div className="features">
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span>340+ Quality checks</span>
          </div>
          <div className="feature-item">
            <FaSearch className="feature-icon" />
            <span>100% Transparency</span>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="feature-icon" />
            <span>Zero Delays</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildSection;
