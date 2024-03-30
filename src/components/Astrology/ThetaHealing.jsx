import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ThetaHealing() {
  const navigate = useNavigate();
  const head = "Theta Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Theta Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-th"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Theta Healing is a holistic healing technique that aims to
              identify and shift limiting beliefs stored in the subconscious
              mind. Practitioners access the theta brainwave state to facilitate
              healing on physical, emotional, and spiritual levels. Through
              focused intention and energy work, individuals can release
              blockages and promote positive change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThetaHealing;
