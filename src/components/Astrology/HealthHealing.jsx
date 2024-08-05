import React, { useEffect }from "react";
//import "../../assets/AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Health Healing.png';
function HealthHealing() {
  const navigate = useNavigate();
  const head = "Health Healing";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Main-page">
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Health Healing</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-hh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Health healing involves restoring balance and vitality to the
              body, mind, and spirit. It encompasses holistic approaches to
              address physical ailments, mental health issues, and emotional
              well-being. Healing practices may include conventional medicine,
              alternative therapies, lifestyle changes, and spiritual practices.
              <br /><br />
              By addressing root causes rather than just symptoms, health
              healing promotes overall wellness and resilience. It emphasizes
              the body's innate ability to heal itself when supported with
              proper nutrition, exercise, rest, and stress management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthHealing;