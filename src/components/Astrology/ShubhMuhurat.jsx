import React, { useEffect }from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Shubh Muhurat.png';
function ShubhMuhurat() {
  const navigate = useNavigate();
  const head = "Shubh Muhurat";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Shubh Muhurat</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-sm"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Shubh Muhurat, in Hindu tradition, signifies auspicious timings or
              moments aligned with planetary positions deemed favorable for
              various activities like weddings, inaugurations, or religious
              ceremonies. These timings are determined by Vedic astrological
              calculations, considering factors like planetary alignments, lunar
              phases, and other astrological parameters.
              <br /><br />
              Observing Shubh Muhurat
              is believed to bring blessings, harmony, and success to endeavors,
              ensuring they commence under auspicious cosmic influences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShubhMuhurat;