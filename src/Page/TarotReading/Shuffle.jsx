import React, { useEffect, useState } from "react";
import "./Cards.css";

import { animate, motion } from "framer-motion";
import IMG from "./IMGS/shuffle card girl.png";
import CARDS from "./IMGS/wizard-tarot-card-rider-site-scry.png";
import { useLocation, useNavigate } from "react-router-dom";

const Shuffle = () => {
  const navigate = useNavigate(); // Corrected useNavigate call
  const loc = useLocation();
  const cardhead = [];
  const cardtext = [];
  const heads = loc.state.head;
  console.log(heads);
  loc.state.cards.map((card) => {
    cardhead.push(card.CardHead);
    cardtext.push(card.CardInfo);
  });

  const CardSelected = () => {
    const card = Math.floor(Math.random() * cardhead.length);

    navigate("/TarotResult", { state: { card, cardhead, cardtext, heads } });
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

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="Main-tarot">
      <div className="Tarot-Heading">
        <h1>{loc.state.head}</h1>
      </div>
      <div className="choose-card-heading">
        <h3>Choose a Card</h3>
      </div>
      <div className="girl-pic">
        <img src={IMG} alt="" />
      </div>

      <div className="cards-collection">
        {variants.map((variant, index) => {
          return (
            <motion.img
              onClick={() => CardSelected()}
              key={index}
              animate={isOpen ? "open" : "closed"}
              variants={variant}
              transition={{ duration: 0.2, delay: 0.1 * index }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4cac51c9-c3a8-4cda-9fe5-97ce7eb245de/d3jyror-c5f8b752-ad1b-4bba-8e72-3d404bbbb044.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjYWM1MWM5LWMzYTgtNGNkYS05ZmU1LTk3Y2U3ZWIyNDVkZVwvZDNqeXJvci1jNWY4Yjc1Mi1hZDFiLTRiYmEtOGU3Mi0zZDQwNGJiYmIwNDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q_gOS0PY9QL7Rzj4OkL-TnSWj_P3O02UxCKTOuwoa1c"
              alt=""
            />
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Shuffle</button>
      </div>
    </div>
  );
};

export default Shuffle;
