import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function BusinessStrategies() {
  const navigate = useNavigate();
  const head = "Business Strategies";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Business Strategies</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-bs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Business strategies encompass the deliberate actions and plans a
              company employs to achieve its objectives and gain a competitive
              advantage in the market. These strategies typically involve
              decisions regarding product development, pricing, marketing,
              distribution, and resource allocation, all aimed at maximizing
              profitability and sustaining long-term growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessStrategies;
