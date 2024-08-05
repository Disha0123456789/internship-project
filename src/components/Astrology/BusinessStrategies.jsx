import React, { useEffect }from "react";
//import "../../assets/AstroMain.css";
import { useNavigate } from "react-router-dom";
import image from '/assets/3rd-row/Astrology/images/Business Strategies.png';
function BusinessStrategies() {
  const navigate = useNavigate();
  const head = "Business Strategies";
  const img = image;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Main-page">
      <div className="astro-Container">
        <div className="astro-Container-heading">
          <h1>Business Strategies</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-bs"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Using Divine Connection's Business strategies are purposeful
              maneuvers and plans adopted by a company to attain its goals and
              outperform competitors in the market. They encompass decisions on
              product development, pricing, marketing, distribution, and
              resource allocation, all geared toward enhancing profitability and
              ensuring sustained growth over the long term.
              <br />
              <br />
              Effective strategies align with the company's mission and market
              dynamics, leveraging strengths while addressing weaknesses. By
              strategically positioning products or services, optimizing pricing
              strategies, and allocating resources efficiently, businesses aim
              to gain a competitive edge, capture market share.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessStrategies;