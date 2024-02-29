import React from "react";

function Faceresult() {
  return (
    <div className="face-result-whole">
      <h1 className="face-text-result">Face Reading</h1>
      <div className="Personal-Traits">
        <p className="personal-trait-text">Personal Traits</p>
        <img
          className="personal-trait-icon"
          src="public\2nd row reading\personal traits.png"
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Life-Path">
        <p className="Life-path-text">Life Path And Purpose</p>
        <img
          className="Life-path-icon"
          src="public\2nd row reading\life path and purpose.png"
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Relationship">
        <p className="Relationship-text">Relationship Compatibility</p>
        <img
          className="Relationship-icon"
          src="public\2nd row reading\relationship compatibility.png"
        ></img>
        <hr className="hr-tag"></hr>
      </div>
      <div className="Growth">
        <p className="Growth-text">Growth and Development</p>
        <img
          className="Growth-icon"
          src="public\2nd row reading\growth and development.png"
        ></img>
        <hr className="hr-tag"></hr>
      </div>
    </div>
  );
}

export default Faceresult;
