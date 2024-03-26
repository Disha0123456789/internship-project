import React from 'react';
import "./style.css";
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
            <img src="../images/Marriage Consultation.png" alt="" />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              A marriage consultation offers couples a platform to address
              concerns, enhance communication, and strengthen their
              relationship. Through facilitated discussions, couples can explore
              challenges, identify goals, and develop strategies for resolving
              conflicts. These sessions provide valuable insights, tools, and
              support to foster a healthier and more fulfilling marital bond.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationalGuidance;
