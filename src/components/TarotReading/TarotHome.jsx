import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TarotReading from './TarotReading';
import Shuffle from './Shuffle';
import TarotResult from './TarotResult';

const TarotHome = () => {
  return (
    <div className="TarotHome">
      <Routes>
        <Route path="/" element={<TarotReading />} />
        <Route path="CardSelection" element={<Shuffle />} />
        <Route path="TarotResult" element={<TarotResult />} />
      </Routes>
    </div>
  );
};

export default TarotHome;
