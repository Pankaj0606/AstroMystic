import React, { useState } from 'react';
import './Loveread.css'; // Custom CSS for styling
import image1 from '../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg';

const Loveread = () => {
    // All available cards with only essential properties
    const allCards = [
        { id: 1, flipped: false, selected: false, image: image1 },
        { id: 2, flipped: false, selected: false, image: image1 },
        { id: 3, flipped: false, selected: false, image: image1 },
        { id: 4, flipped: false, selected: false, image: image1 },
        { id: 5, flipped: false, selected: false, image: image1 },
        { id: 6, flipped: false, selected: false, image: image1 },
        { id: 7, flipped: false, selected: false, image: image1 },
        { id: 8, flipped: false, selected: false, image: image1 },
        { id: 9, flipped: false, selected: false, image: image1 },
        { id: 10, flipped: false, selected: false, image: image1 },
        { id: 11, flipped: false, selected: false, image: image1 },
        { id: 12, flipped: false, selected: false, image: image1 },
        { id: 13, flipped: false, selected: false, image: image1 },
        { id: 14, flipped: false, selected: false, image: image1 },
        { id: 15, flipped: false, selected: false, image: image1 },
        { id: 16, flipped: false, selected: false, image: image1 },
        { id: 17, flipped: false, selected: false, image: image1 },
        { id: 18, flipped: false, selected: false, image: image1 },
        { id: 19, flipped: false, selected: false, image: image1 },
        { id: 20, flipped: false, selected: false, image: image1 },
    ];

    // Card descriptions
    const cardDesc = {
        1: 'Info about card 1',
        2: 'Info about card 2',
        3: 'Info about card 3',
        4: 'Info about card 4',
        5: 'Info about card 5',
        6: 'Info about card 6',
        7: 'Info about card 7',
        8: 'Info about card 8',
        9: 'Info about card 9',
        10: 'Info about card 10',
        11: 'Info about card 11',
        12: 'Info about card 12',
        13: 'Info about card 13',
        14: 'Info about card 14',
        15: 'Info about card 15',
        16: 'Info about card 16',
        17: 'Info about card 17',
        18: 'Info about card 18',
        19: 'Info about card 19',
        20: 'Info about card 20',
    };

    const cardData = [
        {
          imgSrc: 'path_to_card_image_1', // Replace with your image path
          cardName: 'The Lovers',
          features: [
            { heading: 'Strength', description: 'This card represents harmony, balance, and attraction in relationships.' },
            { heading: 'Compatibility', description: 'It signals deep connection and mutual understanding between partners.' },
            { heading: 'Choices', description: 'It suggests an important decision in love or personal matters.' }
          ]
        },
        {
          imgSrc: 'path_to_card_image_2', // Replace with your image path
          cardName: 'Two of Cups',
          features: [
            { heading: 'Partnership', description: 'A strong emotional bond between two people.' },
            { heading: 'Union', description: 'Represents the joining of forces or coming together in love.' },
            { heading: 'Harmony', description: 'Indicates peace, love, and emotional balance.' }
          ]
        },
        {
          imgSrc: 'path_to_card_image_3', // Replace with your image path
          cardName: 'The High Priestess',
          features: [
            { heading: 'Intuition', description: 'Trust your inner voice when making decisions in your love life.' },
            { heading: 'Mystery', description: 'Uncover hidden feelings and truths in a relationship.' },
            { heading: 'Patience', description: 'It calls for stillness and waiting for the right moment.' }
          ]
        }
      ];

    const [visibleCards, setVisibleCards] = useState([]);

    // Randomly select 10 cards from the larger set
    const selectRandomCards = () => {
        const shuffledCards = [...allCards].sort(() => Math.random() - 0.5); // Shuffle cards
        setVisibleCards(shuffledCards.slice(0, 10)); // Pick the first 10 shuffled cards
    };

    // Initialize with 10 random cards when the component mounts
    useState(() => {
        selectRandomCards();
    }, []);

    // Handle card selection (limit to 3)
    const [selectedCards, setSelectedCards] = useState([]);
    const handleCardClick = (card) => {
        if (selectedCards.length < 3 && !selectedCards.includes(card)) {
            setSelectedCards([...selectedCards, card]);
        }
    };

    // Handle Shuffle
    const handleShuffle = () => {
        setSelectedCards([]); // Reset selected cards
        selectRandomCards(); // Shuffle and select new cards
    };

    return (
        <div className="loveread-container">
            <h1>Love Reading</h1>
            <p>Select 3 cards from the 10 displayed below:</p>
            <div className="cards-container">
                {visibleCards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${selectedCards.includes(card) ? 'selected' : ''}`}
                        onClick={() => handleCardClick(card)}
                    >
                        <img src={card.image} alt={`Card ${card.id}`} />
                    </div>
                ))}
            </div>
            <button onClick={handleShuffle}>Shuffle</button>
            {selectedCards.length === 3 && (
                <div className="selected-cards">
                {cardData.map((card, index) => (
                  <div key={index} className="card-details">
                    {/* Card image on the left */}
                    <img src={card.imgSrc} alt={card.cardName} className="card-image" />
        
                    {/* Card features on the right */}
                    <div className="card-text">
                      <h2>{card.cardName}</h2>
                      {card.features.map((feature, idx) => (
                        <div key={idx}>
                          <h3>{feature.heading}</h3>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
    );
};

export default Loveread;
