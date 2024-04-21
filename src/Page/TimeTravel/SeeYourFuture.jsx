import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./SeeYourFuture.css";
import { useNavigate } from "react-router-dom";

export default function SeeYourFuture() {
  const navigate = useNavigate();
  return (
    <div className="dream-result">
      <div className="Head-Text">
        <IoIosArrowBack onClick={() => navigate("/FuturePrediction")} className="backicon" />
        <h1>See Your Future</h1>
      </div>
      <div className="dreamcard-container">
        <div className="dream-result-card">
          <h2 className="dream-result-title">Results</h2>
          <div className="divider"></div>
          <p className="description">
            You are usually a very practical and down-to-Earth person, but today
            you may be more inclined than usual toward mysticism. Spiritual
            matters seem extremely appealing, and you could find yourself
            gravitating toward metaphysical bookstores or seeking discussions
            with people who are well versed in such matters. You also find your
            imagination working overtime. Indulge in a few flights of fancy,
            Gemini. We all need to escape from time to time!
          </p>
        </div>
      </div>
      <div className="margin-div"></div>
    </div>
  );
}
