import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Parenting Tips.png';
function ParentingTips() {
  const navigate = useNavigate();
  const head = "Parenting Tips";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Parenting Tips</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-pt"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Parenting involves nurturing and guiding children towards healthy
              development. Encourage open communication, fostering trust and
              understanding. Set clear boundaries while allowing independence
              and autonomy within age-appropriate limits. Practice positive
              reinforcement to reinforce desired behaviors and provide
              constructive feedback.
              <br /><br />
              Prioritize quality time together, engaging
              in activities that promote bonding and mutual respect. Lead by
              example, demonstrating kindness, empathy, and resilience. Stay
              attuned to your child's emotions and needs, offering support and
              validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentingTips;