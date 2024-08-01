// PoojaHome.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pooja from './Pooja';
import PoojaDetail from './PoojaDetail';

const PoojaHome = () => {
  return (
    <Routes>
      <Route path="/" element={<Pooja />} />
      <Route path=":poojaName" element={<PoojaDetail />} />
    </Routes>
  );
};

export default PoojaHome;
