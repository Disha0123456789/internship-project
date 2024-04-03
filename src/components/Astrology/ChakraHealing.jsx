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
        <div className="conten">
          <div className="conten-left">
            <div className="img-ch"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Chakra healing is a holistic practice rooted in Eastern
              philosophy, aiming to balance the body's energy centers or
              chakras. These seven energy points, aligned along the spine, are
              believed to correspond to physical, emotional, and spiritual
              aspects of life. Through various techniques like meditation, yoga,
              Reiki, and crystal therapy, practitioners seek to remove blockages
              and restore harmony within the chakras. Balanced chakras are
              thought to promote overall well-being, emotional stability, and
              spiritual growth, fostering a sense of inner peace and vitality.
              Chakra healing acknowledges the interconnectedness of mind, body,
              and spirit, offering a pathway to holistic health and
              self-awareness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChakraHealing;
