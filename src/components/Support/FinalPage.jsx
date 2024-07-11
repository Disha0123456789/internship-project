import React from "react";
import { useLocation } from "react-router-dom";

const FinalPage = () => {
  const loc = useLocation();

  return (
    <div className="Container Container-final">
      <div className="top">
        <h1>{loc.state.head}</h1>
        <img src={loc.state.img} alt="" />
        <h3>Your request has been recieved.</h3>
      </div>
      <div className="mid">
        <li>
          <input type="checkbox" name="" id="" />
          <div className="text">
            {" "}
            <p>
              Your {loc.state.head} is conducted by one of our
              expert astrologer.
            </p>
          </div>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <div className="text">
            {" "}
            <p>
              You'll recieve comprehensive insights and guidance tailored to
              your specific questions and concerns.
            </p>
          </div>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <div className="text">
            {" "}
            <p>Waiting in queue for astrologer to get free.</p>
          </div>
        </li>

        <li>
          <input type="checkbox" name="" id="" />
          <div className="text">
            {" "}
            <p>Call completed</p>
          </div>
        </li>
      </div>
      <div className="bottom">
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default FinalPage;
