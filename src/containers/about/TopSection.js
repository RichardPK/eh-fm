import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Colors from "../../consts/Colors";
import { Heading3, Heading4 } from "../../components/text-elements/index";
import gridStyles from "./gridStyles";

const TopWrapper = styled.div`
  background-color: ${Colors.spanBg};
  margin-bottom: 1rem;

  ${gridStyles}
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

const About = ({ headline, subheader }) => {
  return (
    <TopWrapper>
      <Heading>{headline}</Heading>
      <Subheading>{subheader}</Subheading>
      <Linebreak />
    </TopWrapper>
  );
};

export default About;
