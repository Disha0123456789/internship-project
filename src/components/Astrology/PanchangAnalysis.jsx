import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function PanchangAnalysis() {
  const navigate = useNavigate();
  const head = "Panchang Analysis";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Panchang Analysis</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-pa"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Panchang Analysis involves interpreting traditional Hindu
              astrological calendars known as "Panchangs." It examines celestial
              positions, lunar phases, planetary transits, and auspicious
              timings to guide decisions in areas such as rituals, ceremonies,
              and daily activities. This analysis provides insights into cosmic
              influences on personal and societal events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanchangAnalysis;
