import React from "react";
import "./Cards.css";
import { useLocation } from "react-router-dom";
// import IMG from "./IMGS/red result background.jpg";
import IMG from "./IMGS/result card.png";
const TarotResult = () => {
  const loc = useLocation();
  console.log(loc.state.cardtext[loc.state.card][1]);

  return (
    <div className="Result-Tarot">
      <div className="result-card">
        <div className="tarot-head">
          <h1>{loc.state.heads}</h1>
        </div>
        <div className="card-image">
          <img src={IMG} alt="" />
          <h3>{loc.state.cardhead[loc.state.card]}</h3>
        </div>
        <div className="result-info">
          <div className="info">
            <p>{loc.state.cardtext[loc.state.card][0]}</p>
            <br />
            <p>{loc.state.cardtext[loc.state.card][1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotResult;
