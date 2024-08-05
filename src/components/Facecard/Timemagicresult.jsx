//Aging
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Timemagicresult() {
  const location = useLocation();
  const navigate = useNavigate();
  const [processedImage, setProcessedImage] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    const { image } = location.state;

    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result.split(',')[1];
        //console.log("Base64 image ready to be sent to server");
        processImage(base64Image);
      };
      reader.readAsDataURL(image);
    } else {
      console.error("No image found in location state");
    }
  }, [location.state]);

  const processImage = (base64Image) => {
    //console.log("Sending image to server for processing");
    axios.post('https://divineconnection.co.in/process-image', {
      image: base64Image,
      source_age: 25, // Set as per your requirement
      target_age: 65  // Set as per your requirement
    })
      .then(response => {
      //  console.log("Received response from server:", response.data);
        if (response.data.processed_image) {
          setProcessedImage(`data:image/jpeg;base64,${response.data.processed_image}`);
        } else {
          console.error("No processed image in response");
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 400) {
          setWarningMessage("No face detected in the uploaded image. Please try again.");
        } else {
          setWarningMessage("An error occurred while processing your request. Please try again.");
        }
        setShowWarning(true);
      });
  };

  const handleWarningClose = () => {
    setShowWarning(false);
    navigate(-1); // Navigate back to the previous screen
  };

  return (
    <div className="face-result">
      <h1 className="face-text-result">Time Magic</h1>
      <div className="Time-magic-pic">
        {processedImage ? (
          <img src={processedImage} style={{ borderRadius: '15px' }} />
        ) : (
          <p>Processing...</p>
        )}
      </div>
      {showWarning && (
        <div className="warning-popup" style={{ textAlign: 'center' }}>
          <p style={{ color: 'red' }}>{warningMessage}</p>
          <button onClick={handleWarningClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Timemagicresult;
