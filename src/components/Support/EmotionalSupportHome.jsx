import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import EmotionalSupport from './EmotionalSupport'; // Directly import EmotionalSupport

// Lazy load other components
const AngerManagement = lazy(() => import('./AngerManagement'));
const Obsession = lazy(() => import('./Obsession'));
const Loneliness = lazy(() => import('./Loneliness'));
const SexualWellness = lazy(() => import('./SexualWellness'));
const Family = lazy(() => import('./Family'));
const Depression = lazy(() => import('./Depression'));
const Sleep = lazy(() => import('./Sleep'));
const StressManagement = lazy(() => import('./StressManagement'));
const PastTrauma = lazy(() => import('./PastTrauma'));
const SelfEsteemIssues = lazy(() => import('./SelfEsteemIssues'));
const WorkLifeBalance = lazy(() => import('./WorkLifeBalance'));
const Grief = lazy(() => import('./Grief'));

// Function to preload components
const preloadComponents = () => {
  import('./AngerManagement');
  import('./Obsession');
  import('./Loneliness');
  import('./SexualWellness');
  import('./Family');
  import('./Depression');
  import('./Sleep');
  import('./StressManagement');
  import('./PastTrauma');
  import('./SelfEsteemIssues');
  import('./WorkLifeBalance');
  import('./Grief');
};

const EmotionalSupportHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for emotional support services */}
      <Routes>
        <Route path="/" element={<EmotionalSupport />} /> {/* Directly load EmotionalSupport */}
        <Route path="AngerManagement" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <AngerManagement />
          </Suspense>
        } />
        <Route path="Obsession" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Obsession />
          </Suspense>
        } />
        <Route path="Loneliness" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Loneliness />
          </Suspense>
        } />
        <Route path="SexualWellness" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <SexualWellness />
          </Suspense>
        } />
        <Route path="Family" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Family />
          </Suspense>
        } />
        <Route path="Depression" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Depression />
          </Suspense>
        } />
        <Route path="Sleep" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Sleep />
          </Suspense>
        } />
        <Route path="StressManagement" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <StressManagement />
          </Suspense>
        } />
        <Route path="PastTrauma" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <PastTrauma />
          </Suspense>
        } />
        <Route path="SelfEsteemIssues" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <SelfEsteemIssues />
          </Suspense>
        } />
        <Route path="WorkLifeBalance" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <WorkLifeBalance />
          </Suspense>
        } />
        <Route path="Grief" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Grief />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default EmotionalSupportHome;
