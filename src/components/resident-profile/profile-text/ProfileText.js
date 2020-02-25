import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import ResidentProfileSocial from "../resident-profile-social/ResidentProfileSocial";
import Devices from "../../../consts/Devices";
import { Heading1, Body, BodyExtraSpacing } from "../../text-elements/index";

const ProfileText = ({ props }) => {
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
    <Wrapper>
      <TitleAndTimeWrapper>
        <ShowTitle>{props.showTitle}</ShowTitle>

        {props.showTime && <ShowTime>{props.showTime}</ShowTime>}
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

      {props.showDescription && (
        <DescriptionWrapper>
          <DescriptionText>{props.showDescription}</DescriptionText>
        </DescriptionWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const TitleAndTimeWrapper = styled.div`
  background-color: transparent;
  display: inline-block;
  border-bottom: 4px solid white;
  @media ${Devices.mobileL} {
    background-color: ${Colors.spanBg};
  }
`;

const ShowTitle = styled(Heading1)`
  margin-top: 0px;
  color: ${Colors.playerWhite};
  font-weight: normal;
  padding: 4px;
`;

const ShowTime = styled(Body)`
  color: ${Colors.playerWhite};
  padding: 4px;
  letter-spacing: 0.04em;
`;

const SocialsWrapper = styled.div`
  display: flex;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  margin: 0.5rem 0 0;
  padding: 4px;

  @media ${Devices.mobileL} {
    width: 80vw;
    background-color: ${Colors.spanBg};
    margin: 1rem 0;
  }

  @media ${Devices.tablet} {
    width: 40vw;
  }
`;

const DescriptionText = styled(BodyExtraSpacing)`
  color: ${Colors.playerWhite};
`;

export default ProfileText;
