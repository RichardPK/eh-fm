import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as BurgerIcon } from "../../../../assets/svgs/burger-menu.svg";
import Colors from "../../../../consts/Colors";
import Sizes from "../../../../consts/Sizes";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: ${Sizes.buttonRadius}px;
  background-color: ${Colors.ehfmPrimary()};
  svg {
    padding: 0.4rem;
    width: 100%;
    height: auto;
    g {
      fill: ${Colors.playerWhite};
    }
  }
`;

const BurgerMenuButton = ({ onClick, menuOpen }) => {
  return (
    <Wrapper onClick={onClick}>
      <BurgerIcon />
    </Wrapper>
  );
};

export default BurgerMenuButton;
