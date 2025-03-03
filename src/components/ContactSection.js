import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Left Side: Contact Form */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form className="form-layout">
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-row">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write a message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Side: Map */}
        <div className="contact-map">
          <h3>Our Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0075760380064!2d80.09194377423286!3d13.116466490752236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5262bce86f4765%3A0xfce0f1b6ed56c5f3!2sMurthy%20Nagar%2C%20Avadi%2C%20Tamil%20Nadu%20600109!5e0!3m2!1sen!2sin!4v1692342348278!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
