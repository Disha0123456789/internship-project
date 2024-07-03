import React,{useEffect} from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

function AstroMain() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="astrology">
      <div className="Head-Text">
        <h1>Astrology</h1>
        <div className="callchat-button">
          <button
            onClick={() => navigate("/AstroMain")}
            className="buttons btn-call1"
          >
          <i className="fa-solid fa-phone"></i> Call
          </button>
          <button
            onClick={() => navigate("/AstroMainChat")}
            className="buttons"
          >
          <i className="fa-solid fa-comment-dots"></i> Chat
          </button>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-container-main">
          <div
            onClick={() => navigate("/marriageConsultation")}
            className="grid-items bg-mc"
          >
            <div className="info">
              <div className="heading">
                <h2>Marriage Consultation</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/marriageConsultation")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/healthHealing")} className="grid-items bg-hh">
            <div className="info">
              <div className="heading">
                <h2>Health Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/healthHealing")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/wealthManagement")} className="grid-items bg-wh">
            <div className="info">
              <div className="heading">
                <h2>Wealth Management</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/wealthManagement")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/loveInsights")} className="grid-items bg-li">
            <div className="info">
              <div className="heading">
                <h2>Love Insights</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/loveInsights")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div className="grid-items bg-eg">
            <div className="info">
              <div className="heading">
                <h2>Educational Guidance</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/educationalGuidance")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/careerPath")} className="grid-items bg-cp">
            <div className="info">
              <div className="heading">
                <h2>Career Path</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/careerPath")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/businessStrategies")} className="grid-items bg-bs">
            <div className="info">
              <div className="heading">
                <h2>Business Strategies</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/businessStrategies")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/financePlanning")} className="grid-items bg-fp">
            <div className="info">
              <div className="heading">
                <h2>Finance Planning</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/financePlanning")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/legalAdvice")} className="grid-items bg-la">
            <div className="info">
              <div className="heading">
                <h2>Legal Advice</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/legalAdvice")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/remediesSolutions")} className="grid-items bg-rs">
            <div className="info">
              <div className="heading">
                <h2>Remedies &amp; Solutions</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/remediesSolutions")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/kidsFortune")} className="grid-items bg-kfp">
            <div className="info">
              <div className="heading">
                <h2>Kids Fortune Prediction</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/kidsFortune")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/parentingTips")} className="grid-items bg-pt">
            <div className="info">
              <div className="heading">
                <h2>Parenting Tips</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/parentingTips")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/panchangAnalysis")} className="grid-items bg-pa">
            <div className="info">
              <div className="heading">
                <h2>Panchang Analysis</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/panchangAnalysis")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/birthChart")} className="grid-items bg-bci">
            <div className="info">
              <div className="heading">
                <h2>Birth Chart Interpretation</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/birthChart")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/shubhMuhurat")} className="grid-items bg-sm">
            <div className="info">
              <div className="heading">
                <h2>Shubh Muhurat</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/shubhMuhurat")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/personalizedPooja")} className="grid-items bg-pp">
            <div className="info">
              <div className="heading">
                <h2>Personalized Pooja</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/personalizedPooja")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/thetaHealing")} className="grid-items bg-th">
            <div className="info">
              <div className="heading">
                <h2>Theta Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/thetaHealing")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/reikiHealing")} className="grid-items bg-rh">
            <div className="info">
              <div className="heading">
                <h2>Reiki Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/reikiHealing")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/chakraHealing")} className="grid-items bg-ch">
            <div className="info">
              <div className="heading">
                <h2>Chakra Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/chakraHealing")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/crystalHealing")} className="grid-items bg-crh">
            <div className="info">
              <div className="heading">
                <h2>Crystal Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button className="book-call" disabled>
              ₹3.5/min
            </button>
            <button
              onClick={() => navigate("/crystalHealing")}
              className="book-chat"
            >
              <i className="fa-solid fa-phone"></i>Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AstroMain;
