import React from "react";

const MentalHealthMeditation = () => {
  const name = [
    "Clearing Negativity",
    "Banishing Depression",
    "MEDITATION for Stress Relief",

    "Meditation for Anxiety Relief",

    " MEDITATION for Self-Esteem",

    "Pain Relief & Healing GUIDED MEDITATION",

    "MEDITATION for Total Body Relaxation",

    "MEDITATION for Heal Your Inner Child",
    "MEDITATION for  Releasing Anger",
    "MEDITATION for Overcoming Shyness",
  ];
  const links = [
    "https://www.youtube.com/embed/EPWpV064K24?si=GMw9If-S_FyIWfzY",
    "https://www.youtube.com/embed/2nV-v8zXpH0?si=gQVo_MkQgSoyoCp3",
    "https://www.youtube.com/embed/o94tvFUttco?si=TJAaI4M19c9LMXtf",
    "https://www.youtube.com/embed/8_jcEpwKQXc?si=AEfYTO4bUOsLBPX_",
    "https://www.youtube.com/embed/5I_gj-eMefU?si=pcZbKuHbKUOnrJWL",
    "https://www.youtube.com/embed/NIjKfenNStA?si=0Cz782lpYkzVXxKJ",
    "https://www.youtube.com/embed/QMv64migYjY?si=7WMbS7IMxCxj0QLX",
    "https://www.youtube.com/embed/-_dTtHriNlk?si=z_YMmq57Rt0xvAk8",
    "https://www.youtube.com/embed/pk0Jeqcv5Q8?si=67cx7UD85urhqfGA",
    "https://www.youtube.com/embed/3IUaHeedb98?si=huzwkYUWQ-7vd5Fr",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Meditation for Mental Health</h1>
      </div>
      <div className="Hero-section">
        <p>
          Mental health meditation offers solace in the tranquil depths of the
          mind, fostering resilience and clarity amidst life's turbulent
          currents. Through gentle introspection and mindful breathing, it
          unveils pathways to inner peace and emotional equilibrium.
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

export default MentalHealthMeditation;
