import React from "react";
import { motion } from "framer-motion";
import TarotCards from "./TarotCards";
import tarotReadingCardsData from "./tarot-cards-data"; // Importing tarot-reading-cards-data

const TarotReading = () => {
  return (
    <div className="Main-Tarot">
      <div className="Tarot-Heading">
        <h1>Tarot Reading</h1>
      </div>
      <div className="Tarot-Cards">
        {tarotReadingCardsData.map((card, index) => (
          <TarotCards key={index} props={card} />
        ))}
      </div>
    </div>
  );
};

export default TarotReading;
