import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Personalized Pooja.png';
function PersonalizedPooja() {
  const navigate = useNavigate();
  const head = "Personalized Pooja";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Personalized Pooja</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-pp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Personalized pooja involves tailoring traditional Hindu rituals
              and prayers to an individual's specific needs, desires, or
              circumstances. It could include selecting particular deities,
              mantras, offerings, and rituals based on one's spiritual goals,
              challenges, or blessings sought.
              <br /><br />
              This customization allows for a
              more intimate and meaningful connection with the divine, fostering
              a deeper sense of devotion, gratitude, and spiritual growth.
              Whether performed for seeking blessings, resolving obstacles, or
              expressing gratitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedPooja;