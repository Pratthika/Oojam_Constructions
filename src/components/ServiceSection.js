import React from 'react';
import './ServiceSection.css';
import myImage from '../assets/download (2).jpg';
import home from '../assets/download (3).jpg';

function ServiceSection() {
  return (
    <section className="service-section">
      <h2>Our Services</h2>
      <div className="service-container">
        {/* What We Do? */}
        <div className="service-box">
        <h3>What We Do?</h3>
          <img 
            src={myImage}
            alt="What We Do" 
            className="service-image" 
          />
          <div className="hover-content">
            <ul>
              <li>Approvals</li>
              <li>Construction</li>
              <li>Structural & Drawings</li>
              <li>Interior & Exteriors</li>
              <li>Modular Kitchen</li>
              <li>Loan Sanctions</li>
              <li>Elevations</li>
            </ul>
          </div>
        </div>

        {/* Home Features */}
        <div className="service-box">
        <h3>Home Features</h3>
          <img 
            src={home}
            alt="Home Features" 
            className="service-image" 
          />
          <div className="hover-content">
            <ul>
              <li>2 Bathrooms</li>
              <li>2 Bedrooms</li>
              <li>Living Room</li>
              <li>Kitchen</li>
              <li>Bike Garage</li>
              <li>Garden</li>
              <li>& Many More</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
