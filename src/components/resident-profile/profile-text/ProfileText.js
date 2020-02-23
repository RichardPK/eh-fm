import React from "react";
import styled from "styled-components";
import ResidentProfileSocial from "../resident-profile-social/ResidentProfileSocial";

const ProfileText = ({ props }) => {
  const renderShowTime = () => {
    if (props.showTime) {
      return (
        <div className="resident-show-time">
          <span>{props.showTime}</span>
        </div>
      );
    }
  };

  const renderFacebook = () => {
    if (props.facebook) {
      return (
        <div className="social-icon">
          <a href={props.facebook} target="blank">
            <img src="/facebook-white.png" alt="facebook page" />
          </a>
        </div>
      );
    }
  };

  const renderTwitter = () => {
    if (props.twitter) {
      return (
        <div className="social-icon">
          <a href={props.twitter} target="blank">
            <img src="/twitter-white.png" alt="twitter profile" />
          </a>
        </div>
      );
    }
  };

  const renderInstagram = () => {
    if (props.instagram) {
      return (
        <div className="social-icon">
          <a href={props.instagram} target="blank">
            <img src="/instagram-white.png" alt="instagram profile" />
          </a>
        </div>
      );
    }
  };

  const hrefs = {
    instagram: props.instagram,
    facebook: props.facebook,
    twitter: props.twitter
  };

  const imgSrcs = {
    instagram: "/instagram-white.png",
    facebook: "/facebook-white.png",
    twitter: "/twitter-white.png"
  };

  return (
    <div className="resident-show-text-container">
      <div className="resident-show-title-container">
        <h3>
          <span>{props.showTitle}</span>
        </h3>
        {renderShowTime()}
      </div>

      <div className="resident-show-socials">
        {props.facebook && (
          <ResidentProfileSocial
            type={"facebook"}
            hrefs={hrefs}
            imgSrcs={imgSrcs}
          />
        )}

        {props.twitter && (
          <ResidentProfileSocial
            type={"twitter"}
            hrefs={hrefs}
            imgSrcs={imgSrcs}
          />
        )}

        {props.instagram && (
          <ResidentProfileSocial
            type={"instagram"}
            hrefs={hrefs}
            imgSrcs={imgSrcs}
          />
        )}
      </div>

      {props.showDescription ? (
        <div className="resident-show-display-description">
          <p>
            <span>{props.showDescription}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileText;
