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
              Business strategies are purposeful maneuvers and plans adopted by
              a company to attain its goals and outperform competitors in the
              market. They encompass decisions on product development, pricing,
              marketing, distribution, and resource allocation, all geared
              toward enhancing profitability and ensuring sustained growth over
              the long term. Effective strategies align with the company's
              mission and market dynamics, leveraging strengths while addressing
              weaknesses. By strategically positioning products or services,
              optimizing pricing strategies, and allocating resources
              efficiently, businesses aim to gain a competitive edge, capture
              market share, and build enduring success in a dynamic and evolving
              business landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessStrategies;
