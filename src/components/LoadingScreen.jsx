import React, { useState } from "react";
import "../styles/LoadingScreen.css";
import loadingAnimation1 from "../assets/videos/loading-screen1.gif";
import loadingAnimation2 from "../assets/videos/loading-screen2.gif";

const LoadingScreen = () => {
  const animations = [loadingAnimation1, loadingAnimation2];

  const [selectedAnimation] = useState(() => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  });

  return (
    <div className="loading-container">
      <img src={selectedAnimation} alt="Loading..." />
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
};

export default LoadingScreen;
