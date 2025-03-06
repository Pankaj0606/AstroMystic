import React from 'react';
import './Services.css'; // Optional CSS for MainSection
import image1 from "../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg"
import image2 from "../images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg"
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="content-section">
        <h1 className="quote-h1">"In the end, we will remember not the words of our enemies, but the silence of our friends."</h1>

        <div className="image-paragraph-container">
          <img src={image1} alt="Astrology" />
          <div className="text">
            <h1>ASTROLOGY READING</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, sem id pretium faucibus, erat urna scelerisque justo, nec euismod lorem nisl non lorem. Proin non orci eu lorem malesuada tincidunt.</p>
                <Link to="/astroread" className="mainsec-link">Astro Read</Link>
          </div>
        </div>

        <div className="image-paragraph-container reversed-container">
          <img src={image2} alt="Tarot" />
          <div className="text">
            <h1>TAROT READING</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, sem id pretium faucibus, erat urna scelerisque justo, nec euismod lorem nisl non lorem. Proin non orci eu lorem malesuada tincidunt.</p>
            <Link to="/tarotread" className="mainsec-link">Tarot Read</Link>
          </div>
        </div>
    </div>
  );
};

export default Services;