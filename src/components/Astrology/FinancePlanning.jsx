import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Finance Planning.png';
function FinancePlanning() {
  const navigate = useNavigate();
  const head = "Finance Planning";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Finance Planning</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-fp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Financial planning involves the systematic process of assessing an
              individual's or organization's financial situation, goals, and
              resources to develop strategies for achieving desired outcomes. It
              encompasses budgeting, saving, investing, retirement planning,
              risk management, and estate planning. By analyzing income,
              expenses, assets, and liabilities, financial planners tailor
              strategies to optimize wealth accumulation, minimize financial
              risks, and ensure long-term financial security. Effective
              financial planning considers short-term needs while also
              addressing long-term objectives, such as funding education, buying
              a home, or retiring comfortably. It serves as a roadmap for making
              informed financial decisions, adapting to changing circumstances,
              and ultimately achieving financial independence and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancePlanning;
