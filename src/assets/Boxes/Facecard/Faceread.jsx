import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageRecognitionLogo from '../../../../public/2nd-row-reading/facial-recognition.png';
import ImageProfile from '../../../../public/2nd-row-reading/face-profile.png';
import TimeMagicImage from '../../../../public/2nd-row-reading/time magic.png';
import KnowPast from '../../../../public/2nd-row-reading/know your past.png';
import axios from 'axios';

function Faceread() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleScanClick = () => {
    // Check if an image is selected
    if (!image) {
      setShowWarning(true);
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('imagefile', image);

    // Make a POST request to the Django API endpoint with FormData containing the image
    axios.post('http://localhost:8000/face-detector/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        // Log the received data
        console.log("Data received from server:", response.data);

        // Navigate to "/Faceresult" after successful response, passing the data
        navigate("/Faceresult", { state: { data: response.data } });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error if needed
      });
  };

  const handleTimeMagicClick = () => {
    if (!image) {
      setShowWarning(true);
    } else {
      navigate("/Timemagicresult", { state: { image } });
    }
  };

  return (
    <div className="face-reader">
      <h1 className="face-text">Face Reading</h1>
      {showWarning && (
        <div className="warning-popup" style={{ textAlign: 'center' }}>
          <p style={{ color: 'red' }}>Please choose/upload an image to use this feature.*</p>
          <button onClick={() => setShowWarning(false)}>Close</button>
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
                className="img-display-after"
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
          <button className="scan-btn" onClick={handleScanClick}>
            Scan
          </button>
        </div>
      </div>

      <div className="time-past">
        <div className="time">
          <img
            className="magic-icon"
            src={TimeMagicImage}
            onClick={handleTimeMagicClick}
          />
          <div className="time-magic" onClick={handleTimeMagicClick}>
            <h3 className="magic-text">Time Magic</h3>
          </div>
        </div>
        {/** 
        <div className="time">
          <img
            className="ancestors-from"
            src={KnowPast}
            onClick={() => navigate("/Ancestors")}
          />
          <span className="time-magic" onClick={() => navigate("/Ancestors")}>
            <h3 className="ancestors-text">Where Are My Ancestors From?</h3>
          </span>
        </div>
        */}
      </div>
    </div>
  );
}

export default Faceread;
