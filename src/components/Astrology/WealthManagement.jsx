import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Wealth Management.png';
function WealthManagement() {
  const navigate = useNavigate();
  const head = "Wealth Management";
  const img = image;
  return (
    <div>
      <div className="astro-Container">
        <div className="astro-Container-heading">
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
            Divine Connection's Wealth management involves the professional management of an
              individual's or family's financial assets and investments. It
              encompasses a holistic approach to financial planning, considering
              factors such as risk tolerance, financial goals, tax
              considerations, and estate planning.
              <br /><br />
              Wealth managers offer
              personalized advice and services tailored to each client's unique
              needs, aiming to grow and preserve wealth over the long term.
              Services may include investment management, retirement planning,
              estate planning, tax optimization, and philanthropic giving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WealthManagement;