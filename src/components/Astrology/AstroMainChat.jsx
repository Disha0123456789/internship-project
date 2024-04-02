import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";

function AstroMainChat() {
  const navigate = useNavigate();
  return (
    <div className="astrology">
      <div className="Head-Text">
        <h1>Astrology</h1>
      </div>
      <div className="grid-container">
        <div
          onClick={() => navigate("/marriageConsultation")}
          className="grid-items bg-mc"
        >
          {/* <div className="info">
            <h2>
              Marriage <br />
              Consultation
            </h2>
            <p>1rs/min</p>
            <button className="book-now">
              Book Now
            </button>
          </div> */}
          <div className="info">
            <div className="heading">
              <h2>Marriage Consultation</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/healthHealing")}
          className="grid-items bg-hh"
        >
          <div className="info">
            <div className="heading">
              <h2>Health Healing</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/wealthManagement")}
          className="grid-items bg-wh"
        >
          <div className="info">
            <div className="heading">
              <h2>Wealth Management</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/loveInsights")}
          className="grid-items bg-li"
        >
          <div className="info">
            <div className="heading">
              <h2>Love Insights</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/educationalGuidance")}
          className="grid-items bg-eg"
        >
          <div className="info">
            <div className="heading">
              <h2>Educational Guidance</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/careerPath")}
          className="grid-items bg-cp"
        >
          <div className="info">
            <div className="heading">
              <h2>Career Path</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/businessStrategies")}
          className="grid-items bg-bs"
        >
          <div className="info">
            <div className="heading">
              <h2>Business Strategies</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/financePlanning")}
          className="grid-items bg-fp"
        >
          <div className="info">
            <div className="heading">
              <h2>Finance Planning</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/legalAdvice")}
          className="grid-items bg-la"
        >
          <div className="info">
            <div className="heading">
              <h2>Legal Advice</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/remediesSolutions")}
          className="grid-items bg-rs"
        >
          <div className="info">
            <div className="heading">
              <h2>Remedies &amp; Solutions</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/kidsFortune")}
          className="grid-items bg-kfp"
        >
          <div className="info">
            <div className="heading">
              <h2>Kids Fortune Prediction</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/parentingTips")}
          className="grid-items bg-pt"
        >
          <div className="info">
            <div className="heading">
              <h2>Parenting Tips</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/panchangAnalysis")}
          className="grid-items bg-pa"
        >
          <div className="info">
            <div className="heading">
              <h2>Panchang Analysis</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/birthChart")}
          className="grid-items bg-bci"
        >
          <div className="info">
            <div className="heading">
              <h2>Birth Chart Interpretation</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/shubhMuhurat")}
          className="grid-items bg-sm"
        >
          <div className="info">
            <div className="heading">
              <h2>Shubh Muhurat</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/personalizedPooja")}
          className="grid-items bg-pp"
        >
          <div className="info">
            <div className="heading">
              <h2>Personalized Pooja</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/thetaHealing")}
          className="grid-items bg-th"
        >
          <div className="info">
            <div className="heading">
              <h2>Theta Healing</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/reikiHealing")}
          className="grid-items bg-rh"
        >
          <div className="info">
            <div className="heading">
              <h2>Reiki Healing</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/chakraHealing")}
          className="grid-items bg-ch"
        >
          <div className="info">
            <div className="heading">
              <h2>Chakra Healing</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/crystalHealing")}
          className="grid-items bg-crh"
        >
          <div className="info">
            <div className="heading">
              <h2>Crystal Healing</h2>
            </div>
            <div className="button-container">
              <button className="book-call" disabled>
                ₹1/msg
              </button>
              <button className="book-chat">
                <i className="fa-solid fa-comment-dots"></i>Book a Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstroMainChat;
