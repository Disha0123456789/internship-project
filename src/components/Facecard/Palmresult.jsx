import React from "react";
import { useLocation } from "react-router-dom";
import LifeLineImage from '/assets/2nd-row-reading/PalmReading/images/life line.png';
import HeadLineImage from '/assets/2nd-row-reading/PalmReading/images/head-line.png';
import HeartLineImage from '/assets/2nd-row-reading/PalmReading/images/heart-line.png';
import RelationshipImage from '/assets/2nd-row-reading/PalmReading/images/relationship.png';
//import HealthImage from '/assets/2nd-row-reading/PalmReading/images/health.png';
//import WealthImage from '/assets/2nd-row-reading/PalmReading/images/wealth.png';
import CareerImage from '/assets/2nd-row-reading/PalmReading/images/career.png';

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
    } else if (typeof data === 'string' && data.includes(':')) {
      const parts = data.split(':');
      return (
        <span>
          <strong>{parts[0]}:</strong>{parts.slice(1).join(':')}
        </span>
      );
    }
    return data;
  };

  return (
    <div className="face-result-whole">
      <h1 className="face-text-result">Palm Results!</h1>

      <div className="face-result-box">
        <p className="face-result-title">Life Line</p>
        <img className="face-result-icon" src={LifeLineImage} alt="Life Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.life_content_2 ? renderData(data.life_content_2) : "No data available"}
        </div>
      </div>

      <div className="face-result-box">
        <p className="face-result-title">Head Line</p>
        <img className="face-result-icon" src={HeadLineImage} alt="Head Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.head_content_2 ? renderData(data.head_content_2) : "No data available"}
        </div>
      </div>

      <div className="face-result-box">
        <p className="face-result-title">Heart Line</p>
        <img className="face-result-icon" src={HeartLineImage} alt="Heart Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.heart_content_2 ? renderData(data.heart_content_2) : "No data available"}
        </div>
      </div>

      <div className="face-result-box">
        <p className="face-result-title">Marriage Line</p>
        <img className="face-result-icon" src={RelationshipImage} alt="Marriage Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.marriage_content_2 ? renderData(data.marriage_content_2) : "No data available"}
        </div>
      </div>

      <div className="face-result-box">
        <p className="face-result-title">Fate Line</p>
        <img className="face-result-icon" src={CareerImage} alt="Fate Line" />
        <hr className="hr-tag" />
        <div className="face_result_data-content">
          {data?.fate_content_2 ? renderData(data.fate_content_2) : "No data available"}
        </div>
      </div>
    </div>
  );
}

export default Palmresult;
