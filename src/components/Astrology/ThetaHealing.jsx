import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ThetaHealing() {
  const navigate = useNavigate();
  const head = "Theta Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Theta Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-th"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Theta Healing is a holistic healing technique rooted in accessing
              the theta brainwave state to facilitate profound emotional,
              physical, and spiritual transformations. Practitioners use focused
              intention and visualization to identify and release limiting
              beliefs stored in the subconscious mind, replacing them with
              empowering beliefs. By harnessing the theta brainwave frequency,
              individuals can address deeply rooted issues, heal past traumas,
              and manifest desired outcomes. This modality emphasizes the
              connection between thoughts, emotions, and physical well-being,
              promoting holistic healing and personal growth. Through Theta
              Healing, individuals can cultivate self-awareness, inner harmony,
              and a greater sense of empowerment to create positive changes in
              their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThetaHealing;
