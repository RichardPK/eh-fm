import React from "react";
import "./ResidentListItem.scss";
// import ResidentShowContainer from '../containers/ResidentShowContainer'
import { Link } from "react-router-dom";

const ResidentListItem = props => {
  const renderShowPageUrl = function() {
    return "/residents/" + props.showId;
  };

  return (
    <React.Fragment>
      <Link to={renderShowPageUrl()}>
        <div className="resident-list-item">
          <div className="resident-list-item-image">
            <img src={props.thumbnailImage} alt="show"></img>
          </div>
          <h4 className="resident-list-item-title">{props.showTitle}</h4>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ResidentListItem;
