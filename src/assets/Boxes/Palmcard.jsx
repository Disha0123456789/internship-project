import React from "react";
import Palmreader from "./Facecard/Palmreader";
import Palmresult from "./Facecard/Palmresult";

function Palmcard() {
  return (
    <div className="face-reader">
      <div>
        <Palmreader />
        <Palmresult />
      </div>
    </div>
  );
}

export default Palmcard;
