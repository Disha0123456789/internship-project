import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="up">
        <div onClick={() => navigate("/horoscope")} className="hero-card">
          <div className="hero-card-title">
            <h3 style={{fontSize:'inherit', fontWeight:'600', marginBottom:'0px'}}>Horoscope</h3>
          </div>
          <div className="hero-card-icon-container">
            <img
              src="/assets/top-row/horoscope.png"
              alt="2"
              className="hero-card-icon"
            />
          </div>
        </div>

        <div onClick={() => navigate("/kundli")} className="hero-card">
          <div className="hero-card-title">
            <h3 style={{fontSize:'inherit', fontWeight:'600', marginBottom:'0px'}}>Kundli</h3>
          </div>
          <div className="hero-card-icon-container">
            <img
              src="/assets/top-row/kundli.png"
              alt="1"
              className="hero-card-icon"
            />
          </div>
        </div>

        <div onClick={() => navigate("/Fortune_Wheel")} className="hero-card">
          <div className="hero-card-title">
            <h3 style={{fontSize:'inherit', fontWeight:'600', marginBottom:'0px'}}>Fortune Wheel</h3>
          </div>
          <div className="hero-card-icon-container">
            <img
              src="/assets/top-row/Fortune Wheel.png"
              alt="3"
              className="hero-card-icon"
            />
          </div>
        </div>
        
        <div onClick={() => navigate("/love_check")} className="hero-card">
          <div className="hero-card-title">
            <h3 style={{fontSize:'inherit', fontWeight:'600', marginBottom:'0px'}}>Love Check</h3>
          </div>
          <div className="hero-card-icon-container">
            <img
              src="/assets/top-row/love check.png"
              alt="3"
              className="hero-card-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
