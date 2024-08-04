import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dream from './Dream'; // Directly import Dream

// Lazy load the components
const DreamInterpretation = lazy(() => import('./DreamInterpretation'));
const DreamResult = lazy(() => import('./DreamResult'));
const DreamBook = lazy(() => import('./DreamBook'));
const DreamHistoryList = lazy(() => import('./DreamHistoryList'));
const DreamHistory = lazy(() => import('./DreamHistory'));

// Function to preload components
const preloadComponents = () => {
  import('./DreamInterpretation');
  import('./DreamResult');
  import('./DreamBook');
  import('./DreamHistoryList');
  import('./DreamHistory');
};

const DreamHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for Dream services */}
      <Routes>
        <Route path="/" element={<Dream />} /> {/* Directly load Dream */}
        <Route path="dream_meaning" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DreamInterpretation />
          </Suspense>
        } />
        <Route path="dream_result" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DreamResult />
          </Suspense>
        } />
        <Route path="dream_book" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DreamBook />
          </Suspense>
        } />
        <Route path="dream_history_list" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DreamHistoryList />
          </Suspense>
        } />
        <Route path="dream_history/:id" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DreamHistory />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default DreamHome;
