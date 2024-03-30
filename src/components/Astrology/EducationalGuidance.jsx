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
              Educational guidance involves providing support and advice to
              individuals in navigating their educational journey. This includes
              assistance in choosing appropriate courses, colleges, or career
              paths, as well as helping students develop academic skills and
              strategies for success. The aim is to empower learners to make
              informed decisions about their education and future endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationalGuidance;
