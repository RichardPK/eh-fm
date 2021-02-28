import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as BurgerIcon } from "../../../../assets/svgs/burger-menu.svg";
import Colors from "../../../../consts/Colors";
import Sizes from "../../../../consts/Sizes";

const Wrapper = styled.div`
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: ${Sizes.buttonRadius}px;
  transition: background-color, 0.2s ease-out;
  background-color: ${(props) =>
    props.menuOpen ? Colors.ehfmPrimary(0.2) : Colors.ehfmPrimary()};
  svg {
    padding: 0.4rem;
    width: 100%;
    height: auto;
    g {
      fill: ${(props) =>
        props.menuOpen ? Colors.ehfmPrimary() : Colors.playerWhite};
    }
  }
`;

const BurgerMenuButton = ({ onClick, menuOpen }) => {
  return (
    <Wrapper menuOpen={menuOpen} onClick={onClick}>
      <BurgerIcon />
    </Wrapper>
  );
};

export default BurgerMenuButton;
