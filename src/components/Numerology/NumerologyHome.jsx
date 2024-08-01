import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Numero from './numero';
import Numerology from './Numerology';
import LifePathNumber from './LifePathNumber';

const NumerologyHome = () => {
  return (
    <div>
      {/* Nested routes for Numerology services */}
      <Routes>
        <Route path="/" element={<Numero />} />
        <Route path="Numerology" element={<Numerology />} />
        <Route path="lifepathnumber" element={<LifePathNumber />} />
      </Routes>
    </div>
  );
};

export default NumerologyHome;
