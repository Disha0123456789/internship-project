import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dream from './Dream';
import DreamInterpretation from './DreamInterpretation';
import DreamResult from './DreamResult';
import DreamBook from './DreamBook';
import DreamHistoryList from './DreamHistoryList';
import DreamHistory from './DreamHistory';

const DreamHome = () => {
  return (
    <div>
      {/* Nested routes for Dream services */}
      <Routes>
        <Route path="/" element={<Dream />} />
        <Route path="dream_meaning" element={<DreamInterpretation />} />
        <Route path="dream_result" element={<DreamResult />} />
        <Route path="dream_book" element={<DreamBook />} />
        <Route path="dream_history_list" element={<DreamHistoryList />} />
        <Route path="dream_history/:id" element={<DreamHistory />} />
      </Routes>
    </div>
  );
};

export default DreamHome;
