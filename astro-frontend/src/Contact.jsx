import React from 'react';
import './Contact.css'; // Importing the Contact CSS for styling

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <h3 className="contact-para">For questions or requests for customized readings, please send me a message. I will get back to you soon.</h3>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Email Us</h2>
          <a href="example@example.com" className="social-link">example@example.com</a>
        </div>
        <div className="contact-item">
          <h2>WhatsApp Us</h2>
          <a href={`https://wa.me/911234567899`} className="social-link">+911234567899</a>
        </div>
        <div className="contact-item">
          <h2>Hours</h2>
          <p>By Appointment</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
