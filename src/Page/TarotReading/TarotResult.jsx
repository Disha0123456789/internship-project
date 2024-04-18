// TarotResult.js
import React from "react";
import { useLocation } from "react-router-dom";
import IMG from "/IMGS/result card.png";

const TarotResult = () => {
  const loc = useLocation();
  
  return (
    <div className="Result-Tarot">
      <div className="tarot-result-card">
        <div className="tarot-head">
          <h1>{loc.state.head}</h1>
        </div>
        <div className="tarot-card-image">
          <img src={IMG} alt="" />
          <h3>{loc.state.title}</h3>
        </div>
        <div className="tarot-result-info">
          <div className="tarot-info">
          <p>{loc.state.heading}</p>
            <p>{loc.state.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotResult;
