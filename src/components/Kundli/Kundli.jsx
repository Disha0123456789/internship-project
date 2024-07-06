//Easy task
import React from "react";
import d from "/Kundli/matchmaking.png";
import third from "/Kundli/lifereport.png";
import four from "/Kundli/remedies.png";
import "./Kundli.css";
import { useNavigate } from 'react-router-dom';
function Kundli() {
  const navigate = useNavigate();
  const handleBirthPageClick = (nextpagePara) => {
    navigate('/MainPage', { state: { nextPage: nextpagePara } });
  };

  return (
    <div className="kundli-container">
      <div className="kundli-wrapper">
        <div className="Head-Text">
            <h1>Kundli</h1>
        </div>
        <hr className="kundli-line" />
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Match Making */}
          <div className="kundli-item">
            <img
              onClick={() => navigate('/matchmaking')} 
              src={d}
              alt="Match Making"
            />
            <div className="kundli-name">Match Making</div>
          </div>

          {/* Life Report */}
          <div className="kundli-item">
            <img
              onClick={() => handleBirthPageClick('lifeReport')}
              src={third}
              alt="Life Report"
            />
            <div className="kundli-name">Life Report</div>
          </div>

          {/* Remedies */}
          <div className="kundli-item">
            <img
              onClick={() => handleBirthPageClick('sadesati')}
              src={four}
              alt="Remedies"
            />
            <div className="kundli-name">Remedies</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kundli;
