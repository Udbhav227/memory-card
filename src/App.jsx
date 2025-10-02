import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideo from "./components/BackgroundVideo";
import Home from "./components/Home";
import Game from "./components/Game";
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
  const [gameState, setGameState] = React.useState("home");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  const startGame = () => setGameState("playing");
  const goHome = () => setGameState("home");

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <BackgroundVideo />

      <div className="app-container">
        {gameState !== "home" && <Header onGoHome={goHome} />}
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
