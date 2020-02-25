import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import ResidentProfileSocial from "../resident-profile-social/ResidentProfileSocial";
import Devices from "../../../consts/Devices";
import { Heading1 } from "../../text-elements/index";

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
      <TitleAndTimeWrapper>
        <ShowTitle>{props.showTitle}</ShowTitle>

        {renderShowTime()}
      </TitleAndTimeWrapper>

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

const TitleAndTimeWrapper = styled.div`
  background-color: transparent;
  @media ${Devices.mobileL} {
    background-color: ${Colors.spanBg};
  }
`;

const ShowTitle = styled(Heading1)`
  margin-top: 0px;
  color: ${Colors.playerWhite};
  font-weight: normal;
  padding: 4px;

  @media ${Devices.mobileL} {
    margin-top: 20px;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
`;

export default ProfileText;
