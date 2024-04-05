import React from "react";
import personalTraitsImage from '../../../../public/2nd-row-reading/personal-traits.png';
import lifePurposeImage from '../../../../public/2nd-row-reading/life-path-and-purpose.png';
import relationCompatibilityImage from '../../../../public/2nd-row-reading/relationship compatibility.png';
import GrowthImage from '../../../../public/2nd-row-reading/growth and development.png';
function Faceresult() {
  return (
    <div className="face-result-whole">
      <h1 className="face-text-result">Face Results!</h1>
      <div className="Personal-Traits">
        <p className="personal-trait-text">Personal Traits</p>
        <img
          className="personal-trait-icon"
          src= {personalTraitsImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Life-Path">
        <p className="Life-path-text">Life Path And Purpose</p>
        <img
          className="Life-path-icon"
          src= {lifePurposeImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Relationship">
        <p className="Relationship-text">Relationship Compatibility</p>
        <img
          className="Relationship-icon"
          src= {relationCompatibilityImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Growth and Development</p>
        <img
          className="Growth-icon"
          src= {GrowthImage}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
    </div>
  );
}

export default Faceresult;
