import React from "react";
import "./meditation.css";

const PositiveMeditation = () => {
  const name = [
    "Morning Meditation for Positive Energy",
    "Positive Energy Chakra Meditation",
    "Increase your Vibrational Frequency With Positive Energy",

    "Morning Mindfulness Meditation",

    "Feel the powerful Self Healing Energy Within",

    "Entering Into Higher Consciousness",

    "Feeling Full of Energy",

    "Full of Positive Feelings with this Gratitude Guided Meditation ",
    "You Are Radiant, Awake & Alive ~ Morning Positive Energy ",
  ];
  const links = [
    "https://www.youtube.com/embed/mMw9Q8CIPuY?si=t6Rfo4tTKjNdK-gS",
    "https://www.youtube.com/embed/RbVbo9BkuiA?si=SF8CSMO-olU-gRRP",
    "https://www.youtube.com/embed/1gs6qOZxzy4?si=Ryholg3uFibp2n-z",
    "https://www.youtube.com/embed/a-cNQDhP87w?si=PLgHJAXuyyUUx_1L",
    "https://www.youtube.com/embed/P0gwE0eGRKk?si=0pcrpPc-6vtNpPDM",
    "https://www.youtube.com/embed/cECMemgO0fw?si=-oClclgICDMWc5Cz",
    "https://www.youtube.com/embed/f4VI7tIhEJM?si=meYyQFNidIt_PEbX",
    "https://www.youtube.com/embed/Td96vE38oI8?si=UWh_-pA5aksRQRdO",
    "https://www.youtube.com/embed/3mRGG8_Gf38?si=yjtBZ1uukcFSuyTJ",
  ];
  return (
    <div className="Main-page">
      <div className="Meditation-text">
        <h1>Positive Mind Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Positive meditation is a transformative practice that cultivates inner
          peace and fosters a mindset of abundance and gratitude, paving the way
          for boundless joy and fulfillment in life. Through intentional focus
          and deep breathing, it empowers individuals to harness the innate
          power of their thoughts, fostering resilience and a profound sense of
          well-being.
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

export default PositiveMeditation;
