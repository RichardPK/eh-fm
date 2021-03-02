import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";
import TopSection from "./TopSection";
import GetInvolved from "./GetInvolved";
import BodyParagraphs from "./BodyParagraphs";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 86px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 196px - 3.5rem);
  margin: 46px auto ${(props) => (props.mixCloudWidget ? `103px` : 0)};

  padding: 0 1rem;

  @media ${Devices.mobileL} {
    padding: 0 2rem;
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);
    margin: 2.5rem 0;
  }
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
`;

const About = ({ pageData }) => {
  const {
    about,
    get_involved_details,
    image,
    subheader,
    headline,
  } = pageData.data;

  return (
    <>
      <StyledBackgroundImage imageSrc={image.url} />
      <Wrapper>
        <InnerWrapper>
          <TopSection headline={headline} subheader={subheader} />
          <BodyParagraphs aboutText={about} />
          <GetInvolved get_involved_details={get_involved_details} />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
