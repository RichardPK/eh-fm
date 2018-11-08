import React from "react";
import "./ResidentShowDisplay.scss";

const ResidentShowDisplay = props => {

  function renderFacebook() {
    if (props.facebook) {
      return (
        <div className="social-icon">
          <a href={props.facebook} target="blank">
            <img src="/facebook-white.png" alt="facebook page" />
          </a>
        </div>
      )
    }
  }

  function renderTwitter() {
    if (props.twitter) {
      return (
        <div className="social-icon">
          <a href={props.twitter} target="blank">
            <img src="/twitter-white.png" alt="twitter profile" />
          </a>
        </div>
      )
    }
  }

  function renderInstagram() {
    if (props.instagram) {
      return (
        <div className="social-icon">
          <a href={props.instagram} target="blank">
            <img src="/instagram-white.png" alt="instagram profile" />
          </a>
        </div>
      )
    }
  }

  function renderShowTime() {

    if (props.showTime) {

      return (
        <div className="resident-show-time">
          <span>{props.showTime}</span>
        </div>
      )
    }
  }

  return <React.Fragment>
    <div className="resident-show-bg-img" style={{ backgroundImage: `url(${props.showImage})` }} />
    {/* <img src={props.showImage} alt={props.showTitle} /> */}
    {/* </div> */}

    <div className="resident-show-display-container">
      <h3>
        <span>{props.showTitle}</span>
      </h3>
          {renderShowTime()}
      <div className="resident-show-display-description">
        <p>
          <span>{props.showDescription}</span>
        </p>
      </div>
      <div className="resident-show-footer">
        <div className="resident-show-socials">
          {renderFacebook()}
          {renderTwitter()}
          {renderInstagram()}
        </div>
        
      </div>
    </div>
  </React.Fragment>;
};

export default ResidentShowDisplay;
