import React, { useState } from "react";
import styled from "styled-components/macro";
import Img from "../../components/image/Image";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Heading3, Heading4 } from "../../components/text-elements/index";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;

  padding: 0 1rem;
  margin: 2rem 0
    ${(props) =>
      props.cookiesBannerShowing ? "70px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.mobileL} {
    padding: 0 2rem;
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);

    margin: 2.5rem 0
      ${(props) =>
        props.cookiesBannerShowing
          ? "95px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }
`;

const Heading = styled(Heading3)`
  margin-bottom: 1rem;
  grid-column: 1 / 2;
  grid-row: 1;
`;

const Subheading = styled(Heading4)`
  font-weight: normal;
  color: ${Colors.notQuiteBlack(0.7)};
  margin-bottom: 1rem;
  grid-column: 1 / 2;
  grid-row: 2;
`;

const Linebreak = styled.div`
  border-bottom: 2px solid ${Colors.notQuiteBlack(0.2)};
  margin-bottom: 2rem;
  grid-column: 1 / 2;
  grid-row: 3;
`;

const StyledImage = styled(Img)`
  grid-column: 1 / 3;
  grid-row: 4;
`;

const About = ({ pageData }) => {
  const {
    about,
    want_to_get_involved,
    image,
    subheader,
    headline,
  } = pageData.data;

  return (
    <Wrapper>
      <Heading>{headline}</Heading>
      <Subheading>{subheader}</Subheading>
      <Linebreak />
      <StyledImage baseUrl={image.url} alt={image.alt} />
    </Wrapper>
  );
};

export default About;
