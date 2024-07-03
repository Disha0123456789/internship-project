import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Panchang Analysis.png';
function PanchangAnalysis() {
  const navigate = useNavigate();
  const head = "Panchang Analysis";
  const img = image;
  return (
    <div>
      <div className="astro-Container">
        <div className="astro-Container-heading">
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
            Divine Connection's Panchang analysis is a traditional Hindu practice involving the
              study of the Panchang, a comprehensive astrological calendar. It
              includes detailed information on planetary positions, lunar
              phases, auspicious and inauspicious timings, and religious events.
              Through this analysis, individuals and communities assess
              favorable moments for important activities like weddings,
              housewarming ceremonies, and business ventures.
              <br /><br />
              It also guides in
              observing religious festivals and conducting rituals at auspicious
              times. Panchang analysis aids in aligning actions with cosmic
              energies, promoting harmony, success, and spiritual well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanchangAnalysis;