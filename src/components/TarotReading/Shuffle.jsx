// Shuffle.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import IMG from "/assets/2nd-row-reading/Tarot/images/tarot_card_girl.png";
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
        para,
        image: selectedCard.image // Pass the image path here
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
            src="/assets/2nd-row-reading/Tarot/images/shuffle_card.png"
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
