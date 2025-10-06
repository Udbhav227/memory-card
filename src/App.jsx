import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideo from "./components/BackgroundVideo";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

import initialCharacters from "./Characters";
import cardBackImage from "./assets/img/card_background.jpg";
import psyduckImage from "./assets/img/psyduck_huh.png";
import loadingAnimation1 from "./assets/videos/loading-screen1.gif";
import loadingAnimation2 from "./assets/videos/loading-screen2.gif";
import flipSound from "./assets/sounds/flip.mp3";
import clickSound from "./assets/sounds/click.mp3";
import bgm from "./assets/sounds/Pokémon Opening - Gotta Catch 'Em All (Lofi Version).mp3";
import MusicOnIconPath from "./assets/icons/music-note-svgrepo-com.svg";
import MusicOffIconPath from "./assets/icons/music-note-slash-svgrepo-com.svg";
import SfxOnIconPath from "./assets/icons/sound-on-svgrepo-com.svg";
import SfxOffIconPath from "./assets/icons/sound-off-svgrepo-com.svg";

const preloadImage = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = resolve;
  });
};

const preloadAudio = (url) => {
  return new Promise((resolve) => {
    const audio = new Audio(url);
    audio.addEventListener("canplaythrough", resolve);
    audio.addEventListener("error", resolve);
    audio.load();
  });
};

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
  const [gameKey, setGameKey] = React.useState(0);
  const [isSfxOn, setIsSfxOn] = React.useState(true);

  React.useEffect(() => {
    const characterImagePaths = initialCharacters.map((c) => c.src);

    const allImagePaths = [
      ...characterImagePaths,
      cardBackImage,
      psyduckImage,
      loadingAnimation1,
      loadingAnimation2,
      MusicOnIconPath,
      MusicOffIconPath,
      SfxOnIconPath,
      SfxOffIconPath,
    ];

    const allAudioPaths = [flipSound, clickSound, bgm];

    const preloadAllAssets = async () => {
      const imagePromises = allImagePaths.map(preloadImage);
      const audioPromises = allAudioPaths.map(preloadAudio);

      await Promise.all([...imagePromises, ...audioPromises]);

      setTimeout(() => setLoading(false), 500);
    };

    preloadAllAssets();
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
                <HomePage onStartGame={startGame} isSfxOn={isSfxOn} />
              </motion.div>
            )}
            {gameState === "playing" && (
              <motion.div
                key={gameKey}
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
                  isSfxOn={isSfxOn}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer isSfxOn={isSfxOn} setIsSfxOn={setIsSfxOn} />
      </div>
    </>
  );
}

export default App;
