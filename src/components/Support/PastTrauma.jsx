import React, { useEffect }from "react";
//import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const PastTrauma = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const head = "Past Trauma";
  const img =
    "https://imgs.search.brave.com/Nb5-W0I6mrhLm6rdA4hqHUb-hf5yHG48JTdJGkWcSB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mZW1t/YWdhemluZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDcvaW50ZXJnZW5y/YXRpb25hbC10cmF1/bWEtMS5wbmc";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Past Trauma</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://imgs.search.brave.com/gGF66khPXG_x9uF6h4Nw9i8VJci78H872oJZMx41_is/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aGlnaGZvY3VzY2Vu/dGVycy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDMv/QWRkcmVzc2luZy1Q/YXN0LVRyYXVtYS1E/by1Zb3UtTmVlZC10/by1TZWVrLUhlbHAt/MS5qcGc"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Healing from past trauma is possible with Divine Connection's
              dedicated support and expertise. Our certified online
              psychologists and counselors offer confidential therapy sessions
              tailored to address the deep-seated wounds of past trauma. Through
              compassionate guidance and evidence-based techniques, we help you
              navigate the complexities of your past experiences, fostering
              resilience and empowering growth. Trust in our secure online
              platform to provide a safe space for exploration and healing, as
              you embark on a journey towards emotional freedom and restoration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastTrauma;
