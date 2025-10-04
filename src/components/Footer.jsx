import React from "react";
import "../styles/Footer.css";

import MusicOnIconPath from "../assets/icons/music-note-svgrepo-com.svg";
import MusicOffIconPath from "../assets/icons/music-note-slash-svgrepo-com.svg";
import SfxOnIconPath from "../assets/icons/sound-on-svgrepo-com.svg";
import SfxOffIconPath from "../assets/icons/sound-off-svgrepo-com.svg";
import bgm from "../assets/sounds/Pokémon Opening - Gotta Catch 'Em All (Lofi Version).mp3";

const Footer = () => {
  const [isMusicOn, setIsMusicOn] = React.useState(false);
  const [isSfxOn, setIsSfxOn] = React.useState(true);

  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(bgm);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }
  }, []);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMusicOn) {
        audioRef.current
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [isMusicOn]);

  const handleMusic = () => setIsMusicOn((prev) => !prev);
  const handleSfx = () => setIsSfxOn((prev) => !prev);
  const handleShowRules = () => console.log("Show Rules Modal");

  return (
    <footer className="footer-container">
      <div className="footer-group">
        <button
          className={`footer-icon-button ${isSfxOn ? "active" : ""}`}
          onClick={handleSfx}
          aria-label={isSfxOn ? "Mute Sound" : "Unmute Sound"}
        >
          <span className="footer-btn-shadow"></span>
          <span className="footer-btn-edge"></span>
          <span className="footer-btn-front">
            <img
              src={isSfxOn ? SfxOnIconPath : SfxOffIconPath}
              alt={isSfxOn ? "SFX On" : "SFX Off"}
              className="footer-icon"
            />
          </span>
        </button>

        <button
          className={`footer-icon-button ${isMusicOn ? "active" : ""}`}
          onClick={handleMusic}
          aria-label={isMusicOn ? "Mute Music" : "Unmute Music"}
        >
          <span className="footer-btn-shadow"></span>
          <span className="footer-btn-edge"></span>
          <span className="footer-btn-front">
            <img
              src={isMusicOn ? MusicOnIconPath : MusicOffIconPath}
              alt={isMusicOn ? "Music On" : "Music Off"}
              className="footer-icon"
            />
          </span>
        </button>
      </div>

      <div className="footer-group">
        <button
          className="footer-icon-button"
          onClick={handleShowRules}
          aria-label="How to Play"
        >
          <span className="footer-btn-shadow"></span>
          <span className="footer-btn-edge"></span>
          <span className="footer-btn-front">?</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
