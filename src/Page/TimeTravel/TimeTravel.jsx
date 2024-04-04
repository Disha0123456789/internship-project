import React from "react";
import "./TimeTravel.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function TimeTravel() {
  const navigate = useNavigate();
  return (
    <>
      <IoIosArrowBack onClick={() => navigate("../")} className="backicon" />
      <div className="Head-Text">
        <h1>Time Travel</h1>
      </div>
      <div className="timetravel-container">
        <div onClick={() => navigate("/FuturePrediction")} className="tt-grid">
          <div className="grid-items-tt bg-fup"></div>
          <div className="info-tt">
            <div className="button-container-tt">
              <button className="book-call-tt" disabled>
                Future Prediction
              </button>
            </div>
          </div>
        </div>
        <div className="tt-grid">
          <div
            onClick={() => navigate("/PastLifePrediction")}
            className="grid-items-tt bg-plp"
          ></div>
          <div className="info-tt">
            <div className="button-container-tt">
              <button className="book-call-tt" disabled>
                Past Life Prediction
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeTravel;
