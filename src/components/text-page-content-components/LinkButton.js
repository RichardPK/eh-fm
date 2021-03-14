import React, { useState } from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Colors from "../../consts/Colors";
import { Cta, Heading4 } from "../text-elements/index";
import { ReactComponent as Paypal } from "../../assets/svgs/paypal.svg";
import { ReactComponent as Patreon } from "../../assets/svgs/patreon.svg";

const Text = styled(Cta)`
  font-weight: normal;
  color: ${(props) =>
    props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite};
  color: fill, 0.2s ease-out;
`;

const LinkText = styled(Heading4)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  color: ${(props) =>
    props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite};
  color: fill, 0.2s ease-out;

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
  background-color: ${(props) =>
    props.hovered ? Colors.playerWhite : Colors.ehfmPrimary()};
  transition: background-color 0.2s ease-out;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;

  @media ${Devices.tablet} {
    width: 66%;
  }

  @media ${Devices.laptop} {
    width: 80%;
  }
`;

const LinkButton = ({ text, linkText, href }) => {
  let [hovered, setHovered] = useState(false);
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
    <LinkWrapper
      href={href}
      target="_blank"
      as="a"
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      hovered={hovered}
    >
      <Text hovered={hovered}>{text}</Text>
      <LinkText hovered={hovered}>
        {getIcon()} {linkText}
      </LinkText>
    </LinkWrapper>
  );
};

export default LinkButton;
