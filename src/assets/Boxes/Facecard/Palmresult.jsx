import React from "react";
import { useLocation } from "react-router-dom";
import LifeLineImage from '../../../../public/2nd-row-reading/life line.png';
import HeadLineImage from '../../../../public/2nd-row-reading/head-line.png';
import HeartLineImage from '../../../../public/2nd-row-reading/heart-line.png';
import RelationshipImage from '../../../../public/2nd-row-reading/relationship.png';
import HealthImage from '../../../../public/2nd-row-reading/health.png';
import WealthImage from '../../../../public/2nd-row-reading/wealth.png';
import CareerImage from '../../../../public/2nd-row-reading/career.png';

function Palmresult() {
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
      <h1 className="face-text-result">Palm Results!</h1>

      <div className="Personal-Traits">
        <p className="personal-trait-text">Life Line</p>
        <img className="personal-trait-icon" src={LifeLineImage} alt="Life Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.life_content_2 ? renderData(data.life_content_2) : "No data available"}
        </div>
      </div>

      <div className="Life-Path">
        <p className="Life-path-text">Head Line</p>
        <img className="Life-path-icon" src={HeadLineImage} alt="Head Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.head_content_2 ? renderData(data.head_content_2) : "No data available"}
        </div>
      </div>

      <div className="Relationship">
        <p className="Relationship-text">Heart Line</p>
        <img className="Relationship-icon" src={HeartLineImage} alt="Heart Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.heart_content_2 ? renderData(data.heart_content_2) : "No data available"}
        </div>
      </div>

      <div className="Growth">
        <p className="Growth-text">Marriage Line</p>
        <img className="Growth-icon" src={RelationshipImage} alt="Marriage Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.marriage_content_2 ? renderData(data.marriage_content_2) : "No data available"}
        </div>
      </div>

      <div className="Growth">
        <p className="Growth-text">Fate Line</p>
        <img className="Growth-icon" src={CareerImage} alt="Fate Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.fate_content_2 ? renderData(data.fate_content_2) : "No data available"}
        </div>
      </div>
    </div>
  );
}

export default Palmresult;
