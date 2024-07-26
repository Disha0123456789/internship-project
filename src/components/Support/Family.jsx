import React, { useEffect }from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Family = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const head = "Family & Relationship";
  const img =
    "https://imgs.search.brave.com/EtFoBc0d50hehJ8u6aqKdreIdMveXa9rr8aprITFfDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MjIyNzg5L3Bob3Rv/L2ZhbWlseS13YXRj/aGluZy10LXYuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJE/MnlLck41aENyQlho/NE9oY182ZC1kV0VS/Wk9WTEU2MGVuendt/aXMweHc9";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Family & Relationship</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://imgs.search.brave.com/EtFoBc0d50hehJ8u6aqKdreIdMveXa9rr8aprITFfDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MjIyNzg5L3Bob3Rv/L2ZhbWlseS13YXRj/aGluZy10LXYuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJE/MnlLck41aENyQlho/NE9oY182ZC1kV0VS/Wk9WTEU2MGVuendt/aXMweHc9"
              alt=""
            />
            <div className="conten-price">Rs.99</div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              In the intricate tapestry of relationships and family dynamics,
              Divine Connection offers compassionate guidance and support. Our
              team of certified online psychologists and counselors provides
              confidential therapy sessions tailored to address the complexities
              of interpersonal connections. <br /> <br /> Whether you're
              navigating conflicts, seeking to strengthen bonds, or grappling
              with communication barriers, we're here to help. Trust in our
              secure online platform to provide a safe space for exploration and
              healing, allowing you to cultivate healthier, more fulfilling
              relationships with your loved ones. With Divine Connection, you
              can embark on a journey towards greater harmony, understanding,
              and connection within your family and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
