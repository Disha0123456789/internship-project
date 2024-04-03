import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Grief = () => {
  const navigate = useNavigate();
  const head = "Grief/Loss";
  const img =
    "https://images.pexels.com/photos/247314/pexels-photo-247314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <IoIosArrowBack
            onClick={() => navigate("/EmotionalSupport")}
            className="backicon"
          />
          <h1>Grief / Loss</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/247314/pexels-photo-247314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Amidst the profound pain of grief and loss, Divine Connection
              offers a compassionate refuge. Our certified online psychologists
              and counselors provide confidential therapy sessions tailored to
              support you through the grieving process. <br /> <br /> Whether
              you're grappling with the loss of a loved one, a job, or a
              significant life transition, we're here to help you navigate the
              waves of sorrow and find solace. Trust in our secure online
              platform to provide a safe space for expression and healing,
              allowing you to honor your emotions and journey towards acceptance
              and resilience. With Divine Connection, you don't have to face
              grief alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grief;
