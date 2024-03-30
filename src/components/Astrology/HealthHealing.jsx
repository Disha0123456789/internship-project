import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function HealthHealing() {
  const navigate = useNavigate();
  const head = "Health Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Health Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-hh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Health healing encompasses the process of restoring and enhancing
              an individual's well-being, addressing physical, mental,
              emotional, and spiritual aspects. It involves medical treatments,
              holistic approaches, lifestyle changes, emotional support, and
              sometimes alternative therapies. The goal is to facilitate the
              body's natural healing mechanisms and promote overall health and
              vitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthHealing;
