import React from 'react';
import './styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-options">
        <div className="contact-option">
          <i className="fas fa-envelope"></i>
          <p>Email: contact@skyjo.com</p>
        </div>
        <div className="contact-option">
          <i className="fas fa-phone-alt"></i>
          <p>Phone: +444 (444) 444-4444</p>
        </div>
        <div className="contact-option">
          <i className="fas fa-map-marker-alt"></i>
          <p>Address: 444 Skyjo Street, Sky City, SKY123</p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>  {/* zone text plu grd pour msg vertical. */}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
