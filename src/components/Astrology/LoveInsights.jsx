import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function LoveInsights() {
  const navigate = useNavigate();
  const head = "Love Insights";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Love Insights</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-li"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Love Insights offers profound understandings into the complexities
              of human relationships, distilling wisdom from various
              perspectives. Through introspection, psychology, and experience,
              it delves into the nuances of love, offering invaluable guidance
              for navigating emotions, communication, and connection in romantic
              partnerships, friendships, and familial bonds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveInsights;
