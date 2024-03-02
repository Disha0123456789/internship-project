import FingerReading from "./Facecard/FingerReading";
import Fingerresult from "./Facecard/Fingerresult";

function FingerCard() {
  return (
    <div className="face-reader">
      <div>
        <FingerReading />
        <Fingerresult />
      </div>
    </div>
  );
}

export default FingerCard;
