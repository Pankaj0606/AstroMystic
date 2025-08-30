import React from 'react';
import { Link } from 'react-router-dom';
import './Cardread.css';
import image1 from "../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg";

const Cardread = () => {
    const cardData = [
        { title: "Personality Reading", image: image1, link: "/tarotread/personality" },
        { title: "Love Reading", image: image1, link: "/tarotread/love" },
        { title: "Career Reading", image: image1, link: "/tarotread/career" },
        { title: "Past Life Reading", image: image1, link: "/tarotread/pastlife" },
    ];

    return (
        <div className="tarot-reading-container">
            <h1>Free Tarot Reading</h1>
            <h3>Choose a reading to begin your journey</h3>
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <div className="tarot-card" key={index}>
                        <img src={card.image} alt={card.title} className="tarot-card-image" />
                        <h3>{card.title}</h3>
                        <Link to={card.link} className="read-now-button">Begin Reading</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardread;