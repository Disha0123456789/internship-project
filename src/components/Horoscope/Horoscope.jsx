//horoscope_backend_nodjs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import './Horoscope.css';
import Gemini from './Pages/Gemini';
import Home from './Pages/Home';
import CardImage from './Pages/CardImage';
import Content from './Pages/Content';
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cardImage" element={<CardImage />} />
        <Route path="gemini" element={<Gemini />} />
        <Route path="content" element={<Content />} />
      </Routes>
  );
}
