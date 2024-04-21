import React from "react";
import ancestorIcon from '../../../../public/2nd-row-reading/where your ancestors come from.png';
function Ancestors() {
  return (
    <div className="face-result">
      <h1 className="face-text-result">Know Your Past</h1>
      <div className="Know-past">
        <p className="personal-trait-text">Ancestral Roots</p>
        <img
          className="personal-trait-icon"
          src={ancestorIcon}
        ></img>
        <hr className="hr-tag"></hr>
      </div>
    </div>
  );
}

export default Ancestors;
