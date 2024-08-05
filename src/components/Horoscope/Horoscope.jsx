import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Directly import Home

// Lazy load the components
const Gemini = lazy(() => import('./Pages/Gemini'));
const CardImage = lazy(() => import('./Pages/CardImage'));
const Content = lazy(() => import('./Pages/Content'));

// Function to preload components
const preloadComponents = () => {
  import('./Pages/Gemini');
  import('./Pages/CardImage');
  import('./Pages/Content');
};

export default function App() {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="cardImage" 
        element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <CardImage />
          </Suspense>
        } 
      />
      <Route 
        path="gemini" 
        element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Gemini />
          </Suspense>
        } 
      />
      <Route 
        path="content" 
        element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Content />
          </Suspense>
        } 
      />
    </Routes>
  );
}
