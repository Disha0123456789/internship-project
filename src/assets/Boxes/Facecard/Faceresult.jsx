import React from "react";
import { useLocation } from "react-router-dom";
import personalTraitsImage from '../../../../public/2nd-row-reading/personal-traits.png';
import lifePurposeImage from '../../../../public/2nd-row-reading/life-path-and-purpose.png';
import relationCompatibilityImage from '../../../../public/2nd-row-reading/relationship compatibility.png';
import GrowthImage from '../../../../public/2nd-row-reading/growth and development.png';

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
      
      <div className="Personal-Traits">
        <p className="personal-trait-text">Personal Traits</p>
        <img className="personal-trait-icon" src={personalTraitsImage} alt="Personal Traits" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.personal_traits ? renderData(data.personal_traits) : "No data available"}
        </div>
      </div>
      
      <div className="Life-Path">
        <p className="Life-path-text">Life Path And Purpose</p>
        <img className="Life-path-icon" src={lifePurposeImage} alt="Life Path And Purpose" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.life_path_and_purpose ? renderData(data.life_path_and_purpose) : "No data available"}
        </div>
      </div>
      
      <div className="Relationship">
        <p className="Relationship-text">Relationship Compatibility</p>
        <img className="Relationship-icon" src={relationCompatibilityImage} alt="Relationship Compatibility" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.relationship_compatibility ? renderData(data.relationship_compatibility) : "No data available"}
        </div>
      </div>
      
      <div className="Growth">
        <p className="Growth-text">Growth and Development</p>
        <img className="Growth-icon" src={GrowthImage} alt="Growth and Development" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.growth_and_development ? renderData(data.growth_and_development) : "No data available"}
        </div>
      </div>
    </div>
  );
}

export default Faceresult;
