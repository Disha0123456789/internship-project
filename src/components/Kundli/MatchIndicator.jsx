import { useState, useEffect } from 'react';
import './MatchIndicator.css';
import ScoreIndicator from 'react-score-indicator';
import { useLocation } from 'react-router-dom';
import matchScore from './matchScore.json'; // Assuming matchScore.json is in the same directory

function MatchIndicator() {
  const { state } = useLocation();
  const initialScore = state && state.score !== undefined ? state.score : 0;
  const [score, setScore] = useState(initialScore);

  const [text, setText] = useState({
    para1: "Not A Good Match",
    para2: "",
    para3: ""
  });

  const [scoreProps, setScoreProps] = useState({
    width: 300,
    lineWidth: 65,
    lineGap: 0,
    maxValue: 36,
    maxAngle: 180
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 460) {
        setScoreProps({
          width: 200,
          lineWidth: 40,
          lineGap: 0,
          maxValue: 36,
          maxAngle: 180
        });
      } else {
        setScoreProps({
          width: 300,
          lineWidth: 65,
          lineGap: 0,
          maxValue: 36,
          maxAngle: 180
        });
      }
    };

    const handleChange = () => {
      const number = score;
      if (number < 1) {
        setScore(1);
      } else if (number > 36) {
        setScore(36);
      } else {
        setScore(number);
      }

      const matchData = matchScore.find(item => item.id === number);
      if (matchData) {
        setText({
          para1: matchData.para1,
          para2: matchData.para2,
          para3: matchData.para3
        });
      }
    };

    handleChange();
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [score]);

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
          {...scoreProps}
          stepsColors={['#e583af', '#6fdb73', '#fcbf46', '#77a1d2']}
          textStyle={{ color: "black" }}
        />

        <hr className='match-hr' />
        <span className='indicator-details'>Details</span>

        <p className='detailText'>
          <strong>{text.para1.split(":")[0]}:</strong> {text.para1.substring(text.para1.indexOf(":") + 1)}
        </p>
        {text.para2 && (
          <p className='detailText'>
            <strong>{text.para2.split(":")[0]}:</strong> {text.para2.substring(text.para2.indexOf(":") + 1)}
          </p>
        )}
        {text.para3 && (
          <p className='detailText'>
            <strong>{text.para3.split(":")[0]}:</strong> {text.para3.substring(text.para3.indexOf(":") + 1)}
          </p>
        )}

        <div className='indicator' style={{ transform: `rotate(${180 + score * 5}deg)` }}>
          <div className='match-circle'></div>
          <div className='match-line'></div>
        </div>
      </div>
    </div>
  );
}

export default MatchIndicator;
