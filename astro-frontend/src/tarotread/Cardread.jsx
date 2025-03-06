import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Cardread.css'; // Assuming you will create a CSS file for styles

import image1 from '../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg';

const Cardread = () => {
    // Array of card data for different readings
    const cardData = [
        { title: "Personality Reading", image: image1, link: "/tarotread/cardpred/personality-reading" },
        { title: "Love Reading", image: image1, link: "/tarotread/cardpred/love-reading" },
        { title: "Career Reading", image: image1, link: "/tarotread/cardpred/career-reading" },
        { title: "Past Life Reading", image: image1, link: "/tarotread/cardpred/past-life-reading" },
        { title: "Future Reading", image: image1, link: "/tarotread/cardpred/future-reading" }
    ];

    return (
        <div className="tarot-reading-container">
            <h1>Free Tarot Reading</h1>
            <h3>No one knows you better than you</h3>
            <div className="card-grid">
                {cardData.map((card, index) => (
                    <div className="tarot-card" key={index}>
                        <img src={card.image} alt={card.title} className="tarot-card-image" />
                        <h3>{card.title}</h3>
                        <Link to={card.link} className="read-now-button">Read Now</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cardread;
