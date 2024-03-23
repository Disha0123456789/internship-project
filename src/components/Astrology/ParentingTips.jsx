import React from "react";
import "./style.css";

function ParentingTips() {
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Marriage Consultation</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <img src="../images/Marriage Consultation.png" alt="" />
            <button>
              <a href="./finalpage.html">Book Now</a>
            </button>
          </div>
          <div className="content-right">
            <p>
              A marriage consultation offers couples a platform to address
              concerns, enhance communication, and strengthen their
              relationship. Through facilitated discussions, couples can explore
              challenges, identify goals, and develop strategies for resolving
              conflicts. These sessions provide valuable insights, tools, and
              support to foster a healthier and more fulfilling marital bond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentingTips;
