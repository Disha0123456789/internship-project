import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FaceRead from './Faceread';
import Faceresult from './Faceresult';
import Timemagicresult from './Timemagicresult';
import Ancestors from './Ancestors';

const FaceReadHome = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FaceRead />} />
        <Route path="faceresult" element={<Faceresult />} />
        <Route path="timemagicresult" element={<Timemagicresult />} />
        <Route path="ancestors" element={<Ancestors />} />
      </Routes>
    </div>
  );
};

export default FaceReadHome;
