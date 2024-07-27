import React, { useEffect }from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Career Path.png';
function CareerPath() {
  const navigate = useNavigate();
  const head = "Career Path";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="astro-Container">
        <div className="astro-Container-heading">
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
            Using Divine Connection's career path is the journey an individual
              undertakes throughout their professional life, comprising their
              employment experiences, skill development, and advancement
              opportunities. It involves a series of steps and decisions, such
              as education, training, job changes, and promotions, aimed at
              achieving personal and professional goals.
              <br /><br />
              A well-defined career
              path aligns with one's interests, strengths, and aspirations,
              guiding progression towards fulfilling and rewarding roles. It may
              include lateral moves, upward mobility, or transitions between
              industries, all contributing to skill enhancement and expertise
              accumulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;