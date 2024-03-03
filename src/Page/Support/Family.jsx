import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Family = () => {
  const navigate = useNavigate();
  const head = "Family & Relationship";
  const img =
    "https://imgs.search.brave.com/EtFoBc0d50hehJ8u6aqKdreIdMveXa9rr8aprITFfDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MjIyNzg5L3Bob3Rv/L2ZhbWlseS13YXRj/aGluZy10LXYuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJE/MnlLck41aENyQlho/NE9oY182ZC1kV0VS/Wk9WTEU2MGVuendt/aXMweHc9";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <IoIosArrowBack
            onClick={() => navigate("/EmotionalSupport")}
            className="backicon"
          />
          <h1>Family & Relationship</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <img
              src="https://imgs.search.brave.com/EtFoBc0d50hehJ8u6aqKdreIdMveXa9rr8aprITFfDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/MjIyNzg5L3Bob3Rv/L2ZhbWlseS13YXRj/aGluZy10LXYuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJE/MnlLck41aENyQlho/NE9oY182ZC1kV0VS/Wk9WTEU2MGVuendt/aXMweHc9"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
              facere atque temporibus? Ad, atque sapiente. Facilis assumenda,
              veritatis, vel tempora inventore porro eius cumque libero, beatae
              laboriosam quaerat. Quo officiis mollitia fugiat nemo amet,
              reiciendis nobis quidem eveniet ut numquam consectetur ea?
              Excepturi, mollitia aliquam. Neque obcaecati corrupti hic odit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              commodi. Mollitia quidem esse sit a commodi, inventore fugit,
              accusamus quis tenetur, deleniti incidunt optio assumenda?
              Incidunt enim nobis suscipit! Quibusdam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
