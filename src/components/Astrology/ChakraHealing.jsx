import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ChakraHealing() {
  const navigate = useNavigate();
  const head = "Chakra Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Chakra Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-ch"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Chakra healing is a holistic practice that focuses on balancing
              the body's energy centers, known as chakras, to promote physical,
              emotional, and spiritual well-being. Through various techniques
              such as meditation, yoga, and energy work, chakra healing aims to
              remove blockages and restore the harmonious flow of energy
              throughout the body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChakraHealing;
