import PixelButton from '../components/PixelButton';
import '../styles/home.css'

function Home( {onStartGame} ) {
  return (
    <div className="home-container">
      <h1 className="title">
        Gotta click
        <br />
        'em all!
      </h1>

      <div className="start-btns">
        <PixelButton onClick={onStartGame}>Easy</PixelButton>
        <PixelButton onClick={onStartGame}>Medium</PixelButton>
        <PixelButton onClick={onStartGame}>Hard</PixelButton>
      </div>
    </div>
  );
}

export default Home;
