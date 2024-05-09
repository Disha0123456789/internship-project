import React from "react";
import "./meditation.css";
const BeginnerMeditation = () => {
  const name = [
    "Day 1 - First Meditation ",
    "Day 2 - Mindfulness Meditation",
    "Day 3 - Vipassana ",

    " Day 4 - Non-judgement",

    " Day 5 - Mindful living",

    "Day 6 - Science of meditation",

    "Day 7 - The present moment",

    "Day 8 - Negative emotions",
    "Day 9 - Sounds",
    "Day 10 - Conclusion",
  ];
  const links = [
    "https://www.youtube.com/embed/moag-iZ8XRA?si=yi-cqnv9WBGQXIvw",
    "https://www.youtube.com/embed/_0xVd2KfRak?si=hguvnQPfB5C-9pDe",
    "https://www.youtube.com/embed/6m-_esNwnnk?si=0IpQMwwBmU6JW_yN",
    "https://www.youtube.com/embed/0DwV711ULvo?si=Z4UT6Z6KQoTb7XkB",
    "https://www.youtube.com/embed/s8QhA0wAnIk?si=GRwXatkGJhkr9A7G",
    "https://www.youtube.com/embed/mjG6Jytto6o?si=xeaUyv_-k4mX6lnF",
    "https://www.youtube.com/embed/OBysZAgthoI?si=bLi7UusVWEP-CsP2",
    "https://www.youtube.com/embed/zHBnEWJAAOc?si=OzB6qD8zRaF8ANzF",
    "https://www.youtube.com/embed/nqGe4wq5y6s?si=Orfg_6PsXYhW4tBi",
    "https://www.youtube.com/embed/6L3UcW1rtSQ?si=WFICbOtd5KoQhl0P",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Meditation for Beginners</h1>
      </div>
      <div className="Hero-section">
        <p>
          Embark on your journey to inner peace with beginner meditation, where
          each breath becomes a gentle guide through the tranquility of your own
          mind, laying the foundation for a profound sense of calm and clarity.
          In the simplicity of stillness, discover the profound power of
          presence, as beginner meditation unveils the boundless potential for
          harmony within.
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

export default BeginnerMeditation;
