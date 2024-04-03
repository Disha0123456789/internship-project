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
        <div className="conten">
          <div className="conten-left">
            <div className="img-rs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Remedies are solutions or actions taken to address problems,
              resolve conflicts, or alleviate difficulties encountered in
              various situations. They can range from simple fixes to complex
              interventions tailored to specific issues. In legal contexts,
              remedies refer to measures taken to rectify breaches of contract
              or infringements of rights, such as compensation or injunctive
              relief. In healthcare, remedies may include medications,
              therapies, or lifestyle changes to treat illnesses or promote
              well-being. Overall, remedies aim to mitigate negative impacts,
              restore balance, and facilitate positive outcomes, whether in
              legal, medical, or everyday contexts, ultimately fostering
              resolution, healing, and progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemediesSolution;
