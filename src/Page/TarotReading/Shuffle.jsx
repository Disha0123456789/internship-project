// Shuffle.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IMG from "/IMGS/shuffle card girl.png";
import tarotResultCardsData from "./tarot-result-cards-data.json";

const Shuffle = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const CardSelected = () => {
    const cardIndex = Math.floor(Math.random() * tarotResultCardsData.length);
    const randomDesc = Math.floor(Math.random() * 3) + 1;
  
    const selectedCard = tarotResultCardsData[cardIndex];
    let heading, para;
    switch (randomDesc) {
      case 1:
        heading = selectedCard.heading1;
        para = selectedCard.para1;
        break;
      case 2:
        heading = selectedCard.heading2;
        para = selectedCard.para2;
        break;
      case 3:
        heading = selectedCard.heading3;
        para = selectedCard.para3;
        break;
      default:
        heading = "";
        para = "";
        break;
    }
  
    navigate("/TarotResult", {
      state: { 
        head: loc.state.head,
        title: selectedCard.title,
        heading,
        para
      }
    });
  };

  const variants = [];
  for (let i = 0; i < 21; i++) {
    variants[i] = {
      open: { x: -(100 + 60 * i), y: -100, opacity: 0 },
      closed: {
        x: 0,
        y: -60 + 60 * Math.sin((i * Math.PI) / 19),
        opacity: 1,
      },
    };
  }

  return (
    <div className="Main-tarot">
      <div className="Head-Text">
        <h1>{loc.state.head}</h1>
      </div>
      <div className="choose-card-heading">
        <h3>Choose a Card</h3>
      </div>
      <div className="girl-pic">
        <img src={IMG} alt="" />
      </div>
      <div className="cards-collection">
        {variants.map((variant, index) => (
          <motion.img
            onClick={CardSelected}
            key={index}
            animate={isOpen ? "open" : "closed"}
            variants={variant}
            transition={{ duration: 0.2, delay: 0.1 * index }}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cac51c9-c3a8-4cda-9fe5-97ce7eb245de/d3jyror-c5f8b752-ad1b-4bba-8e72-3d404bbbb044.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjYWM1MWM5LWMzYTgtNGNkYS05ZmU1LTk3Y2U3ZWIyNDVkZVwvZDNqeXJvci1jNWY4Yjc1Mi1hZDFiLTRiYmEtOGU3Mi0zZDQwNGJiYmIwNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q_gOS0PY9QL7Rzj4OkL-TnSWj_P3O02UxCKTOuwoa1c"
            alt=""
          />
        ))}
      </div>
      <div className="tarot-buttons">
        <button className="tarot-btn" onClick={() => setIsOpen(!isOpen)}>Shuffle</button>
      </div>
    </div>
  );
};

export default Shuffle;
