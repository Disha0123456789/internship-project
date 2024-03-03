import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const WomenHealth = () => {
  const head = "Women Health";
  const img =
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const navigate = useNavigate();
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <IoIosArrowBack
            onClick={() => navigate("/EmotionalSupport")}
            className="backicon"
          />
          <h1>Women Health</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default WomenHealth;
