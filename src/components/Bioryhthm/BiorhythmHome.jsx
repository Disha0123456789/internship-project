import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Biorhythm from './Biorhythm';
import LineChart from './LineChart';

const BiorhythmHome = () => {
  return (
    <div>
      {/* Nested routes for Biorhythm and LineChart */}
      <Routes>
        <Route path="/" element={<LineChart />} />
        <Route path="biorhythm" element={<Biorhythm />} />
      </Routes>
    </div>
  );
};

export default BiorhythmHome;
