import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function CrystalHealing() {
  const navigate = useNavigate();
  const head = "Crystal Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Crystal Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-crh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Crystal healing is a holistic practice that involves using
              crystals and gemstones to promote physical, emotional, and
              spiritual well-being. Advocates believe that each crystal
              possesses unique properties that can interact with the body's
              energy fields to restore balance and encourage healing. However,
              scientific evidence supporting its efficacy is limited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrystalHealing;
