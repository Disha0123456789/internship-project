import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function LegalAdvice() {
  const navigate = useNavigate();
  const head = "Legal Advice";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Legal Advice</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-la"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Legal advice is guidance provided by a qualified legal
              professional regarding legal rights, obligations, and options in a
              particular situation. It encompasses interpretation of laws,
              strategies for legal proceedings, and recommendations for actions
              to protect one's interests within the framework of applicable laws
              and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalAdvice;
