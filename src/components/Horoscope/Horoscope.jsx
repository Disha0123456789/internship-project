//client
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Horoscope.css';
import Gemini from './Pages/Gemini';
import Home from './Pages/Home';
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gemini' element={<Gemini/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}
