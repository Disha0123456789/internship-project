import React, { useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PalmIcon from '/2nd-row-reading/palm-scanner.png';
import PalmUpload from '/2nd-row-reading/plain hand.png';
import Webcam from "react-webcam";

function Palmreader() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleScanClick = () => {
    if (!image) {
      console.log("Image not uploaded");
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    axios.post('http://localhost:8000/palmistry/detect/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log("Data received from server:", response.data);
      navigate("/Palmresult", { state: { data: response.data } });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const handleCaptureClick = () => {
    setShowWebcam(true);
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    fetch(imageSrc)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], "capturedImage.jpg", { type: "image/jpeg" });
        setImage(file);
        setShowWebcam(false);
      });
  }, [webcamRef]);

  return (
    <div className="face-reader">
      <h1 className="face-text">Palm Reading</h1>
      <div className="palm-input-section">
        <span className="two-face">
          <div onClick={handleImageClick} className="card-mt-3">
            <img src={PalmIcon} alt="" className="img-icon-1" />
          </div>
          <div className="face-image-upload">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" className="img-icon" />
            ) : (
              <img src={PalmUpload} alt="" className="img-icon" />
            )}
          </div>
        </span>

        <div className="file-scan-container">
          <div className="choose-file">
            <input type="file" ref={inputRef} onChange={handleImageChange} className="file-input" />
          </div>
          <button className="capture-btn" onClick={handleCaptureClick}>
            Capture
          </button>
          <button className="scan-btn" onClick={handleScanClick}>
            Scan
          </button>
        </div>
      </div>

      {showWebcam && (
        <div className="webcam-overlay">
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
            <div className="webcam-buttons">
              <button className="capture-btn" onClick={capture}>Capture Photo</button>
              <button className="close-webcam-btn" onClick={() => setShowWebcam(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Palmreader;
