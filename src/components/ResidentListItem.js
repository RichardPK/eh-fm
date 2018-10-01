import React from 'react';

const ResidentListItem = (props) => {

  return (
    <React.Fragment>
      <div className="resident-list-item">
        <h4>{props.showTitle}</h4>
        <p>{props.showDescription}</p>
        <img src={props.showImage} alt="show"></img>
      </div>

    </React.Fragment>
  )


}

export default ResidentListItem;
