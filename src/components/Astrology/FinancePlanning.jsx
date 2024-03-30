import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function FinancePlanning() {
  const navigate = useNavigate();
  const head = "Finance Planning";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Finance Planning</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-fp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Financial planning involves creating strategies to manage your
              finances effectively. It includes setting financial goals,
              budgeting, saving, investing, and managing debt. By assessing your
              current financial situation and developing a plan tailored to your
              objectives, financial planning helps you achieve financial
              security, build wealth, and work towards long-term financial
              success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePlanning;
