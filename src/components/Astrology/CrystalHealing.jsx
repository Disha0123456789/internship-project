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
        <div className="conten">
          <div className="conten-left">
            <div className="img-crh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Crystal healing is a holistic practice that utilizes the energetic
              properties of crystals to promote healing and balance in the mind,
              body, and spirit. Believers assert that each crystal emits a
              unique vibration that can interact with the body's energy fields,
              facilitating physical, emotional, and spiritual well-being.
              Practitioners may place crystals on or around the body,
              incorporate them into meditation or rituals, or wear them as
              jewelry. While scientific evidence supporting crystal healing's
              efficacy is limited, many find it beneficial for relaxation,
              stress relief, and enhancing mindfulness. It's often used as a
              complementary therapy alongside conventional medical treatments
              for holistic wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrystalHealing;
