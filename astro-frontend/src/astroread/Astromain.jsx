import React from 'react';
import { Link } from 'react-router-dom';
import './Astromain.css'; // Assuming you have a separate CSS file for styles
import image1 from "../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg"

const Astromain = () => {
    return (
        <div className="astromain-container">
            <h1>Astrology Reading</h1>
            <div className="astro-content">
                <img src={image1} alt="Astrology" className="astro-image" />
                <div className="astro-text">
                    <p>
                        Explore the insights and guidance that astrology can provide.
                        Discover your personal birth chart and how it affects your life.
                    </p>
                    <Link to="/birthchart" className="birth-chart-button">Birth Chart</Link>
                </div>
            </div>
        </div>
    );
};

export default Astromain;
