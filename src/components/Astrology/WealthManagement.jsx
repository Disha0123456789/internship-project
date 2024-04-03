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
        <div className="conten">
          <div className="conten-left">
            <div className="img-wm"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Wealth management involves the professional management of an
              individual's or family's financial assets and investments. It
              encompasses a holistic approach to financial planning, considering
              factors such as risk tolerance, financial goals, tax
              considerations, and estate planning. Wealth managers offer
              personalized advice and services tailored to each client's unique
              needs, aiming to grow and preserve wealth over the long term.
              Services may include investment management, retirement planning,
              estate planning, tax optimization, and philanthropic giving. By
              providing comprehensive financial guidance and strategic
              solutions, wealth management helps individuals and families
              achieve financial security, optimize returns, and navigate complex
              financial decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WealthManagement;
