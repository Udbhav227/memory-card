import React, { useState, useEffect } from "react";
import ResultPanel from "../components/ResultPanel";
import Card from "../components/Card";
import gameModes from "../gameMode";
import initialCharacters from "../Characters";

// Fisher-Yates shuffle
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const GamePage = ({ difficulty, score, setScore, handlePlayAgain }) => {
  const [characters, setCharacters] = useState(
    initialCharacters.map((c) => ({ ...c, clicked: false }))
  );
  const [playingCards, setPlayingCards] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");

  const currentMode = gameModes[difficulty];

  // Effect to draw cards when the component mounts
  useEffect(() => {
    setGameOver(false);
    setGameResult("")
    const initialSet = shuffleArray(characters).slice(0, currentMode.cards);
    setIsShuffling(true);
    setPlayingCards(initialSet);
    setTimeout(() => setIsShuffling(false), 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handling win/loose logic
  const handleCardClick = (clickedCard) => {
    if (isShuffling || gameOver) return;

    const cardAlreadyClicked = characters.find(
      (c) => c.id === clickedCard.id
    ).clicked;

    if (cardAlreadyClicked) {
      handleEndGame("lose");
      return;
    }

    setIsShuffling(true);

    setTimeout(() => {
      const newScore = score + 1;
      setScore(newScore);

      const updatedCharacters = characters.map((char) =>
        char.id === clickedCard.id ? { ...char, clicked: true } : char
      );
      setCharacters(updatedCharacters);

      if (newScore === currentMode.rounds) {
        handleEndGame("win");
        return;
      }

      const nextCards = shuffleArray(updatedCharacters).slice(
        0,
        currentMode.cards
      );

      setPlayingCards(nextCards);

      setTimeout(() => {
        setIsShuffling(false);
      }, 50);
    }, 700);
  };

  const handleEndGame = (result) => {
    setIsShuffling(true);
    setGameResult(result);
    setGameOver(true);
  };

  return (
    <div className="game-container">
      <div className={`playground count-${playingCards.length}`}>
        {playingCards.map((character) => (
          <Card
            key={character.id}
            character={character}
            triggerFlip={isShuffling}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>

      {gameOver && (
        <ResultPanel
          result={gameResult}
          score={score}
          isVisible={gameOver}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default GamePage;
