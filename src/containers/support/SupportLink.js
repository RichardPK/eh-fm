import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Cta, Heading4 } from "../../components/text-elements/index";
import { ReactComponent as ExternalLink } from "../../assets/svgs/external-link.svg";
import { ReactComponent as Paypal } from "../../assets/svgs/paypal.svg";
import { ReactComponent as Patreon } from "../../assets/svgs/patreon.svg";

const Text = styled(Cta)`
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const LinkText = styled(Heading4)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${Colors.playerWhite};

  svg {
    margin-right: 0.5rem;
    height: 14px;
    width: auto;

    path {
      fill: ${(props) =>
        props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite} !important;
      transition: fill, 0.2s ease-out;
    }

    path:nth-child(2) {
      fill: ${(props) =>
        props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite} !important;
      transition: fill, 0.2s ease-out;
    }

    path:nth-child(3) {
      fill: ${(props) =>
        props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite} !important;
      transition: fill, 0.2s ease-out;
    }

    path:nth-child(4) {
      fill: ${Colors.ehfmPrimary(0.8)} !important;
    }
  }
`;

const LinkWrapper = styled.div`
  border-radius: ${Sizes.buttonRadius}px;
  background-color: ${Colors.ehfmPrimary()};
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${Devices.tablet} {
    width: 75%;
  }
`;

const SupportLink = ({ text, linkText, href }) => {
  const getIcon = () => {
    const lowerCaseLink = linkText.toLowerCase();
    if (lowerCaseLink.includes("paypal")) {
      return <Paypal />;
    }

    if (lowerCaseLink.includes("patreon")) {
      return <Patreon />;
    }

    return null;
  };

  return (
    <LinkWrapper href={href} as="a">
      <Text>{text}</Text>
      <LinkText>
        {getIcon()} {linkText}
      </LinkText>
    </LinkWrapper>
  );
};

export default SupportLink;
