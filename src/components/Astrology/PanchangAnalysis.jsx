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
        <div className="conten">
          <div className="conten-left">
            <div className="img-pa"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Panchang analysis is a traditional Hindu practice involving the
              study of the Panchang, a comprehensive astrological calendar. It
              includes detailed information on planetary positions, lunar
              phases, auspicious and inauspicious timings, and religious events.
              Through this analysis, individuals and communities assess
              favorable moments for important activities like weddings,
              housewarming ceremonies, and business ventures. It also guides in
              observing religious festivals and conducting rituals at auspicious
              times. Panchang analysis aids in aligning actions with cosmic
              energies, promoting harmony, success, and spiritual well-being. It
              serves as a practical tool for optimizing decision-making and
              planning in various aspects of life according to astrological
              principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanchangAnalysis;
