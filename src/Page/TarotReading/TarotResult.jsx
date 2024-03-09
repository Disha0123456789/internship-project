import React from "react";
import "./Cards.css";
import { useLocation } from "react-router-dom";
// import IMG from "./IMGS/red result background.jpg";
import IMG from "./IMGS/result card.png";
const TarotResult = () => {
  const loc = useLocation();
  return (
    <div className="Result-Tarot">
      <div className="result-card">
        <div className="tarot-head">
          <h1>Weekend Tarot Fortune</h1>
        </div>
        <div className="card-image">
          <img src={IMG} alt="" />
          <h3>{loc.state.card}</h3>
        </div>
        <div className="result-info">
          <div className="result-head">
            <h3>Weekend Tarot Fortune</h3>
          </div>
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis
            vero possimus quod delectus, ut, vitae sed, facilis cumque amet enim
            in numquam. Accusamus enim quia deserunt perspiciatis doloremque
            neque similique. In asperiores nobis fugiat, quibusdam autem quaerat
            itaque, repudiandae, tempora voluptates libero repellendus.
            Voluptatibus quos deleniti dolore, impedit, sit eveniet assumenda
            recusandae tempore odio porro dicta nobis quia expedita voluptatem
            et doloribus pariatur ad sed dignissimos magnam explicabo totam
            commodi inventore veniam! Ipsum laudantium officiis impedit deserunt
            ut optio.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotResult;
