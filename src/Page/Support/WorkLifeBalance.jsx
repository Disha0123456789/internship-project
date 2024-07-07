import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const WorkLifeBalance = () => {
  const navigate = useNavigate();
  const head = "Work Life Balance";
  const img =
    "https://images.pexels.com/photos/269129/pexels-photo-269129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Work Life Balance</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/269129/pexels-photo-269129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Find harmony between work and life with Divine Connection's
              supportive guidance. Our certified online psychologists and
              counselors offer confidential therapy sessions tailored to help
              you navigate the challenges of balancing professional
              responsibilities with personal well-being. <br /> <br />
              Whether you're feeling overwhelmed by work demands, struggling to
              prioritize self-care, or seeking to establish healthier
              boundaries, we're here to help you find equilibrium. Trust in our
              secure online platform to provide a safe space for exploration and
              healing, allowing you to cultivate a fulfilling and sustainable
              lifestyle. With Divine Connection, you can achieve greater
              harmony, fulfillment, and resilience in both your professional and
              personal spheres.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLifeBalance;
