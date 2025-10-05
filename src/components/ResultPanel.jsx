import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import PixelButton from "./PixelButton";
import "../styles/ResultPanel.css";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const dialogVariants = {
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

const dialogTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4,
};

const ResultPanel = ({ result, score, handlePlayAgain, isVisible, isSfxOn }) => {
  const isWin = result === "win";
  const titleText = isWin ? "YOU WON!" : "YOU LOST!";
  const titleClassName = isWin ? "title-win" : "title-lost";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="dialog-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="dialog-box-frame"
            key="result-dialog"
            variants={dialogVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={dialogTransition}
          >
            <div className="dialog-content-area">
              <h2 className={`dialog-title ${titleClassName}`}>{titleText}</h2>
              <p className="dialog-score">YOUR SCORE: {score}</p>
              <PixelButton
                onClick={handlePlayAgain}
                isSfxOn={isSfxOn}
                style={{
                  "--button-color": "#e64539",
                  "--button-shadow-color": "#b82e24",
                  width: "280px",
                }}
              >
                PLAY AGAIN?
              </PixelButton>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultPanel;