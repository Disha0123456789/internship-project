import React, { useState } from "react";
import "./PastLifePrediction.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function PastLifePrediction() {
  const [birthDate, setBirthDate] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const navigate = useNavigate();

  const handleBirthDateChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
    calculateZodiacSign(date);
  };

  const navigateToFuture = (date) => {
    navigate(`/see_your_past?birthDate=${date}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Past Life Prediction</h1>
      </div>
      <div className="Future-container text-left">
        <div className="row justify-content-center">
          <div className="">
            <form action="#">
              <div className="form-group">
                <div>
                  <label htmlFor="birthDate">Date of Birth:</label>
                  <input
                    type="date"
                    id="birthDate"
                    className="form-control"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                  />
                </div>
                {/*zodiacSign && (
                  <div className="zodiac-sign">
                    <p>Your Zodiac Sign: {zodiacSign}</p>
                  </div>
                )*/}
                {birthDate && (
                  <div className="past-life-button-wrapper">
                    <button
                      type="button"
                      className="past-life-btn"
                      onClick={() => navigateToFuture(birthDate)}
                    >
                      See Your Past Life
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastLifePrediction;
