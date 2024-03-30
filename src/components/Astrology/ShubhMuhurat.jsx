import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ShubhMuhurat() {
  const navigate = useNavigate();
  const head = "Shubh Muhurat";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Shubh Muhurat</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-sm"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              "Shubh Muhurat" refers to auspicious timings in Hindu astrology,
              considered favorable for initiating important activities or
              ceremonies like weddings, housewarming, or business ventures.
              Determined by planetary positions, these timings ensure harmony
              and success. Following Shubh Muhurat enhances the likelihood of
              positive outcomes and blessings in various life events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShubhMuhurat;
