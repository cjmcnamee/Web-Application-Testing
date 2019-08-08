import React, { useState } from 'react';
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setstrikes] = useState(0);
  const [fouls, setFouls] = setState(0);
  const [hits, setHits] = setState();

  const handleBalls = () => {
    if(balls <= 4) {
      setBalls(balls + 1);
    } else {
      handleHit();
    }
  }

  const handleStrikes = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      handleHit();
    }
  }

  const handleFouls = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    }
  }

  const handleHits = () => {
    setBalls(0);
    setStrikes(0);
  }

  return (
    <div className="scoreboard">
      <div className="display">
        <div>Balls: {balls}</div>
        <div>Strikes: {strikes} </div>
      </div>
      <button onClick={handleBalls}>Add Ball</button>
      <button onClick={handleStrikes}>Add Strike</button>
      <button onClick={handleFouls}>Add Foul</button>
      <button onClick={handleHits}>Add Hit</button>
    </div>
  );
}

export default App;
