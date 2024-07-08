import React from "react";
import { useLocation } from "react-router-dom";

const TarotResult = () => {
  const loc = useLocation();
  const { head, image, title, heading, para } = loc.state;

  const formatParagraph = (text) => {
    return text
      .replace(/\n/g, '<br><br>')  // Replace \n with <br>
      .replace(/Positive Interpretations:/g, '<strong>Positive Interpretations:</strong>')  // Highlight Positive Interpretations:
      .replace(/Shadow Meanings:/g, '<strong>Area of Improvement:</strong>');  // Highlight Shadow Meanings:
  };

  return (
    <div className="Result-Tarot">
      <div className="tarot-result-card">
        <div className="Head-Text">
          <h1>{head}</h1>
        </div>
        <div className="tarot-card-image">
          <img src={image} alt={title} /> {/* Use the passed image path here */}
          <h3>{title}</h3>
        </div>
        <div className="tarot-result-info">
          <div className="tarot-info">
            <p>{heading}</p>
            <div
              className="tarot-para"
              dangerouslySetInnerHTML={{ __html: formatParagraph(para) }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotResult;
