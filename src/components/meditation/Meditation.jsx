import React, { useEffect }from "react";
import { useNavigate } from "react-router-dom";
import "./meditation.css";

const Meditation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const options = [
    "Daily Meditation",
    "Chakra Meditation",
    "Meditation for sleep",
    "5 minute Meditation",
    "Mindfulness Meditation",
    "Meditation for Positive Energy",
    "Meditation for beginners",
    "Meditation for Mental Health",
    "Epic Power Meditation",
  ];
  const imgurl = [
    "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=1753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592895792095-85fa785192a9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554067559-269708c83fb6?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const onButtonClick = (option) => {
    switch (option) {
      case "Daily Meditation":
        navigate("/DailyMeditation");
        break;
      case "Chakra Meditation":
        navigate("/ChakraMeditation");
        break;
      case "Meditation for sleep":
        navigate("/SleepMeditation");
        break;
      case "5 minute Meditation":
        navigate("/5MinsMeditation");
        break;
      case "Mindfulness Meditation":
        navigate("/MindfullnessMeditation");
        break;
      case "Meditation for Positive Energy":
        navigate("/PositiveMindMeditation");
        break;
      case "Meditation for beginners":
        navigate("/BeginnerMeditation");
        break;
      case "Meditation for Mental Health":
        navigate("/MentalHealthMeditation");
        break;
      case "Epic Power Meditation":
        navigate("/EpicPowerMeditation");
        break;
      default:
        break;
    }
  };

  return (
    <div className="Main-page">
      <div className="Head-Text">
        <h1>Meditation</h1>
      </div>

      <div className="Options">
        {options.map((option, index) => (
          <div className="list" key={index}>
            <div className="circle">
              <img
                className="hy"
                onClick={() => onButtonClick(option)}
                src={imgurl[index]}
                alt="Meditation"
              />
            </div>
            <div className="list-item">
              {option}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meditation;
