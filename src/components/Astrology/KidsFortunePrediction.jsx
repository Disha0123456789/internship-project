import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function KidsFortunePrediction() {
  const navigate = useNavigate();
  const head = "Kids Fortune Prediction";
  const img = "./images/Marriage Consultation.png";
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
              Kids' fortune prediction involves forecasting a child's potential
              future based on astrological principles, examining celestial
              configurations at birth. It aims to provide insights into their
              personality traits, talents, challenges, and life paths. While not
              deterministic, it offers guidance for parents in nurturing their
              child's development and understanding their unique inclinations.
              This practice often considers factors like the child's sun sign,
              rising sign, and planetary placements to offer personalized
              guidance. However, its efficacy is subjective, and upbringing and
              environmental factors play significant roles in shaping a child's
              future. Ultimately, it serves as a tool for understanding and
              supporting a child's journey to adulthood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsFortunePrediction;
