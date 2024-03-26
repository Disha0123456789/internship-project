import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function AstroMain() {
  const navigate = useNavigate(); 
  return (
    <div className="astrology">
      <div className="Head-Text">
        <h1>Astrology</h1>
      </div>
      <div className="grid-container">
        <div onClick={() => navigate("/marriageConsultation")} className="grid-items bg-mc">
          <div className="info">
            <h2>
              Marriage <br />
              Consultation
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/healthHealing")} className="grid-items bg-hh">
          <div className="info">
            <h2>
              Health <br />
              Healing
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/wealthManagement")} className="grid-items bg-wh">
          <div className="info">
            <h2>
              Wealth <br />
              Management
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/loveInsights")} className="grid-items bg-li">
          <div className="info">
            <h2>
              Love <br />
              Insights
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/educationalGuidance")} className="grid-items bg-eg">
          <div className="info">
            <h2>
              Educational <br />
              Guidance
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/careerPath")} className="grid-items bg-cp">
          <div className="info">
            <h2>
              Career <br />
              Path
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/businessStrategies")} className="grid-items bg-bs">
          <div className="info">
            <h2>
              Business <br />
              Strategies
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/financePlanning")} className="grid-items bg-fp">
          <div className="info">
            <h2>
              Finance <br />
              Planning
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/legalAdvice")} className="grid-items bg-la">
          <div className="info">
            <h2>
              Legal <br />
              Advice
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/remediesSolutions")} className="grid-items bg-rs">
          <div className="info">
            <h2>
              Remedies &amp; <br />
              Solutions
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/kidsFortune")} className="grid-items bg-kfp">
          <div className="info">
            <h2>
              Kids Fortune <br />
              Prediction
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/parentingTips")} className="grid-items bg-pt">
          <div className="info">
            <h2>
              Parenting <br />
              Tips
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/panchangAnalysis")} className="grid-items bg-pa">
          <div className="info">
            <h2>
              Panchang <br />
              Analysis
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/birthChart")} className="grid-items bg-bci">
          <div className="info">
            <h2>
              Birth Chart <br />
              Interpretation
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/shubhMuhurat")} className="grid-items bg-sm">
          <div className="info">
            <h2>
              Shubh <br />
              Muhurat
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/personalizedPooja")} className="grid-items bg-pp">
          <div className="info">
            <h2>
              Personalized <br />
              Pooja
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/thetaHealing")} className="grid-items bg-th">
          <div className="info">
            <h2>
              Theta <br />
              Healing
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/reikiHealing")} className="grid-items bg-rh">
          <div className="info">
            <h2>
              Reiki <br />
              Healing
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/chakraHealing")} className="grid-items bg-ch">
          <div className="info">
            <h2>
              Chakra <br />
              Healing
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
        <div onClick={() => navigate("/crystalHealing")} className="grid-items bg-crh">
          <div className="info">
            <h2>
              Crystal <br />
              Healing
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstroMain;
