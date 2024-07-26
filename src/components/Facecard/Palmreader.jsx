import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PalmIcon from '/assets/2nd-row-reading/PalmReading/images/palm-scanner.png';
import PalmUpload from '/assets/2nd-row-reading/PalmReading/images/plain hand.png';
import Webcam from "react-webcam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

function Palmreader() {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const inputRef = useRef(null);
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const [useFrontCamera, setUseFrontCamera] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleScanClick = () => {
    if (!image) {
      //console.log("Image not uploaded");
      setWarningMessage("Please choose/upload an image of Palm to use this feature.*");
      setShowWarning(true);
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    axios.post('https://divineconnection.co.in/palmistry/detect/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log("Data received from server:", response.data);
      if (response.data.error === "Warping failed") {
        //navigate("/Palmresult", { state: { data: null, error: "No Palm is detected, please try again." } });
        setWarningMessage("No Palm is detected in the uploaded image, please try again.*");
        setShowWarning(true);
      } else {
        navigate("/Palmresult", { state: { data: response.data } });
      }
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

  const toggleCamera = () => {
    setUseFrontCamera(prevState => !prevState);
  };

  const videoConstraints = {
    facingMode: useFrontCamera ? "user" : { exact: "environment" }
  };

  return (
    <div className="face-container">
    <div className="face-reader">
      <h1 className="face-text">Palm Reading</h1>
      {showWarning && (
        <div className="warning-popup" style={{ textAlign: 'center' }}>
          <p style={{ color: 'red' }}>{warningMessage}</p>
          <button className="warning-btn" onClick={() => setShowWarning(false)}>Close</button>
        </div>
      )}
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
          <div className="file-or">OR</div>
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
              videoConstraints={videoConstraints}
            />
            <div className="webcam-buttons">
              <button className="capture-btn" onClick={capture}>Capture Photo</button>
              <button className="switch-camera-btn" onClick={toggleCamera}>
                <FontAwesomeIcon icon={faSyncAlt} />
              </button>
              <button className="close-webcam-btn" onClick={() => setShowWebcam(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Palmreader;
