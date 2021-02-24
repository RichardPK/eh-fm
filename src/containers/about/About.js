import React, { useState } from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Heading3, Heading4, Body } from "../../components/text-elements/index";
import BackgroundImage from "../../components/resident-profile/background-image/BackgroundImage";

const StyledBackgroundImage = styled(BackgroundImage)`
  top: 86px;
`;

const Wrapper = styled.div`
  height: calc(100vh - 196px - 3.5rem);
  margin: 123px auto ${(props) => (props.mixCloudWidget ? `103px` : 0)};

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

const TopWrapper = styled.div`
  background-color: ${Colors.spanBg};
  margin-bottom: 1rem;

  grid-column: 1 / 7;

  @media ${Devices.mobileL} {
    grid-column: 1 / 6;
  }

  @media ${Devices.tablet} {
    grid-column: 1 / 5;
  }

  @media ${Devices.laptop} {
    grid-column: 1 / 3;
  }
`;

const Heading = styled(Heading3)`
  margin-bottom: 1rem;
  padding: 8px 8px 0 8px;
  color: ${Colors.playerWhite};
`;

const Subheading = styled(Heading4)`
  font-weight: normal;
  padding: 0 8px;
  margin-bottom: 1rem;
  color: ${Colors.playerWhite};
`;

const Linebreak = styled.div`
  border-bottom: 4px solid ${Colors.playerWhiteCustom(0.8)};
`;

const AboutParagraphsWrapper = styled.div`
  margin-bottom: 2.5rem;
  padding: 8px;
  background-color: ${Colors.spanBg};
  grid-column: 1 / 7;

  @media ${Devices.mobileL} {
    grid-column: 1 / 6;
  }

  @media ${Devices.tablet} {
    grid-column: 1 / 5;
  }

  @media ${Devices.laptop} {
    grid-column: 1 / 3;
  }

  span:first-of-type {
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled(Body)`
  color: ${Colors.playerWhite};
`;

const BottomWrapper = styled.div`
  position: relative;
`;

const GetInvolvedOuterWrapper = styled.div`
  grid-column: 1 / 7;

  @media ${Devices.mobileL} {
    grid-column: 1 / 6;
  }

  @media ${Devices.tablet} {
    grid-column: 1 / 5;
  }

  @media ${Devices.laptop} {
    grid-column: 1 / 3;
  }
`;

const GetInvolvedHeading = styled(Heading3)`
  padding: 0.5rem 0.5rem 1rem;
  /* margin-bottom: 1rem; */
  display: inline-block;
  /* padding: 4px 4px 0 4px; */
  background-color: ${Colors.spanBg};

  /* border-bottom: 2px solid ${Colors.playerWhiteCustom(0.8)}; */
  color: ${Colors.playerWhite};
`;

const GetInvolvedItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: auto auto auto;
  margin-bottom: 0.75rem;
  padding: 8px;
  border-radius: 2px;
  /* border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)}; */

  background-color: ${Colors.ehfmPrimary()};

  grid-template-columns: 1.5fr auto;

  @media ${Devices.mobileL} {
    grid-template-columns: 1fr auto;
  }
`;

const GetInvolvedText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const GetInvolvedLink = styled(Heading4)`
  font-weight: normal;
  /* text-decoration: underline; */
  color: ${Colors.playerWhite};

  border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)};
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
      <StyledBackgroundImage
        mixCloudWidget={mixCloudWidget}
        imageSrc={image.url}
      />
      <Wrapper mixCloudWidget={mixCloudWidget}>
        <InnerWrapper>
          <TopWrapper>
            <Heading>{headline}</Heading>
            <Subheading>{subheader}</Subheading>
            <Linebreak />
          </TopWrapper>
          <AboutParagraphsWrapper>
            {AboutParagraphBlocks()}
          </AboutParagraphsWrapper>

          <GetInvolvedOuterWrapper>
            {GetInvolvedParagraphBlocks()}
          </GetInvolvedOuterWrapper>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
