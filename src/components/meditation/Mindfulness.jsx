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
      <div className="Meditation-text">
        <h1>Mindfullness Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat
          a alias repellendus. Illo blanditiis dignissimos porro? Labore, fuga
          nostrum. Sed itaque autem quis aspernatur eius aperiam architecto
          animi saepe?
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
                  frameBorder="0" // Corrected attribute to frameBorder
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen // Corrected attribute to allowFullScreen
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

export default Mindfulness;