import React from "react";
import styled from "styled-components/macro";
import Colors from "../../../../consts/Colors";
import Devices from "../../../../consts/Devices";
import { ReactComponent as Tote } from "../../../../assets/svgs/tote.svg";

const NavIcon = ({ to }) => {
  return (
    <Wrapper href={to}>
      <Tote />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  margin-right: 1.5rem;
  cursor: pointer;

  svg {
    width: auto;
    height: 22px;
    path {
      transition: fill, 0.2s, ease-out;
      fill: ${Colors.ehfmPrimary()};
      :hover {
        transition: fill, 0.2s, ease-out;
        fill: ${Colors.ehfmPrimary(0.4)};
      }
    }

    @media ${Devices.tablet} {
      height: 22px;
    }
  }
`;

export default NavIcon;
