import React, { useRef, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageRecognitionLogo from '/assets/2nd-row-reading/FaceReading/images/facial-recognition.png';
import ImageProfile from '/assets/2nd-row-reading/FaceReading/images/face-profile.png';
import TimeMagicImage from '/assets/2nd-row-reading/FaceReading/images/time magic.png';
import KnowPast from '/assets/2nd-row-reading/FaceReading/images/know your past.png';
import axios from 'axios';
import Webcam from "react-webcam";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
//import './style.css';
function Faceread() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
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
      setWarningMessage("Please choose/upload an image of face to use this feature.*");
      setShowWarning(true);
      return;
    }

    const formData = new FormData();
    formData.append('imagefile', image);

    axios.post('https://divineconnection.co.in/face-detector/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        console.log("Data received from server:", response.data);
        navigate("/faceRead/Faceresult", { state: { data: response.data } });
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 400) {
            setWarningMessage("No face detected in the uploaded image. Please try again.");
          } else {
            setWarningMessage("An error occurred while processing your request. Please try again.*");
          }
        } else {
          setWarningMessage("An error occurred while processing your request. Please try again.*");
        }
        setShowWarning(true);
      });
  };

  const handleTimeMagicClick = () => {
    if (!image) {
      setWarningMessage("Please choose/upload an image of face to use this feature.*");
      setShowWarning(true);
    } else {
      navigate("/faceRead/Timemagicresult", { state: { image } });
    }
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
      <h1 className="face-text">Face Reading</h1>
      {showWarning && (
        <div className="warning-popup" style={{ textAlign: 'center' }}>
          <p style={{ color: 'red' }}>{warningMessage}</p>
          <button className="warning-btn" onClick={() => setShowWarning(false)}>Close</button>
        </div>
      )}
      <div className="face-input-section">
        <span className="two-face">
          <div onClick={handleImageClick} className="card-mt-3">
            <img src={ImageRecognitionLogo} alt="" className="img-icon-1" />
          </div>
          <div className="face-image-upload">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-icon"
              />
            ) : (
              <img src={ImageProfile} alt="" className="img-icon" />
            )}
          </div>
        </span>

        <div className="file-scan-container">
          <div className="choose-file">
            <input type="file" ref={inputRef} onChange={handleImageChange} className="file-input"/>
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

      <div className="time-past">
        <div className="time">
          <img
            className="magic-icon"
            src={TimeMagicImage}
            onClick={handleTimeMagicClick}
          />
          <div className="time-magic" onClick={handleTimeMagicClick}>
            <h3 className="magic-text">Want to See Your Future Self?</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Faceread;
