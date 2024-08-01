import React, { useEffect }from "react";
//import "./support.css";
import { useNavigate } from "react-router-dom";
const Sleep = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const head = "Sleeping Problem";
  const img =
    "https://images.pexels.com/photos/1497855/pexels-photo-1497855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Sleeping Problem</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/1497855/pexels-photo-1497855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Unlock the secrets of restorative sleep with Divine Connection's
              expert guidance. Our certified online psychologists and counselors
              offer confidential therapy sessions tailored to address
              sleep-related issues such as insomnia, nightmares, or restless
              nights. <br /> <br /> Whether you're struggling to fall asleep or
              experiencing disruptions in your sleep patterns, we're here to
              help you reclaim peaceful nights and rejuvenating rest. Trust in
              our secure online platform to provide a safe space for exploration
              and healing, allowing you to discover effective strategies for
              better sleep hygiene and overall well-being. With Divine
              Connection, you can embark on a journey towards restful sleep and
              waking up refreshed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
