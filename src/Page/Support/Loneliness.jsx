import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Loneliness = () => {
  const navigate = useNavigate();
  const head = "Loneliness";
  const img =
    "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Loneliness</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Navigating loneliness can feel overwhelming, but Divine Connection
              is here to offer you support and understanding. Our certified
              online psychologists and counselors provide confidential therapy
              sessions designed to address the root causes of loneliness and
              help you reconnect with yourself and others.
              <br /> <br /> Through empathetic guidance and personalized
              strategies, we empower you to build meaningful connections and
              find fulfillment in your relationships. Trust in our secure online
              platform to provide a safe space for exploration and growth as you
              embark on a journey towards greater connection and well-being.
              With Divine Connection, you don't have to face loneliness alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loneliness;
