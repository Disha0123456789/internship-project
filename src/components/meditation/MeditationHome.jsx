import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Meditation from './Meditation';
import DailyMeditation from './DailyMeditation';
import ChakraMeditation from './ChakraMeditation';
import SleepMeditation from './SleepMeditation';
import FiveMinMeditation from './FiveMinMeditation';
import Mindfulness from './Mindfulness';
import PositiveMeditation from './PositiveMeditation';
import BeginnerMeditation from './BeginnerMeditation';
import MentalHealthMeditation from './MentalHealthMeditation';
import EpicPowerMeditation from './EpicPowerMeditation';

const MeditationHome = () => {
  return (
    <div>
      {/* Nested routes for meditation services */}
      <Routes>
        <Route path="/" element={<Meditation />} />
        <Route path="MindfullnessMeditation" element={<Mindfulness />} />
        <Route path="DailyMeditation" element={<DailyMeditation />} />
        <Route path="ChakraMeditation" element={<ChakraMeditation />} />
        <Route path="SleepMeditation" element={<SleepMeditation />} />
        <Route path="5MinsMeditation" element={<FiveMinMeditation />} />
        <Route path="EpicPowerMeditation" element={<EpicPowerMeditation />} />
        <Route path="BeginnerMeditation" element={<BeginnerMeditation />} />
        <Route path="MentalHealthMeditation" element={<MentalHealthMeditation />} />
        <Route path="PositiveMindMeditation" element={<PositiveMeditation />} />
      </Routes>
    </div>
  );
};

export default MeditationHome;
