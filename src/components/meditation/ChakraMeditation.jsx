import React, { useEffect }from "react";
//import "./meditation.css";

const ChakraMeditation = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const name = [
    "10 Minute Root Chakra Guided Meditation",
    "Boost Creativity, Desire & Confidence",
    "Unconditional Love 10 Minute Meditation",

    "Throat Chakra Meditation",

    "Third Eye Chakra Guided Meditation",

    "Crown Chakra Guided Meditation",

    "Chakra Balancing and Cleansing ",

    "Positive Energy Chakra Meditation",
    "Full Body 7 Chakra Healing Guided Meditation",
    "Sacral Chakra Guided Meditation",
  ];
  const links = [
    "https://www.youtube.com/embed/ersZEW9ucA4?si=CLE8uU4OjqKzu8fb",
    "https://www.youtube.com/embed/6juYDQvORDw?si=3p3zlN_kElR_SCK3",
    "https://www.youtube.com/embed/jQZdZ9kzKBc?si=0xi7lhGSf2ShUqd1",
    "https://www.youtube.com/embed/RPCr5uZWRd0?si=zdJxJoFdxFw8LM3y",
    "https://www.youtube.com/embed/EVsuqUKrx-I?si=3DNaCkQpqxPdxBqw",
    "https://www.youtube.com/embed/dgTx58ejJ_w?si=JTwz5E7BNqWRxI_C",
    "https://www.youtube.com/embed/thjrAfpeJ7A?si=9LXDn_Z-GausV4sB",
    "https://www.youtube.com/embed/RbVbo9BkuiA?si=FORsJWvkuhFDDfQB",
    "https://www.youtube.com/embed/wXkSXbntKwU?si=3MhILcNFeR3cAHcx",
    "https://www.youtube.com/embed/vlLwR2x9ekY?si=zPqPCZbMMiNXJSHL",
  ];
  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Chakra Meditation</h1>
      </div>
      <div className="Hero-section">
        <p>
          Engage in chakra meditation to harmonize the body's energy centers,
          fostering balance and vitality within. Through focused attention and
          breathwork, delve into the subtle realms of consciousness, nurturing
          inner peace and spiritual alignment.
        </p>
        <div className="cards">
          {name.map((name, index) => {
            return (
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
            );
          })}
        </div>
        <div className="meditationVideos"></div>
      </div>
    </div>
  );
};

export default ChakraMeditation;
