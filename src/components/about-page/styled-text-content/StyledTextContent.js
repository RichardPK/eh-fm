import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import Sizes from "../../../consts/Sizes";
import Colors from "../../../consts/Colors";
import { Heading3, Heading4, Body } from "../../text-elements/index";

export const Heading = styled(Heading3)`
  margin-bottom: 1rem;
`;

export const Subheading = styled(Heading4)`
  font-weight: normal;
  color: ${Colors.notQuiteBlack(0.7)};
`;

export const Linebreak = styled.div`
  border-bottom: 2px solid ${Colors.notQuiteBlack(0.2)};
  margin: 1rem 0 2rem;
`;

export const Paragraph = styled(Body)`
  margin-bottom: 0.5rem;
  color: ${Colors.notQuiteBlack(0.8)};
`;

export const GetInvolvedText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.notQuiteBlack(0.7)};
`;

export const GetInvolvedLink = styled(Heading4)`
  font-weight: normal;
  text-decoration: underline;
`;
