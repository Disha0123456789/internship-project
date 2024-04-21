import React from "react";
import LifeLineImage from '../../../../public/2nd-row-reading/life line.png';
import HeadLineImage from '../../../../public/2nd-row-reading/head-line.png';
import HeartLineImage from '../../../../public/2nd-row-reading/heart-line.png';
import RelationshipImage from '../../../../public/2nd-row-reading/relationship.png';
import HealthImage from '../../../../public/2nd-row-reading/health.png';
import WealthImage from '../../../../public/2nd-row-reading/wealth.png';
import CareerImage from '../../../../public/2nd-row-reading/career.png';
function Palmresult() {
  return (
    <div className="face-result-whole">
      <h1 className="face-text-result">Palm Results!</h1>
      <div className="Personal-Traits">
        <p className="personal-trait-text">Life Line</p>
        <img
          className="personal-trait-icon"
        src={LifeLineImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Life-Path">
        <p className="Life-path-text">Head Line</p>
        <img
          className="Life-path-icon"
          src={HeadLineImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Relationship">
        <p className="Relationship-text">Heart Line</p>
        <img
          className="Relationship-icon"
          src= {HeartLineImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Relationship</p>
        <img
          className="Growth-icon"
          src={RelationshipImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Health</p>
        <img
          className="Growth-icon"
          src={HealthImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Wealth</p>
        <img
          className="Growth-icon"
          src={WealthImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Career</p>
        <img
          className="Growth-icon"
          src={CareerImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
    </div>
  );
}

export default Palmresult;
