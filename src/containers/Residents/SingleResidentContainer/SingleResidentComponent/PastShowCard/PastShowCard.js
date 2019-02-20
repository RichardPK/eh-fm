import React from 'react';
import './PastShowCard.scss'

const PastShowCard = (props) => {

  return(
    <React.Fragment>

          <div
              className="resident-pastshow-card"
              onClick={props.handleMixCloudClick}
              key={props.key}>
              <div className="showname-info-cont">
                  <span className="resident-mixcloud-date">{props.renderDate}</span>
                  <span className="resident-mixcloud-showname">{props.renderShowName}</span>
                  <div className="resident-mixcloud-tags-container">{props.tags}</div>
              </div>
          </div>
  
    </React.Fragment>
  )

}

export default PastShowCard;
