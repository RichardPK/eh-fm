import React, { useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";
import { ReactComponent as Tote } from "../../assets/svgs/tote.svg";
import { Cta } from "../text-elements/index";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";

const ShopButton = () => {
  let [hovered, setHovered] = useState(false);
  return (
    <Wrapper
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <Link
        href="https://ehfm.bigcartel.com/"
        // target="_blank"
      >
        <InnerWrapper hovered={hovered}>
          <IconWrapper hovered={hovered}>
            <Tote />
          </IconWrapper>
          <Text hovered={hovered}>Shop</Text>
        </InnerWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-right: 0.5rem;

  @media ${Devices.mobileL} {
    margin-right: 1rem;
  }
`;

const Link = styled.a``;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${Sizes.buttonRadius}px;
  background-color: ${(props) =>
    props.hovered ? Colors.ehfmPrimary(0.1) : Colors.ehfmPrimary()};
  transition: background-color, 0.2s ease-out;
  padding: 0.5rem 0.75rem;
`;

const Text = styled(Cta)`
  font-weight: normal;
  margin-left: 0.5rem;
  color: ${(props) =>
    props.hovered ? Colors.ehfmPrimary() : Colors.playerWhite};
  transition: color, 0.2s ease-out;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;

  svg {
    height: 16px;
    width: auto;

    @media ${Devices.tablet} {
      height: 18px;
      width: auto;
    }

    path {
      transition: fill, 0.2s, ease-out;
      fill: ${(props) =>
        props.hovered ? Colors.ehfmPrimary() : Colors.playerWhiteCustom(0.8)};
    }
  }
`;

export default ShopButton;
