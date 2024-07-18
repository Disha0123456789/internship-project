import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchHoroscope } from '../../services/apiService'; // Update the import path as needed
import "./SeeYourFuture.css";
import { useNavigate } from "react-router-dom";

export default function SeeYourFuture() {
  const [searchParams] = useSearchParams();
  const zodiacSign = searchParams.get('sign');
  const timePeriod = searchParams.get('type');
  const [content, setContent] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const data = await fetchHoroscope(zodiacSign, timePeriod);
      setContent(data.response);
    } catch (error) {
      setContent({ error: 'Error fetching horoscope data.' });
    }
  };

  useEffect(() => {
    if (zodiacSign && timePeriod) {
      fetchData();
    }
  }, [zodiacSign, timePeriod]);

  const renderContent = () => {
    if (typeof content === 'string') {
      return <p>{content}</p>;
    }

    if (content.error) {
      return <p>{content.error}</p>;
    }

    return (
      Object.entries(content).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '20px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>{key}</span>
          <p style={{ color: '#555', marginTop:'5px', fontSize:'0.9rem'}}>{Array.isArray(value) ? value.join('\n') : value}</p>
        </div>
      ))
    );
  };

  return (
    <div className="dream-result">
      <div className="Head-Text">
        <h1>See Your Future</h1>
      </div>
      <div className="dreamcard-container">
        <div className="dream-result-card">
          <h2 className="dream-result-title">Results</h2>
          <div className="divider"></div>
          <div className="description">
            {renderContent()}
          </div>
        </div>
      </div>
      <div className="margin-div"></div>
    </div>
  );
}
