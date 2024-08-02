import React from "react";
//import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

function AstroMainChat() {
  const navigate = useNavigate();
  return (
    <div className="astrology">
      <div className="Head-Text">
        <h1>Astrology</h1>
        <div className="callchat-button">
          <button onClick={() => navigate("/AstroHome")} className="buttons">
            <i className="fa-solid fa-phone"></i> Call
          </button>
          <hr className="callchat-hr"/>
          <button
            onClick={() => navigate("/AstroHome/AstroMainChat")}
            className="buttons btn-call2"
          >
            <i class="fa-solid fa-comment-dots"></i> Chat
          </button>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/marriageConsultation")} className="grid-items bg-mc">
            <div className="info">
              <div className="heading">
                <h2>Marriage Consultation</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/marriageConsultation")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/healthHealing")} className="grid-items bg-hh">
            <div className="info">
              <div className="heading">
                <h2>Health Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/healthHealing")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/wealthManagement")} className="grid-items bg-wh">
            <div className="info">
              <div className="heading">
                <h2>Wealth Management</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/wealthManagement")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/loveInsights")} className="grid-items bg-li">
            <div className="info">
              <div className="heading">
                <h2>Love Insights</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/loveInsights")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/educationalGuidance")} className="grid-items bg-eg">
            <div className="info">
              <div className="heading">
                <h2>Educational Guidance</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/educationalGuidance")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/careerPath")} className="grid-items bg-cp">
            <div className="info">
              <div className="heading">
                <h2>Career Path</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/careerPath")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/businessStrategies")} className="grid-items bg-bs">
            <div className="info">
              <div className="heading">
                <h2>Business Strategies</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/businessStrategies")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/financePlanning")} className="grid-items bg-fp">
            <div className="info">
              <div className="heading">
                <h2>Finance Planning</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/financePlanning")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/legalAdvice")} className="grid-items bg-la">
            <div className="info">
              <div className="heading">
                <h2>Legal Advice</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/legalAdvice")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/remediesSolutions")} className="grid-items bg-rs">
            <div className="info">
              <div className="heading">
                <h2>Remedies &amp; Solutions</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/remediesSolutions")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/kidsFortune")} className="grid-items bg-kfp">
            <div className="info">
              <div className="heading">
                <h2>Kids Fortune Prediction</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/kidsFortune")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/parentingTips")} className="grid-items bg-pt">
            <div className="info">
              <div className="heading">
                <h2>Parenting Tips</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/parentingTips")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/panchangAnalysis")} className="grid-items bg-pa">
            <div className="info">
              <div className="heading">
                <h2>Panchang Analysis</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/panchangAnalysis")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/birthChart")} className="grid-items bg-bci">
            <div className="info">
              <div className="heading">
                <h2>Birth Chart Interpretation</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/birthChart")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/shubhMuhurat")} className="grid-items bg-sm">
            <div className="info">
              <div className="heading">
                <h2>Shubh Muhurat</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/shubhMuhurat")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/personalizedPooja")} className="grid-items bg-pp">
            <div className="info">
              <div className="heading">
                <h2>Personalized Pooja</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/personalizedPooja")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/thetaHealing")} className="grid-items bg-th">
            <div className="info">
              <div className="heading">
                <h2>Theta Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/thetaHealing")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/reikiHealing")} className="grid-items bg-rh">
            <div className="info">
              <div className="heading">
                <h2>Reiki Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/reikiHealing")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/chakraHealing")} className="grid-items bg-ch">
            <div className="info">
              <div className="heading">
                <h2>Chakra Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/chakraHealing")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
        <div className="grid-container-main">
          <div onClick={() => navigate("/AstroHome/crystalHealing")} className="grid-items bg-crh">
            <div className="info">
              <div className="heading">
                <h2>Crystal Healing</h2>
              </div>
            </div>
          </div>
          <div className="button-container panchang">
            <button className="book-call" disabled>
              ₹1/msg
            </button>
            <button
              onClick={() => navigate("/AstroHome/crystalHealing")}
              className="book-chat"
            >
              <i class="fa-solid fa-comment-dots"></i>Book a Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstroMainChat;
