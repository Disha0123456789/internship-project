//client
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Horoscope.css';
import Gemini from './Pages/Gemini';
import Home from './Pages/Home';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gemini" element={<Gemini />} />
      </Routes>
    </Router>
  );
}
