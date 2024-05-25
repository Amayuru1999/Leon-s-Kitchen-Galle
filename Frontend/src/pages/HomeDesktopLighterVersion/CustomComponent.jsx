import React from 'react';
import './CustomComponent.css'; // Import the CSS file

const CustomComponent = () => {
  return (
    <div className="container">
      <div className="inner-container">
        <div className="content">
          <img
            className="image-one"
            src="images/img_32700620370740.png"
            alt="32700620370740_One"
           
          />
          <div className="text-container">
            <p className="text-one">
              <a href="javascript:" className="link">
                Personalised
              </a>
              <span className="text-two">
                & Instant
              </span>
            </p>
          </div>
          <p className="text-three" >
            Download the Leon’s Kitchen app for faster ordering
          </p>
          <img
            className="image-two"
            src="images/img_appstorebadgesen.svg"
            alt="appstorebadgese"
          />
        </div>
      </div>
      <img
        className="image-three"
        src="images/img_friendslaughin_1089x832.png"
        alt="friendslaughin_One"
      />
    </div>
  );
};

export default CustomComponent;
