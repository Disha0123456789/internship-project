import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Depression = () => {
  const navigate = useNavigate();
  const head = "Depression";
  const img =
    "https://images.unsplash.com/photo-1525190809240-c06c7cbf17d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <h1>Depression</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <img
              src="https://images.unsplash.com/photo-1525190809240-c06c7cbf17d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              At Divine Connection, we understand the weight of depression, and
              we're here to walk with you through it. Our team of certified
              online psychologists and counselors offers confidential therapy
              sessions tailored specifically to address the multifaceted nature
              of depression. <br /> <br /> Through compassionate guidance and
              evidence-based techniques, we help you navigate the complexities
              of depression, fostering resilience and empowering growth. Rest
              assured, our secure online platform provides a safe haven for
              exploration and healing, offering you the support and tools you
              need to rediscover your sense of hope and vitality. With Divine
              Connection, brighter days are within reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depression;
