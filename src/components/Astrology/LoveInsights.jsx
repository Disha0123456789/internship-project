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
              Love insights delve into understanding romantic relationships,
              emotions, and connections. They explore the dynamics of affection,
              compatibility, and intimacy between individuals. Through
              introspection and communication, love insights illuminate aspects
              such as communication styles, emotional needs, and relationship
              patterns. They help navigate challenges, foster deeper
              connections, and cultivate mutual understanding and respect. By
              recognizing personal values, desires, and boundaries, individuals
              can forge meaningful and fulfilling partnerships. Love insights
              promote empathy, vulnerability, and growth within relationships,
              nurturing love's evolution and creating spaces for genuine
              emotional expression, trust, and harmony in romantic connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveInsights;
