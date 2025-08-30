import React from 'react';
import './Newcontents.css'; // Optional CSS for MainSection
import image1 from "./images/Gemini_Generated_Image_taypcttaypcttayp.jpeg"
import image2 from "./images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg"
import { Link } from 'react-router-dom';

const Newcontents = () => {
  return (
    <div className="content-section">
        <h1 className="quote-h1">"The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."</h1>

        <div className="image-paragraph-container">
          <img src={image1} alt="Astrology" />
          <div className="text">
            <h1>ASTROLOGY READING</h1>
            <p>Unlock the secrets of your personal cosmic blueprint. An astrology reading delves into your unique birth chart, a celestial map of the sky at the exact moment you were born. Discover your core strengths, navigate life's challenges with clarity, and understand the deeper currents shaping your relationships, career, and personal journey.</p>
                <Link to="/astroread" className="mainsec-link">Astro Read</Link>
          </div>
        </div>

        <div className="image-paragraph-container reversed-container">
          <img src={image2} alt="Tarot" />
          <div className="text">
            <h1>TAROT READING</h1>
            <p>Seek guidance and find clarity with the timeless wisdom of the Tarot. Each card tells a story, reflecting the archetypal energies and situations we all encounter on our path. Whether you have a specific question or are seeking general insight, a Tarot reading illuminates your present moment and empowers you to make conscious, intuitive choices for your future.</p>
            <Link to="/tarotread" className="mainsec-link">Tarot Read</Link>
          </div>
        </div>
    </div>
  );
};

export default Newcontents;