import React from 'react';

const ResidentShowDisplay = (props) => {

  return(
    <div className="resident-show-display-container">
      <h1>{props.showTitle}</h1>
      <p>{props.showDescription}</p>
    </div>
  )

}

export default ResidentShowDisplay;
