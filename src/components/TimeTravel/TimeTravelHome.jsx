import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TimeTravel from './TimeTravel'; // Direct import for TimeTravel

// Lazy load the other components
const FuturePrediction = lazy(() => import('./FuturePrediction'));
const SeeYourFuture = lazy(() => import('./SeeYourFuture'));
const PastLifePrediction = lazy(() => import('./PastLifePrediction'));
const SeeYourPast = lazy(() => import('./SeeYourPast'));

// Function to preload components
const preloadComponents = () => {
  import('./FuturePrediction');
  import('./SeeYourFuture');
  import('./PastLifePrediction');
  import('./SeeYourPast');
};

const TimeTravelHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  const fallbackComponent = (
    <div className="loading-container">
      <div className="loading-circle"></div>
      Loading...
    </div>
  );

  return (
    <div>
      {/* Nested routes for Time Travel */}
      <Routes>
        <Route path="/" element={<TimeTravel />} />
        <Route 
          path="FuturePrediction" 
          element={
            <Suspense fallback={fallbackComponent}>
              <FuturePrediction />
            </Suspense>
          } 
        />
        <Route 
          path="see_your_future" 
          element={
            <Suspense fallback={fallbackComponent}>
              <SeeYourFuture />
            </Suspense>
          } 
        />
        <Route 
          path="PastLifePrediction" 
          element={
            <Suspense fallback={fallbackComponent}>
              <PastLifePrediction />
            </Suspense>
          } 
        />
        <Route 
          path="see_your_past" 
          element={
            <Suspense fallback={fallbackComponent}>
              <SeeYourPast />
            </Suspense>
          } 
        />
      </Routes>
    </div>
  );
};

export default TimeTravelHome;
