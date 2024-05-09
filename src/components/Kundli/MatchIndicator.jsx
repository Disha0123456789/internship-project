import { useState, useEffect } from 'react';
import './MatchIndicator.css';
import ScoreIndicator from 'react-score-indicator';

function MatchIndicator() {
  const [score, setScore] = useState(1);
  const [text, setText] = useState("Not A Good Match");

  const handleChange = (e) => {
    const number = e.target.value;
    if (number < 1) {
      setScore(1);
    } else if (number > 36) {
      setScore(36);
    } else {
      setScore(number);
    }

    if (number <= 9) {
      setText("Not A Good Match");
    } else if (number > 9 && number <= 18) {
      setText("May Be A Good Match");
    } else if (number > 18 && number <= 27) {
      setText("Good Match");
    } else if (number > 27) {
      setText("Perfect Match");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust ScoreIndicator props based on window width
      if (windowWidth < 460) {
        // For smaller screens
        setScoreProps({
          width: 200,
          lineWidth: 40,
          lineGap:0,
          maxValue: 36,
          maxAngle: 180
        });
      } else {
        // For larger screens
        setScoreProps({
          width: 300,
          lineWidth: 65,
          lineGap: 0,
          maxValue: 36,
          maxAngle: 180
        });
      }
    };

    // Set initial ScoreIndicator props
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [scoreProps, setScoreProps] = useState({
    width: 300,
    lineWidth: 65,
    lineGap:0,
    maxValue: 36,
    maxAngle:180
  });

  return (
    <div className='indicator-app'>
      <div className='indicator-container'>
        <div className='Head-Text'>
          <h1>Match Making</h1>
        </div>
        <hr className='match-hr' />
        <span className='compatibility-score'>Compatibility Score</span>

        <ScoreIndicator
          value={score}
          {...scoreProps} // Spread scoreProps to dynamically adjust props
          stepsColors={[
            '#e583af',
            '#6fdb73',
            '#fcbf46',
            '#77a1d2'
          ]}
          textStyle={{ color: "black" }}
        />

        <div className='score'>
          <label htmlFor="score">Try Changing The Number Here : </label>
          <input
            type="number"
            value={score}
            onChange={handleChange}
            min={1}
            max={36}
            className='input-score'
          />
        </div>

        <hr className='match-hr' />
        <span className='indicator-details'>Details</span>

        <p className='detailText'>{text}</p>

      </div>

      <div className='indicator' style={{ transform: `rotate(${180 + score * 5}deg)` }}>
        <div className='match-circle'></div>
        <div className='match-line'></div>
      </div>

    </div>
  );
}

export default MatchIndicator;
