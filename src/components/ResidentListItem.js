import React from 'react';
import './ResidentListItem.css'

const ResidentListItem = (props) => {

  return (
    <React.Fragment>
      <div className="resident-list-item">
        <div className="resident-list-item-image">
          <img src={props.showImage} alt="show"></img>
        </div>
        <h4 className="resident-list-item-title">{props.showTitle}</h4>
      </div>

    </React.Fragment>
  )


}

export default ResidentListItem;
