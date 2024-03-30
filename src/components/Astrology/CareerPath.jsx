import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function CareerPath() {
  const navigate = useNavigate();
  const head = "Career Path";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Career Path</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-cp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              A career path refers to the trajectory of professional advancement
              and development within a particular field or industry. It
              encompasses the various roles, skills, and experiences an
              individual accumulates over time, guiding their progress toward
              achieving personal and professional goals within their chosen
              vocation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
