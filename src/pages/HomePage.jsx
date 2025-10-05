import PixelButton from "../components/PixelButton";
import "../styles/Home.css";

function HomePage({ onStartGame, isSfxOn }) {
  return (
    <div className="home-container">
      <h1 className="title">
        Gotta click
        <br />
        'em all!
      </h1>

      <div className="start-btns">
        <PixelButton onClick={() => onStartGame("easy")} isSfxOn={isSfxOn}>Easy</PixelButton>
        <PixelButton onClick={() => onStartGame("medium")} isSfxOn={isSfxOn}>Medium</PixelButton>
        <PixelButton onClick={() => onStartGame("hard")} isSfxOn={isSfxOn}>Hard</PixelButton>
      </div>
    </div>
  );
}

export default HomePage;