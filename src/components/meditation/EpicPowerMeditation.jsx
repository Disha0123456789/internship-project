import React from "react";
import "./meditation.css";
const EpicPowerMeditation = () => {
  const name = [
    "Universal Light Energy Healing",
    "White Light Protection: Warrior of Light (Epic Power-Meditation)",
    "Earth Grounding (self-empowering visualisation)",

    " A Gift From Your Guardian Spirit. An Uplifting Visualisation",

    " GUIDED MEDITATION - Releasing Anger",

    " MEDITATION STORY: Running With Wolves - Epic Meditation",

    "PRAYER FOR WORLD PEACE",

    " Meditation: Journey into the West. Story Visualization",
    "A Fire Cleansing Epic Power Guided Meditation for Healing",
  ];
  const links = [
    "https://www.youtube.com/embed/tV6swIkrFBk?si=BaxABIRevXy4jUtg",
    "https://www.youtube.com/embed/qXXeN49sQZA?si=puej8L0u6CLhAn7r",
    "https://www.youtube.com/embed/dpqX3Fthw_E?si=Gwe9thu9Y_lH9mUs",
    "https://www.youtube.com/embed/5Bo942_Gdtw?si=OpNqIaGMcJv9_-LY",
    "https://www.youtube.com/embed/pk0Jeqcv5Q8?si=t4W8FbOSpTmva1qg",
    "https://www.youtube.com/embed/JhNwHC-wbCo?si=eQGmSpnaiXGiajWz",
    "https://www.youtube.com/embed/HOfBYvh8MfA?si=T6P22mQk5YXorECq",
    "https://www.youtube.com/embed/hGmEQjNp7Ck?si=BJuJbg4rLbIpFF4A",
    "https://www.youtube.com/embed/9LrGIZKpoJ0?si=nBhzCtjwisE52mxf",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Epic Power Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Embark on a journey of self-discovery with Epic Power meditation,
          harnessing the depths of your inner strength and wisdom to conquer
          challenges and embrace serenity. Through focused contemplation and
          profound mindfulness, unlock the boundless potential within, forging a
          path of resilience and enlightenment.
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

export default EpicPowerMeditation;
