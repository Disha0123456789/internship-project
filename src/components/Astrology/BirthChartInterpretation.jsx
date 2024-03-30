import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

function BirthChartInterpretation() {
  const navigate = useNavigate();
  const head = "Birth Chart Interpretation";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Birth Chart Interpretation</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-bci"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Birth chart interpretation involves analyzing the positions of
              celestial bodies at the time of an individual's birth. This
              includes the Sun, Moon, planets, and astrological points,
              providing insights into personality traits, strengths, weaknesses,
              and potential life experiences. It helps understand one's unique
              cosmic blueprint and navigate life's challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthChartInterpretation;
