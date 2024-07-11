import React from "react";
import { useLocation } from "react-router-dom";
import personalTraitsImage from '/assets/2nd-row-reading/FaceReading/images/personal-traits.png';
import lifePurposeImage from '/assets/2nd-row-reading/FaceReading/images/life-path-and-purpose.png';
import relationCompatibilityImage from '/assets/2nd-row-reading/FaceReading/images/relationship compatibility.png';
import GrowthImage from '/assets/2nd-row-reading/FaceReading/images/growth and development.png';

function Faceresult() {
  const location = useLocation();
  const data = location.state?.data;

  const renderData = (data) => {
    if (typeof data === 'object' && data !== null) {
      return (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key.replace(/_/g, ' ')}:</strong> {renderData(value)}
            </li>
          ))}
        </ul>
      );
    }
    return data;
  };

  return (
    <div className="face-result-whole">
      <h1 className="face-text-result">Face Results!</h1>
      
      <div className="face-result-box">
        <p className="face-result-title">Personal Traits</p>
        <img className="face-result-icon" src={personalTraitsImage} alt="Personal Traits" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.personal_traits ? renderData(data.personal_traits) : "No data available"}
        </div>
      </div>
      
      <div className="face-result-box">
        <p className="face-result-title">Life Path And Purpose</p>
        <img className="face-result-icon" src={lifePurposeImage} alt="Life Path And Purpose" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.life_path_and_purpose ? renderData(data.life_path_and_purpose) : "No data available"}
        </div>
      </div>
      
      <div className="face-result-box">
        <p className="face-result-title">Relationship Compatibility</p>
        <img className="face-result-icon" src={relationCompatibilityImage} alt="Relationship Compatibility" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.relationship_compatibility ? renderData(data.relationship_compatibility) : "No data available"}
        </div>
      </div>
      
      <div className="face-result-box">
        <p className="face-result-title">Growth and Development</p>
        <img className="face-result-icon" src={GrowthImage} alt="Growth and Development" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.growth_and_development ? renderData(data.growth_and_development) : "No data available"}
        </div>
      </div>
    </div>
  );
}

export default Faceresult;
