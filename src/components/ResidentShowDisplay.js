import React from "react";
import "./ResidentShowDisplay.scss";

const ResidentShowDisplay = props => {
  return (
    <React.Fragment>
      <div className="resident-show-bg-img">
        <img src={props.showImage} alt={props.showTitle} />
      </div>

      <div className="resident-show-display-container">
        <h1>{props.showTitle}</h1>
        <p>{props.showDescription}</p>
      </div>

    </React.Fragment>
  );
};

export default ResidentShowDisplay;
