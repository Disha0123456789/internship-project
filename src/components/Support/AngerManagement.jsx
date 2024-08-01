import React, { useEffect } from "react";
//import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const AngerManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const head = "Anger Management";
  const img =
    "https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Anger Management</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Explore transformative anger management techniques with expert
              guidance from certified online psychologists and counselors at
              Divine Connection. Our affordable and confidential therapy
              sessions are designed to equip you with the tools needed to
              effectively manage anger and restore emotional balance. Trust in
              our secure online platform to safeguard your privacy as you embark
              on a journey towards greater inner peace and well-being.
            </p>
          </div>
        </div>
      </div>
      {/* {options && <Anxiety />} */}
    </div>
  );
};

export default AngerManagement;
