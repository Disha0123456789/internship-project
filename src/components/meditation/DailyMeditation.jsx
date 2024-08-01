import React, { useEffect }from "react";
import { useNavigate } from "react-router-dom";
//import "./meditation.css";

const DailyMeditation = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const name = [
    "Powerful 6-phase Morning Meditation",
    "Feel Amazing For The Day Ahead",
    "Morning Meditation for Positive Energy",
    "Increase your Vibrational Frequency",
    "The Perfect Mindfulness Meditation",
    "Morning Meditation for Health Wealth & Happiness",
    "A Powerful Morning Meditation to Start Your Day",
    "Productive Morning Guided Meditation",
  ];

  const links = [
    "https://www.youtube.com/embed/DdUm9U9w9W0?si=8Ipu6Z7OsDT4_q-G",
    "https://www.youtube.com/embed/IvLViZeC60c?si=j4uc97BbEQ7CFWWB",
    "https://www.youtube.com/embed/mMw9Q8CIPuY?si=bpYp0yXFr_r8UtfE",
    "https://www.youtube.com/embed/1gs6qOZxzy4?si=DTinOp2PX0mV0Pti",
    "https://www.youtube.com/embed/LJQOoAw0BjY?si=U7njnh9Jz-CJUXj9",
    "https://www.youtube.com/embed/42uKBAHQMMo?si=0Klp2OcbK2cEfsX4",
    "https://www.youtube.com/embed/pZ410ATHqG4?si=Mgm1_QLL3JF1gtBH",
    "https://www.youtube.com/embed/442wt8KJeNs?si=ww-Rlr5iH5k4TVwm",
  ];

  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Daily Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Daily meditation offers a sanctuary of stillness where the mind finds
          solace and the soul discovers its whispers of wisdom, guiding us
          through the labyrinth of existence with tranquility and clarity. In
          the quietude of each breath, we awaken to the profound harmony within,
          nurturing a journey of self-awareness and inner peace.
        </p>
        <div className="cards">
          {name.map((name, index) => (
            <div className="Card" key={index}>
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
          ))}
        </div>
        <div className="meditationVideos"></div>
      </div>
    </div>
  );
};

export default DailyMeditation;
