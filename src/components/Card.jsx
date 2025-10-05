import React from "react";
import Tilt from "react-parallax-tilt";
import "../styles/Card.css";
import cardBackImage from "../assets/img/card_background.jpg";

const Card = ({ character, triggerFlip }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.6}
      glareColor="gold"
      glarePosition="bottom"
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className={triggerFlip ? "flip-card flip-card--flip" : "flip-card"}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.src} alt={character.name} />
          <div className="card-name-container">
            <p>{character.name}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <img src={cardBackImage} alt="card back" />
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
