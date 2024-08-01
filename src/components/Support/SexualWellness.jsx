import React, { useEffect }from "react";
//import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const SexualWellness = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const head = "Sexual Wellness";
  const img =
    "https://images.pexels.com/photos/1386336/pexels-photo-1386336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Sexual Wellness</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/1386336/pexels-photo-1386336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Embrace sexual wellness with Divine Connection's supportive
              guidance and expertise. Our certified online psychologists and
              counselors offer confidential therapy sessions tailored to address
              various aspects of sexual health and relationships. <br /> <br />{" "}
              Whether you're navigating intimacy issues, exploring your sexual
              identity, or seeking to enhance your overall well-being in this
              area, we're here to help. Trust in our secure online platform to
              provide a safe and non-judgmental space for exploration and
              healing. With Divine Connection, you can embark on a journey
              towards greater sexual fulfillment, confidence, and empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualWellness;
