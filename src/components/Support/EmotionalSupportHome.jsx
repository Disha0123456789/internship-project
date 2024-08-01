import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmotionalSupport from './EmotionalSupport';
import AngerManagement from './AngerManagement';
import Obsession from './Obsession';
import Loneliness from './Loneliness';
import SexualWellness from './SexualWellness';
import Family from './Family';
import Depression from './Depression';
import Sleep from './Sleep';
import StressManagement from './StressManagement';
import PastTrauma from './PastTrauma';
import SelfEsteemIssues from './SelfEsteemIssues';
import WorkLifeBalance from './WorkLifeBalance';
import Grief from './Grief';

const EmotionalSupportHome = () => {
  return (
    <div>
      {/* Nested routes for emotional support services */}
      <Routes>
        <Route path="/" element={<EmotionalSupport />} />
        <Route path="AngerManagement" element={<AngerManagement />} />
        <Route path="Obsession" element={<Obsession />} />
        <Route path="Loneliness" element={<Loneliness />} />
        <Route path="SexualWellness" element={<SexualWellness />} />
        <Route path="Family" element={<Family />} />
        <Route path="Depression" element={<Depression />} />
        <Route path="Sleep" element={<Sleep />} />
        <Route path="StressManagement" element={<StressManagement />} />
        <Route path="PastTrauma" element={<PastTrauma />} />
        <Route path="SelfEsteemIssues" element={<SelfEsteemIssues />} />
        <Route path="WorkLifeBalance" element={<WorkLifeBalance />} />
        <Route path="Grief" element={<Grief />} />
      </Routes>
    </div>
  );
};

export default EmotionalSupportHome;
