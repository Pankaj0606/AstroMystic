import React from 'react';
import './Option.css'; // Assuming you'll create a CSS file for styles
import image1 from '../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg';

const Consultation = () => {
    // Array of card data with image sources
    const cardData = [
        { title: "Consultation 1", image: image1, description: "Detailed description about consultation 1." },
        { title: "Consultation 2", image: image1, description: "Detailed description about consultation 2." },
        { title: "Consultation 3", image: image1, description: "Detailed description about consultation 3." },
        { title: "Consultation 4", image: image1, description: "Detailed description about consultation 4." },
        { title: "Consultation 5", image: image1, description: "Detailed description about consultation 5." },
        { title: "Consultation 6", image: image1, description: "Detailed description about consultation 6." },
        { title: "Consultation 7", image: image1, description: "Detailed description about consultation 7." },
        { title: "Consultation 8", image: image1, description: "Detailed description about consultation 8." },
        { title: "Consultation 9", image: image1, description: "Detailed description about consultation 9.liuwhwfkae afgaejbf liuwuefeaehbf ilwegefbeaalwlwhkwjl wliegfaebfghwebed iwegfawbee wegfahwbf lawegfbajhe" }
    ];

    return (
        <div className="consultation-container">
            <h1 className="consultation-head">Consultation</h1>
            <div className="consultation-card-grid">
                {cardData.map((card, index) => (
                    <div className="consultation-card" key={index}>
                        <h3 className="card-head">{card.title}</h3>
                        <img src={card.image} alt={card.title} className="consultation-image" />
                        <p className="card-para">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Consultation;
