import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Chakra Healing.png';
function ChakraHealing() {
  const navigate = useNavigate();
  const head = "Chakra Healing";
  const img = image;
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
            Divine Connection's Chakra healing is a holistic practice rooted in Eastern
              philosophy, aiming to balance the body's energy centers or
              chakras. These seven energy points, aligned along the spine, are
              believed to correspond to physical, emotional, and spiritual
              aspects of life. Through various techniques like meditation, yoga,
              Reiki, and crystal therapy, practitioners seek to remove blockages
              and restore harmony within the chakras.
              <br /><br />
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
