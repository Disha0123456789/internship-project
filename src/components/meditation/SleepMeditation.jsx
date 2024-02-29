import React from "react";
import "./meditation.css";
const SleepMeditation = () => {
  const name = [
    "5 Minute Meditation Before Sleep",
    "Receive Messages In Your Sleep Guided Meditation",
    "Floating With The Stars Guided Meditation",

    "Sleep Story for Grown Ups",

    "Positive Energy Before You Sleep Meditation",

    "Sleep in Ten Minutes",

    "Feeling Grateful Before You Sleep  Meditation",

    "A Healing Sleep Guided Meditation",
    "Yoga Nidra Sleep Meditation Guided with Female Voice",
  ];
  const links = [
    "https://www.youtube.com/embed/2K4T9HmEhWE?si=JEzQa4sgrtNywAzA",
    "https://www.youtube.com/embed/BuOYJ2s_XJw?si=-I-9-zSBTYY5wt7O",
    "https://www.youtube.com/embed/a5XSe_pORQ0?si=pYg73tDi6Y4gDhks",
    "https://www.youtube.com/embed/_wenjJ6jUYE?si=SY7WOR1zenkvAIUb",
    "https://www.youtube.com/embed/xeS6vHrPwNI?si=H79dZ2Z2lqmvlbGv",
    "https://www.youtube.com/embed/YdDv_0kwsb8?si=ej4HHQP-kaQzyKoW",
    "https://www.youtube.com/embed/hANbTU_YsQg?si=7m0G7IJiCItzzI4G",
    "https://www.youtube.com/embed/W4ujD0NI0m8?si=7pFAJiuY8hdQbHr5",
    "https://www.youtube.com/embed/wXkSXbntKwU?si=3MhILcNFeR3cAHcx",
  ];
  return (
    <div className="Main-page">
      <div className="Meditation-text">
        <h1>Chakra Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat
          a alias repellendus. Illo blanditiis dignissimos porro? Labore, fuga
          nostrum. Sed itaque autem quis aspernatur eius aperiam architecto
          animi saepe?
        </p>
        <div className="cards">
          {name.map((name, index) => {
            return (
              <div className="Card">
                <div className="head">
                  <h1>{name}</h1>
                </div>
                <div className="youtube">
                  <iframe
                    src={links[index]}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            );
          })}
        </div>
        <div className="meditationVideos"></div>
      </div>
    </div>
  );
};

export default SleepMeditation;
