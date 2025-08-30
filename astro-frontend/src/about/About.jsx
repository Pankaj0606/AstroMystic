// About.jsx
import React from 'react';
import './About.css';
import image2 from "../images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img
        src={image2}
        alt="Profile"
        className="profile-image"
      />
      <h3>John Doe</h3>
      <p>
        Hi, I am John Doe, a passionate web developer with a love for creating
        intuitive user experiences. I have experience working with various
        front-end and back-end technologies.
      </p>
      <div className="social-links">
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default About;
