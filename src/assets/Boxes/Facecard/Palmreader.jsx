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
    <div>
      <div className="face-reader">
        <h1 className="face-text">Face Reading</h1>
        <div>
          <div className="two-face">
            <div
              onClick={handleImageClick}
              className="card-mt-3 "
              style={{ width: "18rem", maxHeight: "360px" }}
            >
              <img src="" alt="" className="img-icon-1" />
              <img
                src="public\2nd row reading\palm-scanner.png"
                alt=""
                className="img-icon"
              />{" "}
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="img-display-after"
                />
              ) : (
                <img
                  src="public\2nd row reading\plain hand.png"
                  alt=""
                  className="img-icon"
                />
              )}
            </div>
          </div>

          <div className="choose-file-palm">
            <input
              type="file"
              src="public\2nd row reading\upload.png"
              ref={inputRef}
              onChange={handleImagechange}
            />
          </div>
          <button
            className="scan-btn-palm"
            onClick={() => navigate("/Palmresult")}
          >
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Palmreader;
