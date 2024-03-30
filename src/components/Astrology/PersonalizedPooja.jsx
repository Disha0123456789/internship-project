import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function PersonalizedPooja() {
  const navigate = useNavigate();
  const head = "Personalized Pooja";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Personalized Pooja</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-pp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Personalized Pooja refers to a customized worship ritual tailored
              to an individual's specific spiritual needs, preferences, and
              intentions. It involves selecting specific deities, mantras,
              offerings, and rituals based on factors such as one's beliefs,
              astrological considerations, or personal aspirations. This
              personalized approach enhances spiritual connection and
              fulfillment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedPooja;
