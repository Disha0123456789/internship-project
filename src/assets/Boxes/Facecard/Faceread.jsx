import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Faceread() {
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
      <h1 className="face-text">Face Reading</h1>
      <div className="face-input-section">
  <span className="two-face">
    <div
      onClick={handleImageClick}
      className="card-mt-3 "
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img
        src="../../../../public/2nd-row-reading/facial-recognition.png"
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
          src="../../../../public/2nd-row-reading/face-profile.png"
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


      <div className="time-past">
        <div className="time">
          <img
            className="magic-icon"
            src="../../../../public/2nd-row-reading/time magic.png"
            onClick={() => navigate("/Timemagicresult")}
          ></img>
          <div
            className="time-magic"
            onClick={() => navigate("/Timemagicresult")}
          >
            <h3 className="magic-text">Time Magic</h3>
          </div>
        </div>
        <div className="time">
          <img
            className="ancestors-from"
            src="../../../../public/2nd-row-reading/know your past.png"
            onClick={() => navigate("/Ancestors")}
          ></img>
          <span className="time-magic" onClick={() => navigate("/Ancestors")}>
            <h3 className="ancestors-text">Where Are My Ancestors From ?</h3>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Faceread;
