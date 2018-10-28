import React from "react";
import "./ResidentShowDisplay.scss";

const ResidentShowDisplay = props => {
  return (
    <React.Fragment>
      <div className="resident-show-bg-img">
        <img src={props.showImage} alt={props.showTitle} />
      </div>

      <div className="resident-show-display-container">
        <h3><span>{props.showTitle}</span></h3>
        <div className="resident-show-display-description">
          <p><span>{props.showDescription}</span></p>
        </div>
      </div>

    </React.Fragment>
  );
};

export default ResidentShowDisplay;
