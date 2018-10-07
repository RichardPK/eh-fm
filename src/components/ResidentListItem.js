import React from 'react';
import './ResidentListItem.css';
// import ResidentShowContainer from '../containers/ResidentShowContainer'
import { Link } from "react-router-dom";

const ResidentListItem = (props) => {

  const renderShowPageUrl = function() {
    return "/residents/" + props.showId
  }

  return (
    <React.Fragment>
      <div className="resident-list-item">
        <div className="resident-list-item-image">
          <Link to={renderShowPageUrl()}>
            <img src={props.thumbnailImage} alt="show"></img>
          </Link>
        </div>
        <h4 className="resident-list-item-title">{props.showTitle}</h4>
      </div>



    </React.Fragment>
  )


}

export default ResidentListItem;
