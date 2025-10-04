/* eslint-disable no-unused-vars */
import React from "react";
import ResultPanel from "../components/ResultPanel";
import gameModes from "../gameMode";

const GamePage = ({ difficulty, score, setScore, onPlayAgain }) => {
  const [gameOver, setGameOver] = React.useState(false);
  const [showResult, setShowResult] = React.useState(false);

  const currentMode = gameModes[difficulty];

  React.useEffect(() => {
    console.log("Game started with difficulty: ", difficulty);
    console.log("Settings: ", currentMode);
  }, [difficulty, currentMode]);

  const handleEndGame = () => {
    setGameOver(true);
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setShowResult(false);
    setTimeout(() => {
      setGameOver(false);
      onPlayAgain();
    }, 400);
  };

  return (
    <div className="game-container">
      <p>Difficulty: {difficulty}</p>
      {gameOver && (
        <ResultPanel
          result="win"
          score={score}
          isVisible={showResult}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default GamePage;
