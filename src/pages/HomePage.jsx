import PixelButton from "../components/PixelButton";
import "../styles/Home.css";

function HomePage({ onStartGame }) {
  return (
    <div className="home-container">
      <h1 className="title">
        Gotta click
        <br />
        'em all!
      </h1>

      <div className="start-btns">
        <PixelButton onClick={() => onStartGame("easy")}>Easy</PixelButton>
        <PixelButton onClick={() => onStartGame("medium")}>Medium</PixelButton>
        <PixelButton onClick={() => onStartGame("hard")}>Hard</PixelButton>
      </div>
    </div>
  );
}

export default HomePage;
