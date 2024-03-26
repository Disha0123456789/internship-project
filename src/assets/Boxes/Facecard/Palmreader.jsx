import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Palmreader() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    input.current.click();
  };
  const handleImagechange = (event) => {
    const file = event.target.files[0];
    setImage(event.target.files[0]);
  };
  return (
      <div className="face-reader">
        <h1 className="face-text">Palm Reading</h1>
        <div className="face-input-section">
        <span className="two-face">
          <div
            onClick={handleImageClick}
            className="card-mt-3 "
            style={{ width: "18rem", maxHeight: "360px" }}
          >
          <img
            src="../../../../public/2nd-row-reading/palm-scanner.png"
            alt=""
            className="img-icon-1"
          />{" "}
          </div>
          <div className="face-image-upload">
            {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="img-display-after"
            />
            ) : (
            <img
              src="../../../../public/2nd-row-reading/plain hand.png"
              alt=""
              className="img-icon"
            />
            )}
          </div>
        </span>

        <div className="file-scan-container">
          <div className="choose-file">
            <input type="file" ref={inputRef} onChange={handleImagechange} />
          </div>
          <button className="scan-btn" onClick={() => navigate("/Faceresult")}>
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Palmreader;
