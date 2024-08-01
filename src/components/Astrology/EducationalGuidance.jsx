import React, { useEffect }from "react";
//import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Educational Guidance.png';
function EducationalGuidance() {
  const navigate = useNavigate();
  const head = "Educational Guidance";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Main-page">
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Educational Guidance</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-eg"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Educational guidance involves providing support and direction to
              individuals in their academic pursuits and personal development.
              It encompasses helping students make informed decisions about
              their educational pathways, career goals, and skill development.
              <br /><br />
              Guidance may include academic advising, career counseling, goal
              setting, and identifying learning opportunities tailored to
              individual needs and interests. Effective educational guidance
              fosters self-awareness, confidence, and motivation, empowering
              individuals to maximize their potential and achieve academic
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalGuidance;