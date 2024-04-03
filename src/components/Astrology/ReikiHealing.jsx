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
        <div className="conten">
          <div className="conten-left">
            <div className="img-rh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Reiki Healing is a holistic practice that channels universal life
              force energy to promote physical, emotional, and spiritual
              well-being. Practitioners use gentle touch or hands hovering over
              the body to transfer this energy, stimulating the body's natural
              healing processes. Reiki aims to balance the energy centers
              (chakras) within the body, releasing blockages and restoring
              harmony. It can alleviate stress, reduce pain, accelerate recovery
              from illness or injury, and enhance overall vitality. Reiki is
              often used in conjunction with conventional medicine as a
              complementary therapy, offering relaxation, rejuvenation, and a
              sense of inner peace to individuals seeking holistic healing and
              wellness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReikiHealing;
