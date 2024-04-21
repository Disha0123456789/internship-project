import React from "react";
import TimeMagicImage from '../../../../public/2nd-row-reading/time magic.png';
function Timemagicresult() {
  return (
    <div className="face-result">
      <h1 className="face-text-result">Time Magic</h1>
      <div className="Time-magic-pic">
      <img src={TimeMagicImage} style={{ borderRadius: '15px' }} />
      </div>
    </div>
  );
}

export default Timemagicresult;
