import React, { useState } from "react";
import styled from "styled-components/macro";
import Img from "../../components/image/Image";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Heading3, Heading4, Body } from "../../components/text-elements/index";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  padding: 0 1rem;
  margin: 2rem 0;

  @media ${Devices.mobileL} {
    padding: 0 2rem;
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);

    margin: 2.5rem 0;
  }
`;

const Heading = styled(Heading3)`
  margin-bottom: 1rem;
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const Subheading = styled(Heading4)`
  font-weight: normal;
  color: ${Colors.notQuiteBlack(0.7)};
  margin-bottom: 1rem;
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const Linebreak = styled.div`
  border-bottom: 2px solid ${Colors.notQuiteBlack(0.2)};
  margin-bottom: 2rem;
  grid-column: 1 / 4;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const AboutParagraphsWrapper = styled.div`
  margin-bottom: 2.5rem;
  grid-column: 1 / 5;

  @media ${Devices.mobileL} {
    grid-column: 1 / 4;
  }
`;

const Paragraph = styled(Body)`
  margin-bottom: 0.5rem;
  color: ${Colors.notQuiteBlack(0.8)};
`;

const GetInvolvedOuterWrapper = styled.div`
  max-width: 540px;
  margin-bottom: 1.5rem;
  grid-column: 1 / 5;

  @media ${Devices.mobileL} {
    grid-column: 1 / 4;
  }
`;

const GetInvolvedItemWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  grid-template-rows: auto auto auto;
  margin-bottom: 0.25rem;
  color: ${Colors.notQuiteBlack(0.8)};

  grid-template-columns: 1.5fr 2fr;

  @media ${Devices.mobileL} {
    grid-template-columns: 1fr 2fr;
  }
`;

const GetInvolvedText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.notQuiteBlack(0.7)};
`;

const GetInvolvedLink = styled(Heading4)`
  font-weight: normal;
  text-decoration: underline;
`;

const StyledImage = styled(Img)`
  grid-column: 1 / 5;

  @media ${Devices.mobileL} {
    grid-column: 1 / 3;
  }
`;

const About = ({ pageData }) => {
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
    <Wrapper>
      <Heading>{headline}</Heading>
      <Subheading>{subheader}</Subheading>
      <Linebreak />
      <AboutParagraphsWrapper>{AboutParagraphBlocks()}</AboutParagraphsWrapper>
      <Heading>{get_involved_headline}</Heading>
      <GetInvolvedOuterWrapper>
        {GetInvolvedParagraphBlocks()}
      </GetInvolvedOuterWrapper>
      {/* <StyledImage baseUrl={image.url} alt={image.alt} /> */}
    </Wrapper>
  );
};

export default About;
