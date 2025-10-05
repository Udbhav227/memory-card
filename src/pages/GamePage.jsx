import React, { useState, useEffect } from 'react';
import ResultPanel from '../components/ResultPanel';
import Card from '../components/Card';
import gameModes from '../gameMode';
import initialCharacters from '../Characters';

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePage = ({
  difficulty,
  score,
  setScore,
  resetScore,
}) => {
  const [characters, setCharacters] = useState(
    initialCharacters.map((c) => ({ ...c, clicked: false }))
  );
  const [playingCards, setPlayingCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState('');

  const currentMode = gameModes[difficulty];

  // Effect to draw cards when the component mounts
  useEffect(() => {}, []);

  //Effect to shuffle/reshuffle card when player clicks on a card
  useEffect(() => {}, []);

  const handleEndGame = (result) => {
    setGameResult(result);
    setGameOver(true);
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setGameResult('');
    setCharacters(initialCharacters.map((c) => ({ ...c, clicked: false })));
    resetScore();
  };

// Handling win/loose logic
const handleCardClick = (clickedCard) => {
  if (isShuffling || gameOver) return;

  const cardAlreadyClicked = characters.find(c => c.id === clickedCard.id).clicked;
  if (cardAlreadyClicked) {
    handleEndGame('lose');
    return;
  }

  // 1. Flip all cards face-down
  setIsShuffling(true);

  // 2. Wait for flip-down animation
  setTimeout(() => {
    const newScore = score + 1;
    setScore(newScore);

    const updatedCharacters = characters.map((char) =>
      char.id === clickedCard.id ? { ...char, clicked: true } : char
    );

    if (newScore === currentMode.rounds) {
      handleEndGame('win');
      return;
    }

    // 3. Update cards *after* flip down
    setCharacters(updatedCharacters);

    // 4. Wait one frame to allow DOM to update, then flip back up
    requestAnimationFrame(() => {
      setTimeout(() => setIsShuffling(false), 50);
    });
  }, 700); // Slightly shorter than CSS transition (0.7s)
};


  return (
    <div className="game-container">
      <div className="card-section">
        {playingCards.map((character) => (
          <Card
            key={character.id}
            character={character}
            isFaceDown={isShuffling}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>

      {gameOver && (
        <ResultPanel
          result={gameResult}
          score={score}
          isVisible={gameOver}
          resetScore={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default GamePage;