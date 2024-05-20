import React, { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('#282c34');
  const [isBouncing, setIsBouncing] = useState(true);

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  const toggleBounce = () => {
    setIsBouncing(!isBouncing);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <header className="App-header">
        <h1>Welcome to My Cool React App!</h1>
        <button className="button" onClick={generateRandomColor}>
          Change Background Color
        </button>
        <button className="button" onClick={toggleBounce}>
          Toggle Bouncing Ball
        </button>
        {isBouncing && <div className="bouncing-ball"></div>}
      </header>
    </div>
  );
}

export default App;
