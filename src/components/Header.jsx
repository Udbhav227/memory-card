import React from "react";
import "../styles/Header.css";

const Header = ({ onGoHome, score, bestScore }) => {
  const [scoreAnimating, setScoreAnimating] = React.useState(false);
  const [bestAnimating, setBestAnimating] = React.useState(false);

  React.useEffect(() => {
    if (score > 0) {
      setScoreAnimating(true);
      const timeout = setTimeout(() => setScoreAnimating(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [score]);

  React.useEffect(() => {
    if (score >= bestScore && score > 0) {
      setBestAnimating(true);
      const timeout = setTimeout(() => setBestAnimating(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [score, bestScore]);

  return (
    <header className="header-container">
      <div className="header-group">
        <h3 className="header-logo" onClick={onGoHome}>
          Gotta click
          <br />
          'em all!
        </h3>
      </div>

      <div className="header-group">
        <h3>
          Current:{" "}
          <span className={`score ${scoreAnimating ? "score-bump" : ""}`}>
            {score}
          </span>
        </h3>
        <h3>
          Best:{" "}
          <span className={`score ${bestAnimating ? "score-bump" : ""}`}>
            {bestScore}
          </span>
        </h3>
      </div>
    </header>
  );
};

export default Header;