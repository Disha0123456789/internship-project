import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function WealthManagement() {
  const navigate = useNavigate();
  const head = "Wealth Management";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Wealth Management</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-wm"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Wealth Management involves the strategic management of an
              individual's financial resources and investments to achieve
              long-term financial goals. It encompasses various services such as
              investment advisory, financial planning, estate planning, tax
              optimization, and risk management, tailored to the client's needs
              and objectives for wealth preservation and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WealthManagement;
