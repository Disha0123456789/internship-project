import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const SelfEsteemIssues = () => {
  const head = "Self-esteem Issues";
  const img =
    "https://images.unsplash.com/photo-1598897484058-7bfc231369ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const navigate = useNavigate();
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Self-Esteem issues</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.unsplash.com/photo-1598897484058-7bfc231369ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Elevate your self-esteem with Divine Connection's compassionate
              guidance and expertise. Our certified online psychologists and
              counselors provide confidential therapy sessions tailored to
              address the complexities of self-esteem issues. Whether you're
              grappling with feelings of inadequacy, self-doubt, or low
              confidence, we're here to help you rediscover your worth and inner
              strength. <br /> <br /> Trust in our secure online platform to
              provide a safe space for exploration and healing, allowing you to
              cultivate a positive self-image and embrace your unique qualities.
              With Divine Connection, you can embark on a journey towards
              greater self-acceptance, empowerment, and fulfillment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfEsteemIssues;
