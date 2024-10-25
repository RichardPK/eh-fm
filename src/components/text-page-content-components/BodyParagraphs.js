import React from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import { Body } from "../../components/text-elements/index";
import { gridStyles } from "../../consts/gridStyles";

const BodyParagraphsWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 8px;
  background-color: ${Colors.spanBg};
  white-space: pre-line;
  ${gridStyles}

  span {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0rem;
    }
  }
`;


const Paragraph = styled(Body)`
  color: ${Colors.playerWhite};
`;

const BoldParagraph = styled(Body)`
  color: ${Colors.playerWhite};
  font-weight: bold;
`;

const BodyParagraphs = ({ aboutText, className }) => {
  console.log(aboutText)
  const BodyParagraphBlocks = () => {
    return aboutText.map((dataItem, i) => {
      console.log(dataItem)
      if (dataItem.spans[0]?.type === "strong") {
        return <BoldParagraph key={i}>{dataItem.text}</BoldParagraph>;
      }
      return <Paragraph key={i}>{dataItem.text}</Paragraph>;
    });
  };

  return (
    <BodyParagraphsWrapper className={className}>
      {BodyParagraphBlocks()}
    </BodyParagraphsWrapper>
  );
};

export default BodyParagraphs;
