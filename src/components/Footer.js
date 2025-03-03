import React from 'react';
import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa'; // Import FaMapMarkerAlt for address icon
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>OOJAM CONSTRUCTIONS</h1>
          <p className="footer-tagline">"Building your dream homes."</p>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> No.81/7, 81/8, Murthy Nagar, Avadi, Ch-71</p>
          <p><FaPhoneAlt /> <a href="tel:+918124947406">+91 8124947406</a><a href="tel:04426557373">/ 044-26557373</a></p>
          <p><FaEnvelope /> <a href="mailto:oojamgroups.constructions@gmail.com">oojamgroups.constructions@gmail.com</a></p>
        </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
          <li><span> &#8250; </span><a href="#home">Home</a></li> 
        <li><span> &#8250; </span><a href="#service">Services</a></li> 
        <li><span> &#8250; </span><a href="#why-oojam">About Us</a></li> 
        <li><span> &#8250; </span><a href="#how-it-works">Workflow</a></li>
        <li><span> &#8250; </span><a href="#projects">Projects</a></li>
        <li><span> &#8250; </span><a href="#reviews">Reviews</a></li>
        <li><span> &#8250; </span><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.oojamgroups.com/" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
            <a href="https://www.instagram.com/oojamconstructions/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://in.linkedin.com/company/oojam-group-of-companies" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Oojam Constructions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
