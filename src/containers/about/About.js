import React, { useState } from "react";
import styled from "styled-components/macro";
import Img from "../../components/image/Image";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Heading3, Heading4, Body } from "../../components/text-elements/index";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const Wrapper = styled.div`
  height: calc(100vh - 150px - 3.5rem);
  margin: 143px auto ${(props) => (props.mixCloudWidget ? `123px` : 0)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
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

const TopWrapper = styled.div`
  background-color: ${Colors.spanBg};
  padding: 4px;
  margin-bottom: 2rem;
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const Heading = styled(Heading3)`
  margin-bottom: 1rem;
  color: ${Colors.playerWhite};
`;

const Subheading = styled(Heading4)`
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const Linebreak = styled.div`
  border-bottom: 2px solid ${Colors.playerWhiteCustom(0.8)};
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const AboutParagraphsWrapper = styled.div`
  margin-bottom: 2.5rem;
  padding: 4px;
  background-color: ${Colors.spanBg};
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const Paragraph = styled(Body)`
  margin-bottom: 0.5rem;
  color: ${Colors.playerWhite};
`;

const GetInvolvedOuterWrapper = styled.div`
  /* max-width: 540px; */
  margin-bottom: 1.5rem;
  background-color: ${Colors.spanBg};
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const GetInvolvedItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  margin-bottom: 0.25rem;

  grid-template-columns: 1.5fr 2fr;

  @media ${Devices.mobileL} {
    grid-template-columns: 1fr 2fr;
  }
`;

const GetInvolvedText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.playerWhite};
  padding: 4px;
`;

const GetInvolvedLink = styled(Heading4)`
  font-weight: normal;
  text-decoration: underline;
  color: ${Colors.playerWhite};
  padding: 4px;
`;

const About = ({ pageData, mixCloudWidget }) => {
  const {
    about,
    get_involved_details,
    get_involved_headline,
    image,
    subheader,
    headline,
  } = pageData.data;

  const AboutParagraphBlocks = () => {
    return about.map((dataItem) => {
      return <Paragraph>{dataItem.text}</Paragraph>;
    });
  };

  const GetInvolvedParagraphBlocks = () => {
    return get_involved_details.map((dataItem) => {
      return (
        <GetInvolvedItemWrapper>
          <GetInvolvedText>{dataItem.get_involved_text}</GetInvolvedText>
          <GetInvolvedLink href={dataItem.get_involved_link_href.url} as="a">
            {dataItem.get_involved_link_text}
          </GetInvolvedLink>
        </GetInvolvedItemWrapper>
      );
    });
  };

  return (
    <>
      <BackgroundImage mixCloudWidget={mixCloudWidget} imageSrc={image.url} />
      <Wrapper mixCloudWidget={mixCloudWidget}>
        <TopWrapper>
          <Heading>{headline}</Heading>
          <Subheading>{subheader}</Subheading>
          <Linebreak />
        </TopWrapper>
        <AboutParagraphsWrapper>
          {AboutParagraphBlocks()}
        </AboutParagraphsWrapper>
        <GetInvolvedOuterWrapper>
          <Heading>{get_involved_headline}</Heading>
          {GetInvolvedParagraphBlocks()}
        </GetInvolvedOuterWrapper>
        {/* <StyledImage baseUrl={image.url} alt={image.alt} /> */}
      </Wrapper>
    </>
  );
};

export default About;
