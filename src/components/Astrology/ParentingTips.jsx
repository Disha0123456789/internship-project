import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ParentingTips() {
  const navigate = useNavigate();
  const head = "Parenting Tips";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Parenting Tips</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-pt"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Parenting is a rewarding yet challenging journey. Here are some
              tips to help navigate it effectively: Listen to your child
              actively, set clear and consistent boundaries, lead by example,
              prioritize quality time together, encourage open communication,
              and remember to take care of yourself too. Consistency and
              patience are key.s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentingTips;
