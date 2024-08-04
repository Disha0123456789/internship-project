import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Kundli from './Kundli'; // Direct import for Kundli

// Lazy load other components
const MatchMaking = lazy(() => import('./MatchMaking'));
const MatchIndicator = lazy(() => import('./MatchIndicator'));

// Function to preload components
const preloadComponents = () => {
  import('./MatchMaking');
  import('./MatchIndicator');
};

const KundliHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Kundli />} />
        <Route 
          path="matchmaking" 
          element={
            <Suspense fallback={
              <div className="loading-container">
                <div className="loading-circle"></div>
                Loading...
              </div>
            }>
              <MatchMaking />
            </Suspense>
          } 
        />
        <Route 
          path="matchindicator" 
          element={
            <Suspense fallback={
              <div className="loading-container">
                <div className="loading-circle"></div>
                Loading...
              </div>
            }>
              <MatchIndicator />
            </Suspense>
          } 
        />
      </Routes>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  );
};

export default KundliHome;
