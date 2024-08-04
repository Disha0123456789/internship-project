// PoojaHome.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Pooja from './Pooja'; // Directly import Pooja

// Lazy load PoojaDetail
const PoojaDetail = lazy(() => import('./PoojaDetail'));

// Function to preload components
const preloadComponents = () => {
  // Import and cache components to preload them
  import('./PoojaDetail'); // This will start loading the component in the background
};

const PoojaHome = () => {
  useEffect(() => {
    preloadComponents(); // Preload components after initial load
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Pooja />} />
      <Route 
        path=":poojaName" 
        element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <PoojaDetail />
          </Suspense>
        } 
      />
    </Routes>
  );
};

export default PoojaHome;
