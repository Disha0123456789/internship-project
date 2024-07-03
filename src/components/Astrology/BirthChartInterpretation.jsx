import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Birth Chart Interpretation.png';
function BirthChartInterpretation() {
  const navigate = useNavigate();
  const head = "Birth Chart Interpretation";
  const img = image;
  return (
    <div>
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Birth Chart Interpretation</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-bci"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Using Divine Connection's Birth chart interpretation is a deep analysis of celestial bodies'
              positions at an individual's birth, including the Sun, Moon,
              planets, and astrological points. It unveils personality traits,
              strengths, weaknesses, and potential life experiences. This
              profound understanding of one's cosmic blueprint enables effective
              navigation through life's challenges and opportunities.
              <br /><br />
              By decoding the unique alignment of the stars and planets,
              individuals gain insight into their purpose, relationships, career
              paths, and personal development. It serves as a guiding tool for
              self-discovery, growth, and making informed decisions aligned with
              one's inherent nature and destiny, fostering a fulfilling and
              harmonious life journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BirthChartInterpretation;