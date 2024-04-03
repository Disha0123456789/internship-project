import React, { useState } from "react";
import "./Future.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const FuturePrediction = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="timetravel">
      <div className="header">
        <h1>Future Prediction</h1>
      </div>
      <div className="content">
        <div className="container text-left">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <form action="#">
                <div className="form-group">
                  <div>
                    <Calendar onChange={onChange} value={value} />
                  </div>
                  <div className="submit-button-wrapper">
                    <a onClick={() => navigate("/see_your_future")}>
                      <input
                        type="button"
                        className="form-control back"
                        defaultValue="See the Future"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePrediction;
