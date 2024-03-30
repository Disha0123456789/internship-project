import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function RemediesSolution() {
  const navigate = useNavigate();
  const head = "Remedies Solution";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Remedies Solution</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-rs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Remedies Solution offers a comprehensive approach to health and
              wellness, providing effective remedies for various ailments and
              challenges. With a focus on natural and holistic methods, Remedies
              Solution combines traditional wisdom with modern research to
              deliver accessible and practical solutions for individuals seeking
              to improve their overall well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemediesSolution;
