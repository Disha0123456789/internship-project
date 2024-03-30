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
        <div className="content">
          <div className="content-left">
            <div className="img-kfp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Kids Fortune Prediction is a fun activity where children predict
              their future based on playful interpretations of their interests,
              talents, and aspirations. Using imagination and creativity, kids
              envision what they may become when they grow up, sparking
              excitement and curiosity about their potential paths in life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsFortunePrediction;
