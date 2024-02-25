import React, { useState, useEffect } from 'react';
import './CrystalBall.css';

function CrystalBall() {
  const [showMessage, setShowMessage] = useState(true);
  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState('');
  const [colors, setColors] = useState([]);
  const [timer, setTimer] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Generate a random quote
  const generateQuote = () => {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Life is not about finding yourself. Life is about creating yourself. - George Bernard Shaw",
      "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Clear colors and reset timer
  const clearColors = () => {
    setColors([]);
    clearTimeout(timer);
  };

  // Start timer for quote display
  const startTimer = () => {
    const newTimer = setTimeout(() => {
      const newQuote = generateQuote();
      setQuote(newQuote);
      setShowQuote(true);
      clearColors();
    }, 10000);
    setTimer(newTimer);
  };

  // Handle mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });

    if (showMessage) {
      setShowMessage(false);
      startTimer();
    }

    if (!showQuote) {
      const newColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
      setColors([...colors, { color: newColor, x: clientX, y: clientY }]);
    }
  };

  // Handle restart
  const handleRestart = () => {
    setShowQuote(false);
    setShowMessage(true);
    clearColors();
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [colors, showMessage, showQuote]);

  return (
    <div className="App">
      {showMessage && (
        <div className="message">
          <p>Start to move cursor...</p>
        </div>
      )}
      {!showMessage && (
        <div className="screen" style={{ backgroundColor: '#000' }}>
          {colors.map((color, index) => (
            <div key={index} className="color" style={{ backgroundColor: color.color, left: color.x, top: color.y }}></div>
          ))}
        </div>
      )}
      {showQuote && (
        <div className="quote">
          <p className="quote-text">{quote}</p>
          <button className="restart-btn" onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default CrystalBall;
