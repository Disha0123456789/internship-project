import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TarotCards from "./TarotCards";
import tarotReadingCardsData from "./tarot-cards-data";
import Shuffle from './Shuffle';
import TarotResult from './TarotResult';

const TarotReading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Main-Tarot">
      <div className="Head-Text">
        <h1>Tarot Reading</h1>
      </div>
      <div className="Tarot-Cards">
        {tarotReadingCardsData.map((card, index) => (
          <TarotCards key={index} props={card} />
        ))}
      </div>

      {/* Define the internal routes relative to /tarot-reading */}
      <Routes>
        <Route path="CardSelection" element={<Shuffle />} />
        <Route path="TarotResult" element={<TarotResult />} />
      </Routes>
    </div>
  );
};

export default TarotReading;
