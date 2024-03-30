import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ReikiHealing() {
  const navigate = useNavigate();
  const head = "Reiki Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Reiki Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-rh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Reiki Healing is a holistic practice originating from Japan that
              utilizes the channeling of universal life force energy to promote
              relaxation and facilitate the body's natural healing processes.
              Practitioners gently place their hands on or above the recipient's
              body to help restore physical, emotional, and spiritual balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReikiHealing;
