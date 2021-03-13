import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Cta, Heading4 } from "../../components/text-elements/index";
import { ReactComponent as ExternalLink } from "../../assets/svgs/external-link.svg";
import { ReactComponent as PaypalButton } from "../../assets/svgs/paypal.svg";
import { ReactComponent as Patreon } from "../../assets/svgs/patreon.svg";

const Text = styled(Cta)`
  font-weight: normal;
  color: ${Colors.playerWhite};

  /* border-bottom: 3px solid ${Colors.playerWhiteCustom(0.8)}; */
`;

const LinkText = styled(Heading4)`
  margin-right: 0.5rem;
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const LinkWrapper = styled.div`
  border-radius: ${Sizes.buttonRadius}px;
  background-color: ${Colors.ehfmPrimary()};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    margin-bottom: 0.6rem;
    width: 12px;
    height: 12px;
    g {
      fill: ${(props) =>
        props.isEmail ? Colors.ehfmPrimary() : Colors.playerWhite};
    }
  }

  width: 100%;

  @media ${Devices.tablet} {
    width: 75%;
  }
`;

const SupportLink = ({ text, linkText, href }) => {
  return (
    <LinkWrapper href={href} as="a">
      <Text>{text}</Text>
      <LinkText>{linkText}</LinkText>
    </LinkWrapper>
  );
};

export default SupportLink;
