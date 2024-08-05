import React, { useEffect }from "react";
//import "../../assets/AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Remedies & Solutions.png';
function RemediesSolution() {
  const navigate = useNavigate();
  const head = "Remedies Solution";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Main-page">
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Remedies Solution</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-rs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
            Divine Connection's Remedies are solutions or actions taken to address problems,
              resolve conflicts, or alleviate difficulties encountered in
              various situations. They can range from simple fixes to complex
              interventions tailored to specific issues.
              <br /><br />
              In legal contexts,
              remedies refer to measures taken to rectify breaches of contract
              or infringements of rights, such as compensation or injunctive
              relief. In healthcare, remedies may include medications,
              therapies, or lifestyle changes to treat illnesses or promote
              well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemediesSolution;