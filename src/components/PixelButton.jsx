import React from "react";
import "../styles/PixelButton.css";
import clickSound from "../assets/sounds/click.mp3";

const PixelButton = ({ onClick, children, isSfxOn, ...props }) => {
  const audioRef = React.useRef(null);

  React.useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(clickSound);
    }
  }, []);

  const handleClick = (e) => {
    if (isSfxOn && audioRef.current) {
      audioRef.current.play();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button className="pixel-button" onClick={handleClick} {...props}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{children}</span>
    </button>
  );
};

export default PixelButton;