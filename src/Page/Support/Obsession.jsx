import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Obsession = () => {
  const head = "Obsession / OCD";
  const img =
    "https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const navigate = useNavigate();
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Obsession / OCD</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.pexels.com/photos/897817/pexels-photo-897817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Break free from the grip of obsession and OCD with Divine
              Connection's compassionate support. Our certified online
              psychologists and counselors provide confidential therapy sessions
              tailored to address the challenges of obsessive thoughts and
              compulsive behaviors. Whether you're struggling with intrusive
              thoughts, repetitive rituals, or overwhelming urges, we're here to
              help you regain control and find relief. Trust in our secure
              online platform to provide a safe space for exploration and
              healing, allowing you to cultivate healthier coping mechanisms and
              develop strategies to manage your symptoms. With Divine
              Connection, you can embark on a journey towards greater peace of
              mind and reclaim control over your life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obsession;
