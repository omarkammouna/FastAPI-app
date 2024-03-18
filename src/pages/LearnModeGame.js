import React, { useEffect, useState } from 'react';
import classes from '../assets/Game.module.css';
import SingleCard from '../features/game/components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false }
];

const LearnModeGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([]);
  const [matchingVariant, setMatchingVariant] = useState(2);

  useEffect(() => {
    shuffleCards();
  }, [matchingVariant]);

  // Shuffle cards
  const shuffleCards = () => {
    let cardCopies = matchingVariant === 2 ? 2 : matchingVariant === 3 ? 3 : 4;
    const shuffledCards = [];
    for (let i = 0; i < cardCopies; i++) {
      shuffledCards.push(...cardImages);
    }
    const shuffledDeck = shuffledCards
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledDeck);
    setTurns(0);
    setChoices([]);
  };

  // Handle choice 
  const handleChoice = (card) => {
    if (choices.length < matchingVariant) {
      setChoices([...choices, card]);
    }
  };

  // Compare selected cards
  useEffect(() => {
    if (choices.length === matchingVariant) {
      const matched = choices.every((choice) => choice.src === choices[0].src);
      if (matched) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            choices.includes(card) ? { ...card, matched: true } : card
          )
        );
      }
      setTurns((prevTurns) => prevTurns + 1);
      setTimeout(resetChoices, 1000);
    }
  }, [choices, matchingVariant]);

  // Reset choices
  const resetChoices = () => {
    setChoices([]);
  };

  return (
    <div className={classes.game}>
      <div className={classes.dropdown}>
        <select value={matchingVariant} onChange={(e) => setMatchingVariant(Number(e.target.value))}>
          <option value={2}>Match 2 Cards</option>
          <option value={3}>Match 3 Cards</option>
          <option value={4}>Match 4 Cards</option>
        </select>
      </div>
      <div className={`${classes.cardgrid}`}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={choices.includes(card) || card.matched}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>Nouveau Jeu</button>
    </div>
  );
};

export default LearnModeGame;
