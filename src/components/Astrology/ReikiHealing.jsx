import React, { useEffect }from "react";
//import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Reiki Healing.png';
function ReikiHealing() {
  const navigate = useNavigate();
  const head = "Reiki Healing";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Main-page">
      <div className="astro-Container">
        <div className="astro-Container-heading">
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
            Divine Connection's Reiki Healing is a holistic practice that channels universal life
              force energy to promote physical, emotional, and spiritual
              well-being. Practitioners use gentle touch or hands hovering over
              the body to transfer this energy, stimulating the body's natural
              healing processes.
              <br /><br />
              Reiki aims to balance the energy centers
              (chakras) within the body, releasing blockages and restoring
              harmony. It can alleviate stress, reduce pain, accelerate recovery
              from illness or injury, and enhance overall vitality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReikiHealing;