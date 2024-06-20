import React, { useState } from "react";
import "./Future.css";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const FuturePrediction = () => {
  const [birthDate, setBirthDate] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const navigate = useNavigate();

  const calculateZodiacSign = (date) => {
    const birth = new Date(date);
    const day = birth.getDate();
    const month = birth.getMonth() + 1;

    let sign = "";

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sign = "Aquarius";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) sign = "Pisces";
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sign = "Aries";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sign = "Taurus";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sign = "Gemini";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sign = "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sign = "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sign = "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sign = "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sign = "Scorpio";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sign = "Sagittarius";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sign = "Capricorn";

    setZodiacSign(sign);
  };

  const handleBirthDateChange = (e) => {
    const date = e.target.value;
    setBirthDate(date);
    calculateZodiacSign(date);
  };

  const navigateToFuture = (type) => {
    navigate(`/see_your_future?sign=${zodiacSign}&type=${type}`);
  };

  return (
    <div className="timetravel">
      <div className="Head-Text">
        {/* <IoIosArrowBack onClick={() => navigate("/TimeTravel")} className="backicon" /> */}
        <h1>Future Prediction</h1>
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
                  <div className="button-wrapper">
                    <button
                      type="button"
                      className="form-control back"
                      onClick={() => navigateToFuture("week")}
                    >
                      Weekly
                    </button>
                    <button
                      type="button"
                      className="form-control back"
                      onClick={() => navigateToFuture("month")}
                    >
                      Monthly
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
};

export default FuturePrediction;
