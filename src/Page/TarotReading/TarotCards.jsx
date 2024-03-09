import React from "react";
import "./Cards.css";
import { PiHandsClappingBold } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
const TarotCards = ({ props }) => {
  const IMG = props.backdrop;
  const IMG2 = props.icon;
  const head = props.head;
  const p1 = props.p1;
  const p2 = props.p2;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="Tarot-card"
    >
      <div className="back-img">
        <img className="Back-drop" src={IMG} alt="BACKDROP" />
        <img className="Card-Icon" src={IMG2} alt="ICON" />
      </div>
      <div className="Tarot-info">
        <h3>{head}</h3>
        <p>Date</p>
        <p>{p1}</p>
        <p>{p2}</p>
        <div className="icons">
          <PiHandsClappingBold className="icon" />
          <IoEyeSharp className="icon" />
        </div>
      </div>
    </motion.div>
  );
};

export default TarotCards;
