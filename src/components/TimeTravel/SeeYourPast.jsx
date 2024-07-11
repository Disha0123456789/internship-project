import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SeeYourFuture.css';
import predictions from './past_life_predictions.json'; // Import the JSON file

export default function SeeYourPast() {
  const [searchParams] = useSearchParams();
  const birthDate = searchParams.get('birthDate');
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    if (birthDate) {
      console.log('Birth Date:', birthDate);
      fetchPrediction(birthDate);
    }
  }, [birthDate]);

  const fetchPrediction = (date) => {
    const day = parseInt(date.split('-')[2], 10);
    const predictionData = predictions.find(p => p.id === day);
    if (predictionData) {
      const formattedPrediction = predictionData.prediction.replace(/\n/g, '<br>');
      setPrediction(formattedPrediction);
    } else {
      setPrediction('No prediction found for this date.');
    }
  };

  return (
    <div className="dream-result">
      <div className="Head-Text">
        <h1>See Your Past</h1>
      </div>
      <div className="dreamcard-container">
        <div className="dream-result-card">
          <h2 className="dream-result-title">Results</h2>
          <div className="divider"></div>
          <div className="description">
            <p className="prediction-text" dangerouslySetInnerHTML={{ __html: prediction }}></p>
          </div>
        </div>
      </div>
      <div className="margin-div"></div>
    </div>
  );
}
