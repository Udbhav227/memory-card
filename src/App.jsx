import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  const [gameState, setGameState] = React.useState('home');

  const startGame = () => {
    console.log("start game fired!")
    setGameState('playing');
  }
  const goHome = () => setGameState('home');

  return (
    <>
      <BackgroundVideo />
      <div className="app-container">
        { gameState === 'home' && <Home onStartGame={startGame} /> }
        { gameState === 'playing' && <Game onGoHome={goHome}/> }
      </div>
    </>
  )
}

export default App;