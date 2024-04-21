import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Love Insights.png';
function LoveInsights() {
  const navigate = useNavigate();
  const head = "Love Insights";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Love Insights</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-li"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Love insights delve into understanding romantic relationships,
              emotions, and connections. They explore the dynamics of affection,
              compatibility, and intimacy between individuals. Through
              introspection and communication, love insights illuminate aspects
              such as communication styles, emotional needs, and relationship
              patterns.
              <br /><br />
              They help navigate challenges, foster deeper
              connections, and cultivate mutual understanding and respect. By
              recognizing personal values, desires, and boundaries, individuals
              can forge meaningful and fulfilling partnerships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveInsights;