import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from './images/Career Path.png';
function CareerPath() {
  const navigate = useNavigate();
  const head = "Career Path";
  const img = image;
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Career Path</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-cp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              A career path is the journey an individual undertakes throughout
              their professional life, comprising their employment experiences,
              skill development, and advancement opportunities. It involves a
              series of steps and decisions, such as education, training, job
              changes, and promotions, aimed at achieving personal and
              professional goals. A well-defined career path aligns with one's
              interests, strengths, and aspirations, guiding progression towards
              fulfilling and rewarding roles. It may include lateral moves,
              upward mobility, or transitions between industries, all
              contributing to skill enhancement and expertise accumulation.
              Navigating a career path requires strategic planning,
              adaptability, and continuous learning to seize opportunities and
              achieve long-term success and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
