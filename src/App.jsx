import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideo from "./components/BackgroundVideo";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

function App() {
  const [loading, setLoading] = React.useState(true);
  const [gameState, setGameState] = React.useState("home");
  const [difficulty, setDifficulty] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);
  const [gameKey, setGameKey] = React.useState(0); // 1. Add gameKey state

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const startGame = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setScore(0);
    setGameState("playing");
    setGameKey((prevKey) => prevKey + 1);
  };

  const goHome = () => setGameState("home");

  const handlePlayAgain = () => {
    startGame(difficulty);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BackgroundVideo />
      <div className="app-container">
        {gameState !== "home" && (
          <Header onGoHome={goHome} score={score} bestScore={bestScore} />
        )}
        <main>
          <AnimatePresence mode="wait">
            {gameState === "home" && (
              <motion.div
                key="home"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomePage onStartGame={startGame} />
              </motion.div>
            )}
            {gameState === "playing" && (
              <motion.div
                key={gameKey} // 3. Use gameKey as the key
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <GamePage
                  difficulty={difficulty}
                  score={score}
                  setScore={setScore}
                  handlePlayAgain={handlePlayAgain}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;