import React, { useState } from "react";
import "../../Page/TimeTravel/PastLifePrediction.css";
import { useNavigate } from "react-router-dom";

function PastLifePrediction() {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();

  const handleBirthDateChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
  };

  const navigateToFuture = (date) => {
    navigate(`/Numerology?birthDate=${date}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Numerology</h1>
      </div>
      <div className="Future-container text-left">
        <div className="row justify-content-center" style={{ width: "100%" }}>
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
                      Get your Numerology
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