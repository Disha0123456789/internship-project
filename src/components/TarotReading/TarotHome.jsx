import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TarotReading from './TarotReading'; // Direct import for TarotReading

// Lazy load the other components
const Shuffle = lazy(() => import('./Shuffle'));
const TarotResult = lazy(() => import('./TarotResult'));

// Function to preload components
const preloadComponents = () => {
  import('./Shuffle');
  import('./TarotResult');
};

const TarotHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div className="TarotHome">
      <Routes>
        <Route path="/" element={<TarotReading />} />
        <Route
          path="CardSelection"
          element={
            <Suspense fallback={
              <div className="loading-container">
                <div className="loading-circle"></div>
                Loading...
              </div>
            }>
              <Shuffle />
            </Suspense>
          }
        />
        <Route
          path="TarotResult"
          element={
            <Suspense fallback={
              <div className="loading-container">
                <div className="loading-circle"></div>
                Loading...
              </div>
            }>
              <TarotResult />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default TarotHome;
