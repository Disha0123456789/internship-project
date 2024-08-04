import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Meditation from './Meditation'; // Directly import Meditation

// Lazy load other components
const DailyMeditation = lazy(() => import('./DailyMeditation'));
const ChakraMeditation = lazy(() => import('./ChakraMeditation'));
const SleepMeditation = lazy(() => import('./SleepMeditation'));
const FiveMinMeditation = lazy(() => import('./FiveMinMeditation'));
const Mindfulness = lazy(() => import('./Mindfulness'));
const PositiveMeditation = lazy(() => import('./PositiveMeditation'));
const BeginnerMeditation = lazy(() => import('./BeginnerMeditation'));
const MentalHealthMeditation = lazy(() => import('./MentalHealthMeditation'));
const EpicPowerMeditation = lazy(() => import('./EpicPowerMeditation'));

// Function to preload components
const preloadComponents = () => {
  import('./DailyMeditation');
  import('./ChakraMeditation');
  import('./SleepMeditation');
  import('./FiveMinMeditation');
  import('./Mindfulness');
  import('./PositiveMeditation');
  import('./BeginnerMeditation');
  import('./MentalHealthMeditation');
  import('./EpicPowerMeditation');
};

const MeditationHome = () => {
  // Call preloadComponents after the initial component is rendered
  useEffect(() => {
    preloadComponents();
  }, []);

  return (
    <div>
      {/* Nested routes for meditation services */}
      <Routes>
        <Route path="/" element={<Meditation />} /> {/* Directly load Meditation */}
        <Route path="MindfullnessMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <Mindfulness />
          </Suspense>
        } />
        <Route path="DailyMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <DailyMeditation />
          </Suspense>
        } />
        <Route path="ChakraMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <ChakraMeditation />
          </Suspense>
        } />
        <Route path="SleepMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <SleepMeditation />
          </Suspense>
        } />
        <Route path="5MinsMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <FiveMinMeditation />
          </Suspense>
        } />
        <Route path="EpicPowerMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <EpicPowerMeditation />
          </Suspense>
        } />
        <Route path="BeginnerMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <BeginnerMeditation />
          </Suspense>
        } />
        <Route path="MentalHealthMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <MentalHealthMeditation />
          </Suspense>
        } />
        <Route path="PositiveMindMeditation" element={
          <Suspense fallback={<div className="loading-container"><div className="loading-circle"></div>Loading...</div>}>
            <PositiveMeditation />
          </Suspense>
        } />
      </Routes>
    </div>
  );
};

export default MeditationHome;
