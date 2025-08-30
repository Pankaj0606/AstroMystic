import { useState, useEffect } from 'react';
// We import the full deck of cards, which is our "single source of truth"
import { majorArcana } from '../data/tarot-deck.js';

// This is our custom hook. It starts with "use" by convention.
// It takes 'numberOfCards' as an argument so we can use it for different spreads (e.g., a 1-card daily draw or a 5-card spread).
export const useTarotDeck = (numberOfCards = 3) => {
    
    // STATE MANAGEMENT
    // 'dealtCards': The 10 cards randomly drawn from the deck and shown face-down to the user.
    const [dealtCards, setDealtCards] = useState([]);

    // 'selectedCards': The 3 cards the user actually clicks on for their reading.
    const [selectedCards, setSelectedCards] = useState([]);

    // 'isRevealed': A boolean that controls when the cards flip over and the meanings are shown.
    const [isRevealed, setIsRevealed] = useState(false);

    // LOGIC FUNCTIONS
    
    /**
     * Resets the reading, shuffles the full Major Arcana, and deals 10 cards to the "table".
     */
    const shuffleAndDeal = () => {
        // Reset the state for a new reading
        setSelectedCards([]);
        setIsRevealed(false);

        // Create a shuffled copy of the full deck
        const shuffled = [...majorArcana].sort(() => Math.random() - 0.5);
        
        // Take the top 10 cards for the user to choose from and reset their 'selected' state
        setDealtCards(shuffled.slice(0, 10).map(card => ({ ...card, selected: false })));
    };

    /**
     * This effect runs once when the component first loads to deal the initial set of cards.
     */
    useEffect(() => {
        shuffleAndDeal();
    }, []); // The empty dependency array [] means it only runs once.

    /**
     * Handles the user clicking on a face-down card.
     * @param {object} cardToSelect - The card object that was clicked.
     */
    const selectCard = (cardToSelect) => {
        // Only allow selection if the reading isn't finished and the card isn't already chosen
        if (selectedCards.length < numberOfCards && !cardToSelect.selected) {
            
            // Add the clicked card to our list of selected cards for the reading
            setSelectedCards([...selectedCards, cardToSelect]);
            
            // Update the 'dealtCards' array to mark this card as "selected" so it can be styled differently (e.g., grayed out)
            setDealtCards(dealtCards.map(card =>
                card.id === cardToSelect.id ? { ...card, selected: true } : card
            ));
        }
    };

    /**
     * Sets the state to trigger the flipping of cards and the display of their meanings.
     */
    const revealCards = () => {
        setIsRevealed(true);
    };

    // This is the public interface of our hook. We return all the state variables
    // and functions that our UI components (like Loveread.jsx) will need to work.
    return {
        dealtCards,
        selectedCards,
        isRevealed,
        shuffleAndDeal,
        selectCard,
        revealCards
    };
};