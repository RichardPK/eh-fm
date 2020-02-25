import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import ResidentProfileSocial from "../resident-profile-social/ResidentProfileSocial";
import Devices from "../../../consts/Devices";

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

      <SocialsWrapper>
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
      </SocialsWrapper>

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

const SocialsWrapper = styled.div`
  display: flex;
`;

export default ProfileText;
