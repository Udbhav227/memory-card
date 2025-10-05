import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../styles/Card.css';
import cardBackImage from '../assets/img/card_background.jpg';

const Card = ({ character, triggerFlip, handleCardClick }) => {
  return (
    <div
      className={triggerFlip ? 'flip-card flip-card--flip' : 'flip-card'}
      onClick={() => handleCardClick(character)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.6}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.06}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            glareBorderRadius="10px"
            className="tilt-component"
          >
            <img
              src={character.src}
              alt={character.name}
            />
            <div className="card-name-container">
              <p>{character.name}</p>
            </div>
          </Tilt>
        </div>
        <div className="flip-card-back">
          <img src={cardBackImage} alt="card back" />
        </div>
      </div>
    </div>
  );
};

export default Card;