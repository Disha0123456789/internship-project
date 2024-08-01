import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserBirthInput from './UserBirthInput';
import MainPage from './MainPage';
import LifeReport from '../../components/Kundli/LifeReport';
import SadeSati from '../../components/Kundli/SadeSati';

const MainHome = () => {
  return (
    <div>
      {/* Nested routes for main page and user birth input related services */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="UserBirthInput" element={<UserBirthInput />} />
        <Route path="sadesati" element={<SadeSati />} />
        <Route path="lifeReport" element={<LifeReport />} />
      </Routes>
    </div>
  );
};

export default MainHome;
