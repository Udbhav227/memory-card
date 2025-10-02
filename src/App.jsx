import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import BackgroundVideo from "./components/BackgroundVideo";
import Home from "./components/Home";
import Game from "./components/Game";
import Footer from "./components/Footer";

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
  duration: .5,
};

function App() {
  const [gameState, setGameState] = React.useState("home");

  const startGame = () => {
    setGameState("playing");
  };
  const goHome = () => setGameState("home");

  return (
    <>
      <BackgroundVideo />

      <div className="app-container">
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
                <Home onStartGame={startGame} />
              </motion.div>
            )}

            {gameState === "playing" && (
              <motion.div
                key="playing"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Game onGoHome={goHome} />
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
