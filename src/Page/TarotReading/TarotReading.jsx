import React, { useEffect }from "react";
import { motion } from "framer-motion";
import TarotCards from "./TarotCards";
import tarotReadingCardsData from "./tarot-cards-data"; // Importing tarot-reading-cards-data

const TarotReading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Main-Tarot">
      <div className="Head-Text">
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
