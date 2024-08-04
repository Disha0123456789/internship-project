import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Numero from './numero'; // Directly import Numero

// Lazy load other components
const Numerology = lazy(() => import('./Numerology'));
const LifePathNumber = lazy(() => import('./LifePathNumber'));

// Function to preload components
const preloadComponents = () => {
  import('./Numerology');
  import('./LifePathNumber');
};

const NumerologyHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for Numerology services */}
      <Routes>
        <Route path="/" element={<Numero />} /> {/* Directly load Numero */}
        <Route path="Numerology" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Numerology />
          </Suspense>
        } />
        <Route path="lifepathnumber" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <LifePathNumber />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default NumerologyHome;
