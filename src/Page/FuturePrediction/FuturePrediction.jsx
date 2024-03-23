import React, { useState } from "react";
import "./Future.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FuturePrediction = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <div className="ontainer">
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
                    <a target="_blank" href="SeeYourFuture.html">
                      <input
                        type="button"
                        className="submit-button form-control"
                        defaultValue="See the Future"
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FuturePrediction;
