import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LineChart from './LineChart'; // Directly import LineChart

// Lazy load the Biorhythm component
const Biorhythm = lazy(() => import('./Biorhythm'));

// Function to preload components
const preloadComponents = () => {
  import('./Biorhythm');
};

const BiorhythmHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for Biorhythm and LineChart */}
      <Routes>
        <Route path="/" element={<LineChart />} /> {/* Directly load LineChart */}
        <Route path="biorhythm" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Biorhythm />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default BiorhythmHome;
