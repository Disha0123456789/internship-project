import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PalmIcon from '/2nd-row-reading/palm-scanner.png';
import PalmUpload from '/2nd-row-reading/plain hand.png';

function Palmreader() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

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
        console.log("Image not uploaded");
        return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('image', image);

    // Make a POST request to the Django API endpoint with FormData containing the image
    axios.post('http://localhost:8000/palmistry/detect/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(response => {
        // Log the received data
        console.log("Data received from server:", response.data);

        // Navigate to "/Palmresult" after successful response, passing the data
        navigate("/Palmresult", { state: { data: response.data } });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error if needed
    });
  };

  return (
    <div className="face-reader">
      <h1 className="face-text">Palm Reading</h1>
      <div className="palm-input-section">
        <span className="two-face">
          <div
            onClick={handleImageClick}
            className="card-mt-3"
          >
            <img
              src={PalmIcon}
              alt=""
              className="img-icon-1"
            />
          </div>
          <div className="face-image-upload">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="img-icon"
              />
            ) : (
              <img
                src={PalmUpload}
                alt=""
                className="img-icon"
              />
            )}
          </div>
        </span>

        <div className="file-scan-container">
          <div className="choose-file">
            <input type="file" ref={inputRef} onChange={handleImageChange}  className="file-input" />
          </div>
          <button className="scan-btn" onClick={handleScanClick}>
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Palmreader;
