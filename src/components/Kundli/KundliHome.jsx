import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Kundli from './Kundli';
import MatchMaking from './MatchMaking';
import MatchIndicator from './MatchIndicator';

const KundliHome = () => {
  return (
    <div>
      {/* Render nested routes */}
      <Routes>
        <Route path="/" element={<Kundli />} />
        <Route path="matchmaking" element={<MatchMaking />} />
        <Route path="matchindicator" element={<MatchIndicator />} />
      </Routes>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default KundliHome;
