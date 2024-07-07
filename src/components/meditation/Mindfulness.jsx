import React from "react";
import "./meditation.css";
const Mindfulness = () => {
  const name = [
    "The Perfect Mindfulness Meditation",
    "Become Amazing at Meditation ",
    "Feeling Fully Present in The Moment Meditation ",

    "Morning Mindfulness Meditation",

    "You Feel The Difference After Using this 10 Minute Meditation",

    "Entering into a Perfect State of Being using Mindfulness",

    "Let the Sounds Bring You Into the Present Moment",

    "A Powerful 3-phase Guided Meditation ",
    "Trust in Life ~ Guided Meditation",
  ];
  const links = [
    "https://www.youtube.com/embed/LJQOoAw0BjY?si=DbpVakvd1JWpKrGE",
    "https://www.youtube.com/embed/ETXwO9ssXqQ?si=3_CWofHYdDM6PcQ3",
    "https://www.youtube.com/embed/cVeyjwnxlIA?si=rObBBHGX4zmygpS_",
    "https://www.youtube.com/embed/a-cNQDhP87w?si=PLgHJAXuyyUUx_1L",
    "https://www.youtube.com/embed/kEicc-b4HGo?si=a5NqdVLYGSdejI1W",
    "https://www.youtube.com/embed/aexnRWrqxLI?si=EoJJrogkudZ1uuwh",
    "https://www.youtube.com/embed/xr_H18UcQCo?si=Qrrlh8wCZiERs-RR",
    "https://www.youtube.com/embed/zHBnEWJAAOc?si=OzB6qD8zRaF8ANzF",
    "https://www.youtube.com/embed/Thnh2P4CECc?si=T_sEz5KljIcg8CCv",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Mindfulness Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Mindfulness meditation is a tranquil journey inward, where breath
          becomes the guide and awareness the destination, cultivating harmony
          between mind, body, and spirit in the present moment. Through gentle
          observation and non-judgmental awareness, it invites a profound sense
          of calm and clarity, fostering resilience amidst life's ebbs and
          flows.
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

export default Mindfulness;
