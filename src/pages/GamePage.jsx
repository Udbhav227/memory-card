import React from "react";
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

const GamePage = ({
  difficulty,
  score,
  setScore,
  onPlayAgain,
  highScore,
  setHighScore,
}) => {
  const [characters, setCharacters] = React.useState([]);
  const [playingCards, setPlayingCards] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);
  const [gameResult, setGameResult] = React.useState("");

  const currentMode = gameModes[difficulty];

  // Effect for starting a new game or resetting when difficulty changes
  React.useEffect(() => {
    setGameOver(false);
    setShowResult(false);
    setGameResult("");
    setCharacters(initialCharacters.map((c) => ({ ...c, clicked: false })));
  }, []);

  // Effect for drawing and shuffling cards for each new round
  React.useEffect(() => {
    if (gameOver || characters.length === 0) return;

    const unclicked = characters.filter((c) => !c.clicked);
    const clicked = characters.filter((c) => c.clicked);

    const mandatoryCard =
      unclicked[Math.floor(Math.random() * unclicked.length)];
    const pool = shuffleArray([
      ...clicked,
      ...unclicked.filter((c) => c.id !== mandatoryCard.id),
    ]);
    const extraCards = pool.slice(0, currentMode.cardsPerRound - 1);
    const newPlayingCards = shuffleArray([mandatoryCard, ...extraCards]);
    setPlayingCards(newPlayingCards);
  }, [characters, gameOver, currentMode.cardsPerRound]);

  const handleEndGame = (result) => {
    if (score > highScore) {
      setHighScore(score);
    }
    setGameResult(result);
    setGameOver(true);
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setGameOver(false);
    setShowResult(false);
    setGameResult("");
    setCharacters(initialCharacters.map((c) => ({ ...c, clicked: false })));
    onPlayAgain();
  };

  const handleCardClick = (clickedCard) => {
    if (gameOver) {
      return;
    }

    const targetCard = characters.find((c) => c.id === clickedCard.id);

    if (targetCard.clicked) {
      handleEndGame("lose");
      return;
    }

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
  };

  return (
    <div className="game-container">
      <div className="card-grid">
        {playingCards.map((character) => (
          <Card
            key={character.id}
            character={character}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>

      {gameOver && (
        <ResultPanel
          result={gameResult}
          score={score}
          isVisible={showResult}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default GamePage;
