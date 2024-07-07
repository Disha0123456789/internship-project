import React from "react";
import "./meditation.css";
const FiveMinMeditation = () => {
  const name = [
    "5 Minute Meditation Anyone Can Do Anywhere",
    "5 Minute Meditation for Gratitude ",
    "5 Minute Meditation for Increasing Focus & Clarity ",

    "5 Minute Morning Meditation",

    "5 Minute Meditation Before Sleep",

    "5 Minute Mindfulness Meditation",

    "5 Minute Manifestation Meditation ",

    "5 Minute Meditation for Anxiety",
    "5 minute meditation for focus",
  ];
  const links = [
    "https://www.youtube.com/embed/jttcWa7tS38?si=dajVaGCk8liS29ke",
    "https://www.youtube.com/embed/zyUy9w953L0?si=5Q_nKqX0od4DZgoy",
    "https://www.youtube.com/embed/xCi0MRxaaCE?si=z_uv9abC9RQBgoDn",
    "https://www.youtube.com/embed/HNab2YqCCiM?si=AJYr9hmh0I6NopZx",
    "https://www.youtube.com/embed/2K4T9HmEhWE?si=-adPdRo19zvDTLkc",
    "https://www.youtube.com/embed/ssss7V1_eyA?si=VKwbmvk_SkHzoyRX",
    "https://www.youtube.com/embed/psx_NGVO4JQ?si=M4ef78IB04zf9IJ7",
    "https://www.youtube.com/embed/uqGTphrGHi4?si=DIc8-em6sXWniRPU",
    "https://www.youtube.com/embed/zSkFFW--Ma0?si=yD0NreHxz9YwjLG3",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>5 Minutes Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          In five minutes of meditation, silence becomes a sanctuary, offering
          solace to the mind and rejuvenating the spirit amidst life's bustling
          rhythm. With each breath, serenity unfolds, guiding the soul to a
          place of calm and clarity in the present moment.
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
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
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

export default FiveMinMeditation;
