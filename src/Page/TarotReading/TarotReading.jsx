import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import "./Cards.css";
import WeekendBackdrop from "./IMGS/weekend tarot background.jpg";
import WeekendIcon from "./IMGS/weekend tarot card.png";
import WeeklyBackdrop from "./IMGS/weekly tarot background.jpg";
import WeeklyIcon from "./IMGS/weekly tarot card.png";
import PartnerBackdrop from "./IMGS/where is my destined partner background.jpg";
import PartnerIcon from "./IMGS/where is my destined partner card.png";
import CareerBackdrop from "./IMGS/the first half of 2024 background.jpg";
import CareerIcon from "./IMGS/first half of 2024 card.png";
import LuckBackdrop from "./IMGS/how to change my luck background.jpg";
import LuckIcon from "./IMGS/how to change my luck card.png";
import HiddenCharmBackdrop from "./IMGS/my hidden charm background.jpg";
import HiddenCharmIcon from "./IMGS/my hidden charm card.png";
import TarotCards from "./TarotCards";
const TarotReading = () => {
  const [active, setActive] = useState(false);
  const Weekend = {
    backdrop: WeekendBackdrop,
    icon: WeekendIcon,
    head: "Weekend Tarot Fortune",
    p1: "Shake of the week's stress with a soul-stirring Tarot reading this weekend.",
    p2: "Unveil hidden possibilities and find clarity for the days ahead. ",
  };
  const Weekly = {
    backdrop: WeeklyBackdrop,
    icon: WeeklyIcon,
    head: "Weekly Tarot Fortune",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
  };
  const Partner = {
    backdrop: PartnerBackdrop,
    icon: PartnerIcon,
    head: "Where is my destined partner?",
    p1: "Hold on tight. You're about to uncover some juicy intel about your destined partner!",
    p2: "Want a hint?Let the wisdom of Tarot guide you, my friend.",
  };
  const Career = {
    backdrop: CareerBackdrop,
    icon: CareerIcon,
    head: "The first half of 2024",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
  };
  const luck = {
    backdrop: LuckBackdrop,
    icon: LuckIcon,
    head: "How to change my luck?",
    p1: "Hold on tight. You're about to uncover some juicy intel about your destined partner!",
    p2: "Want a hint?Let the wisdom of Tarot guide you, my friend.",
  };
  const hiddenCharm = {
    backdrop: HiddenCharmBackdrop,
    icon: HiddenCharmIcon,
    head: "My hidden charm",
    p1: "Navigate foggy weeks with Tarot's illuminating wisdom.",
    p2: "Dive into clarity and discover your best curse of action.",
  };

  return (
    <div className="Main-Tarot">
      <div className="Tarot-Heading">
        <h1>Tarot Reading</h1>
      </div>
      <div className="Tarot-Cards">
        <TarotCards props={Weekend} />
        <TarotCards props={Weekly} />
        <TarotCards props={Partner} />
        <TarotCards props={Career} />
        <TarotCards props={luck} />
        <TarotCards props={hiddenCharm} />
      </div>
    </div>
  );
};

export default TarotReading;
