import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import {
  Heading,
  Subheading,
  Linebreak,
  Paragraph,
  GetInvolvedText,
  GetInvolvedLink,
} from "../../components/about-page/styled-text-content/StyledTextContent";
import { StyledImage } from "../../components/about-page/styled-image-content/StyledImageContent";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5rem 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  column-gap: 1rem;
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

const TextContentWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 4;
`;

const ImageContentWrapper = styled.div`
  grid-column: 4 / 7;
  grid-row: 1 / 3;
`;

const AboutParagraphsWrapper = styled.div`
  margin-bottom: 2.5rem;
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
      <TextContentWrapper>
        <Heading>{headline}</Heading>
        <Subheading>
          {subheader} <Linebreak />
        </Subheading>
        <AboutParagraphsWrapper>
          {AboutParagraphBlocks()}
        </AboutParagraphsWrapper>
        <Heading>{get_involved_headline}</Heading>

        {GetInvolvedParagraphBlocks()}
      </TextContentWrapper>
      <ImageContentWrapper>
        <StyledImage baseUrl={image.url} alt={image.alt} />
      </ImageContentWrapper>
    </Wrapper>
  );
};

export default About;
