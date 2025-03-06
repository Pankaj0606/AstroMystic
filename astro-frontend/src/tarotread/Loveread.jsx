import React, { useState, useEffect } from 'react';
import './Loveread.css'; // Custom CSS for styling
import image1 from '../images/Gemini_Generated_Image_taypcttaypcttayp.jpeg'; // Front of the card
import image2 from '../images/Gemini_Generated_Image_8y35ur8y35ur8y35.jpeg'; // Front of the card
import cardBackImage from '../images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg'; // Back of the card (new)

const Loveread = () => {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]); // For the 10 visible cards
    const [selectedCards, setSelectedCards] = useState([]);
    const [showDescriptions, setShowDescriptions] = useState(false); // New state for showing descriptions

    // Full array of 20 cards
    const allCards = [
        { id: 1, flipped: false, selected: false, image: image1 },
        { id: 2, flipped: false, selected: false, image: image2 },
        { id: 3, flipped: false, selected: false, image: image1 },
        { id: 4, flipped: false, selected: false, image: image1 },
        { id: 5, flipped: false, selected: false, image: image2 },
        { id: 6, flipped: false, selected: false, image: image2 },
        { id: 7, flipped: false, selected: false, image: image1 },
        { id: 8, flipped: false, selected: false, image: image1 },
        { id: 9, flipped: false, selected: false, image: image1 },
        { id: 10, flipped: false, selected: false, image: image1 },
        { id: 11, flipped: false, selected: false, image: image2 },
        { id: 12, flipped: false, selected: false, image: image1 },
        { id: 13, flipped: false, selected: false, image: image2 },
        { id: 14, flipped: false, selected: false, image: image1 },
        { id: 15, flipped: false, selected: false, image: image1 },
        { id: 16, flipped: false, selected: false, image: image2 },
        { id: 17, flipped: false, selected: false, image: image1 },
        { id: 18, flipped: false, selected: false, image: image2 },
        { id: 19, flipped: false, selected: false, image: image1 },
        { id: 20, flipped: false, selected: false, image: image2 },
    ];

    // Shuffle the cards and select 10 to display
    const shuffleCards = () => {
        setSelectedCards([]);
        setShowDescriptions(false); // Hide descriptions when shuffling
        const shuffled = [...allCards].sort(() => Math.random() - 0.5);
        const selected10 = shuffled.slice(0, 10); // Pick the first 10 after shuffle
        setVisibleCards(selected10);
        setCards(selected10.map(card => ({ ...card, selected: false }))); // Reset selected status
    };

    useEffect(() => {
        // Initial shuffle to select 10 cards when the component mounts
        shuffleCards();
    }, []);

   

    // Handle card selection with a check to prevent double selection
    const selectCard = (card) => {
        if (selectedCards.length < 3 && !card.selected) {
            // Check if the card is already in the selectedCards array
            if (!selectedCards.some(selectedCard => selectedCard.id === card.id)) {
                // Add card to selectedCards and mark it as selected in visibleCards
                setSelectedCards([...selectedCards, { ...card, flipped: false }]); // Add unflipped card to selectedCards
                setVisibleCards(visibleCards.map(c =>
                    c.id === card.id ? { ...c, selected: true } : c
                )); // Mark card as selected in visibleCards
            }
        }
    };

    // Flip selected cards
    const flipSelectedCards = () => {
        setSelectedCards(selectedCards.map(card => ({ ...card, flipped: true })));
        setShowDescriptions(true); // Show descriptions when flipping
    };

    // Dummy explanations for each card (you can replace these with real meanings)
    const cardHead = {
        1: "Card 1",
        2: "Card 2",
        3: "Card 3",
        4: "Card 4",
        5: "Card 5",
        6: "Card 6",
        7: "Card 7",
        8: "Card 8",
        9: "Card 9",
        10: "Card 10",
        11: "Card 11",
        12: "Card 12",
        13: "Card 13",
        14: "Card 14",
        15: "Card 15",
        16: "Card 16",
        17: "Card 17",
        18: "Card 18",
        19: "Card 19",
        20: "Card 20"
    };

    // Dummy explanations for each card
    const cardExplanations1 = {
        1: "This card signifies new beginnings and potential for love.",
        2: "This card indicates harmony and balance in relationships.",
        3: "This card represents emotional fulfillment and joy in love.",
        4: "This card warns of challenges but also growth in love.",
        5: "This card is a sign of deep emotional connections.",
        6: "This card suggests a fresh start or a new chapter in love.",
        7: "This card is a reminder to trust your heart and intuition.",
        8: "This card reflects strength and resilience in relationships.",
        9: "This card indicates a period of reflection and understanding.",
        10: "This card speaks of commitment and long-lasting love.",
        11: "This card shows that passion will play a strong role.",
        12: "This card indicates a transformation in relationships.",
        13: "This card shows the need for communication and clarity.",
        14: "This card indicates trust will strengthen your bond.",
        15: "This card represents freedom and independence in love.",
        16: "This card reflects a deep spiritual connection.",
        17: "This card indicates a healing process in relationships.",
        18: "This card suggests a surprise twist in love.",
        19: "This card speaks of patience and understanding in love.",
        20: "This card represents stability and growth in love."
    };

    // Dummy explanations for each card with detailed structure
const cardDetails = {
    1: {
        name: "The Lovers",
        characteristics: [
            { heading: "Compatibility", description: "A symbol of deep connection and harmony." },
            { heading: "Strength", description: "Reflects inner strength in times of need." },
            { heading: "Growth", description: "Represents growth through challenges in love." }
        ]
    },
    2: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    3: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    4: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    5: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    6: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    7: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    8: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    9: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    10: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    11: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    12: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    13: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    14: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    15: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    16: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    17: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    18: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    19: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    },
    20: {
        name: "Two of Cups",
        characteristics: [
            { heading: "Unity", description: "Symbolizes a close bond or partnership." },
            { heading: "Balance", description: "Shows the importance of mutual respect." },
            { heading: "Joy", description: "Represents happiness shared between two people." }
        ]
    }
    // Add similar details for all cards
};


    return (
        <div className="love-reading-container">
            <h1>Love Reading</h1>
            <p>Select three cards to reveal your love reading</p>
            
            <div className="card-grid">
                {visibleCards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.selected ? 'selected' : ''}`} // Add class 'selected' if the card is selected
                        onClick={() => selectCard(card)}
                    >
                        {/* Show card back if not selected, show front if flipped */}
                        <img src={cardBackImage} alt="Card back" />
                    </div>
                    
                ))}
            </div>

            <button onClick={shuffleCards} className="shuffle-btn">Shuffle</button>
            
            <div className="selected-cards">
                {selectedCards.length > 0 && <h3>Chosen Cards:</h3>}
                    <div className="chosen-cards-row">
                        {selectedCards.map((card) => (
                            <div key={card.id} className={`flipped-card ${card.flipped ? 'flipped' : ''}`}>
                                <div className="card-inner">
                                    {/* Back of the card */}
                                    <div className="card-back">
                                        <img src={cardBackImage} alt="Card back" />
                                    </div>
                                    {/* Front of the card */}
                                    <div className="card-front">
                                        <img src={card.image} alt={`Card ${card.id}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                {selectedCards.length === 3 && (
                    <button onClick={flipSelectedCards} className="flip-btn">
                        Flip Cards
                    </button>
                )}
            </div>

            {/* Show descriptions only after "Flip Cards" is clicked */}
            {showDescriptions && (
    <div className="card-meanings">
        {selectedCards.map((card) => (
            <div key={card.id} className="card-meaning-row">
                <div className="card-meaning-image">
                    <img src={card.image} alt={`Card ${card.id}`} />
                </div>
                <div className="card-meaning-text">
                    {/* Card name */}
                    <h1 className="card-meaning-head">{cardDetails[card.id].name}</h1>
                    
                    {/* Characteristics */}
                    {cardDetails[card.id].characteristics.map((item, index) => (
                        <div key={index}>
                            <h3 className="card-meaning-characteristic-head">{item.heading}</h3>
                            <p className="card-meaning-characteristic-para">{item.description}</p>
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
