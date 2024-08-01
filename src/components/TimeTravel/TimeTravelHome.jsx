import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TimeTravel from './TimeTravel';
import FuturePrediction from './FuturePrediction';
import SeeYourFuture from './SeeYourFuture';
import PastLifePrediction from './PastLifePrediction';
import SeeYourPast from './SeeYourPast';

const TimeTravelHome = () => {
  return (
    <div>
      {/* Nested routes for Time Travel */}
      <Routes>
        <Route path="/" element={<TimeTravel />} />
        <Route path="FuturePrediction" element={<FuturePrediction />} />
        <Route path="see_your_future" element={<SeeYourFuture />} />
        <Route path="PastLifePrediction" element={<PastLifePrediction />} />
        <Route path="see_your_past" element={<SeeYourPast />} />
      </Routes>
    </div>
  );
};

export default TimeTravelHome;
