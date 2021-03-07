import React from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import { Heading4 } from "../../components/text-elements/index";

const HomeContainer = ({ carouselName }) => {
  return (
    <HeadingWrapper>
      <AdditionalCarouselHeading>{carouselName}</AdditionalCarouselHeading>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
    </HeadingWrapper>
  );
};

const DividerWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto 0 auto 0.75rem;
`;

const Divider = styled.div`
  height: 2px;
  width: calc(80% - 3rem);
  background-color: ${Colors.notQuiteBlack(0.1)};
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-content: center;
  margin: 0 0 0.75rem 0;
`;

const AdditionalCarouselHeading = styled(Heading4)`
  color: ${Colors.notQuiteBlack(0.6)};
  white-space: nowrap;
  font-weight: normal;
`;

export default HomeContainer;
