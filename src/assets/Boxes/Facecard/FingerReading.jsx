import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function FingerReading() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div className="finger-reader">
      <h1 className="finger-text">Finger Reading</h1>
      <div className="palm-container">
        <div
          onClick={handleImageClick}
          className="card-mt-3 palm-card"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="" alt="" className="img-icon-1" />
          <img
            src="public/2nd-row-reading/palm-background.png"
            alt=""
            className="img-icon"
          />
          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="img-display-after"
            />
          ) : (
            <img
              src="public/2nd-row-reading/plain-hand.png"
              alt=""
              className="img-icon"
            />
          )}
        </div>
      </div>

      <div className="choose-file-finger">
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>
      <button
        className="scan-btn-finger"
        onClick={() => navigate("/Fingerresult")}
      >
        Scan
      </button>
    </div>
  );
}

export default FingerReading;