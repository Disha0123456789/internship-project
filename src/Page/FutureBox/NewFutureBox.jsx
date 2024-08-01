import React from "react";
import { useNavigate } from "react-router-dom";
import "./newFutureBox.css";

const NewFutureBox = () => {
  const navigate = useNavigate();

  const handleBirthPageClick = (nextpagePara) => {
    navigate('/MainPage', { state: { nextPage: nextpagePara } });
  };

  return (
    <>
      <div className="future-box-container">
        <h1 className="future-box-heading">
          Read Your Future Now!
        </h1>
        <div className="future-grid-container grid-container-lg">
          <div
            onClick={() => navigate("/tarot-reading")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/tarot.png" alt="12" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Tarot Reading
              </h3>
            </div>
          </div>

          <div
            onClick={() => navigate("/faceRead")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/face.png" alt="13" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Face Reading
              </h3>
            </div>
          </div>

          <div
            onClick={() => navigate("/palmReader")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/palm.png" alt="13" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Palm Reading
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="future-box-container">
        <h1 className="future-box-heading">
          Embark On Your Journey!
        </h1>
        <div className="future-grid-container grid-container-lg">
          <div
            onClick={() => navigate("/TimeTravel")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/timetravel.png" alt="14" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Time Travel
              </h3>
            </div>
          </div>

          <div
            onClick={() => navigate("/AstroHome")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/astrology.png" alt="15" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Astrology
              </h3>
            </div>
          </div>

          <div
            onClick={() => navigate("/lineChart")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/biorythm.png" alt="16" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Biorhythm
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="future-box-container">
        <h1 className="future-box-heading">
          Let's Go To Another Dimension!
        </h1>
        <div className="future-grid-container grid-container-lg">
          {/*<div className="hidden lg:block lg:col-span-1"></div> */}

          <div
            onClick={() => navigate("/dream")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/dreaminterpretation.png" alt="17" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Dream Meaning
              </h3>
            </div>
          </div>

          <div className="lg:block lg:col-span-1"></div>
          
          <div
            onClick={() => navigate('/numerology')}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/numerology.png" alt="16" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800"style={{margin:'0px'}}>
                Numerology
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="future-box-container">
        <h1 className="future-box-heading">
          Nourish Your Soul!
        </h1>
        <div className="future-grid-container grid-container-lg">
          {/*<div className="hidden lg:block lg:col-span-1"></div> */}

          <div
            onClick={() => navigate("/Meditation")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/meditation.png" alt="14" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Meditation
              </h3>
            </div>
          </div>

          <div className="lg:block lg:col-span-1"></div>

          <div
            onClick={() => navigate("/EmotionalSupport")}
            className="future-grid-item">
            <div className="flex justify-center items-center size-20 rounded-lg mx-auto">
              <img src="/assets/ICONS/emotionalsupport.png" alt="15" />
            </div>
            <div className="future-title">
              <h3 className="text-md sm:text-xl font-semibold text-gray-800" style={{margin:'0px'}}>
                Emotional Support
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFutureBox;
