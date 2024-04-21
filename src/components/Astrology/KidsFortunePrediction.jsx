import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Kids Fortune Prediction.png';
function KidsFortunePrediction() {
  const navigate = useNavigate();
  const head = "Kids Fortune Prediction";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Kids Fortune Prediction</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-kfp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Kids' fortune prediction involves forecasting a child's potential
              future based on astrological principles, examining celestial
              configurations at birth. It aims to provide insights into their
              personality traits, talents, challenges, and life paths.
              <br /><br />
              While not
              deterministic, it offers guidance for parents in nurturing their
              child's development and understanding their unique inclinations.
              This practice often considers factors like the child's sun sign,
              rising sign, and planetary placements to offer personalized
              guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsFortunePrediction;