import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you shortly.");
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-us">
      <div className="contact-form-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h2>Other Ways to Reach Us</h2>
        <div className="contact-info">
          <div className="contact-channel">
            <h3>Email</h3>
            <p>support@quickrent.com</p>
          </div>
          <div className="contact-channel">
            <h3>Phone</h3>
            <p>+1 800-123-4567</p>
          </div>
          <div className="contact-channel">
            <h3>Follow Us</h3>
            <p>
              <a href="https://www.facebook.com/QuickRent" target="_blank" rel="noopener noreferrer">Facebook</a> | 
              <a href="https://www.twitter.com/QuickRent" target="_blank" rel="noopener noreferrer">Twitter</a> | 
              <a href="https://www.instagram.com/QuickRent" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
          </div>
        </div>
      </div>
      <div className="map-section">
        <h2>Our Office Location</h2>
        <div className="map-placeholder">
          <p>Map will be displayed here (integrate a map API like Google Maps for production).</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
