import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function EducationalGuidance() {
  const navigate = useNavigate();
  const head = "Educational Guidance";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Educational Guidance</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-eg"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Educational guidance involves providing support and direction to
              individuals in their academic pursuits and personal development.
              It encompasses helping students make informed decisions about
              their educational pathways, career goals, and skill development.
              Guidance may include academic advising, career counseling, goal
              setting, and identifying learning opportunities tailored to
              individual needs and interests. Effective educational guidance
              fosters self-awareness, confidence, and motivation, empowering
              individuals to maximize their potential and achieve academic
              success. It also addresses challenges such as study skills, time
              management, and overcoming obstacles, facilitating holistic growth
              and preparing students for future endeavors in academia and
              beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalGuidance;
