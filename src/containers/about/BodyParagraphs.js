import React from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import { Body } from "../../components/text-elements/index";
import gridStyles from "./gridStyles";

const BodyParagraphsWrapper = styled.div`
  margin-bottom: 2.5rem;
  padding: 8px;
  background-color: ${Colors.spanBg};
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

const BodyParagraphs = ({ aboutText }) => {
  const BodyParagraphBlocks = () => {
    return aboutText.map((dataItem) => {
      return <Paragraph>{dataItem.text}</Paragraph>;
    });
  };

  return <BodyParagraphsWrapper>{BodyParagraphBlocks()}</BodyParagraphsWrapper>;
};

export default BodyParagraphs;
