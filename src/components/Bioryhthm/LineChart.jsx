import React, { useState } from "react";
import "../TimeTravel/PastLifePrediction.css";
import { useNavigate } from "react-router-dom";

function LineChart() {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();

  const handleBirthDateChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
  };

  const navigateToFuture = (date) => {
    navigate(`/biorhythm?birthDate=${date}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Biorhythm</h1>
      </div>
      <div className="Future-container text-left">
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="">
            <form action="#">
              <div className="form-group">
                <div>
                  <label htmlFor="birthDate">Date of Birth:</label>
                  <input
                    placeholder="dd/mm/yyyy"
                    className="form-control"
                    type="text"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    value={birthDate}
                    onChange={handleBirthDateChange}
                    id="birthDate"
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
                      Get your Biorhythm
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

export default LineChart;
