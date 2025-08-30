import React from 'react';
import './TarotReading.css'; // New dedicated CSS file
import { useTarotDeck } from '../hooks/useTarotDeck.js';
import { cardBackImage } from '../data/tarot-deck.js';

const TarotReading = ({ readingType, title }) => {
    const {
        dealtCards,
        selectedCards,
        isRevealed,
        shuffleAndDeal,
        selectCard,
        revealCards
    } = useTarotDeck(3); // All readings will use a 3-card spread

    return (
        <div className="tarot-reading-container">
            <h1>{title}</h1>
            <p>Focus on your question and select three cards from the deck below.</p>
            
            <div className="card-grid">
                {dealtCards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${card.selected ? 'selected' : ''}`}
                        onClick={() => selectCard(card)}
                    >
                        <img src={cardBackImage} alt="Tarot card back" />
                    </div>
                ))}
            </div>

            <button onClick={shuffleAndDeal} className="shuffle-btn">Shuffle Deck</button>
            
            <div className="selected-cards">
                {selectedCards.length > 0 && <h3>Your Chosen Cards:</h3>}
                <div className="chosen-cards-row">
                    {selectedCards.map((card) => (
                        <div key={card.id} className={`flipped-card ${isRevealed ? 'flipped' : ''}`}>
                            <div className="card-inner">
                                <div className="card-back">
                                    <img src={cardBackImage} alt="Tarot card back" />
                                </div>
                                <div className="card-front">
                                    <img src={card.image} alt={card.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedCards.length === 3 && !isRevealed && (
                    <button onClick={revealCards} className="flip-btn">
                        Reveal Your Reading
                    </button>
                )}
            </div>

            {isRevealed && (
                <div className="card-meanings">
                    {selectedCards.map((card) => (
                        <div key={card.id} className="card-meaning-row">
                            <div className="card-meaning-image">
                                <img src={card.image} alt={card.name} />
                            </div>
                            <div className="card-meaning-text">
                                <h2 className="card-meaning-head">{card.name}</h2>
                                {/* This is the magic part! It dynamically picks the right reading. */}
                                {card.readings[readingType].map((item, index) => (
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

export default TarotReading;