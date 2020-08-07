import React, { useState } from "react";
import styled from "styled-components/macro";
import { Cta } from "../../../text-elements/index";
import { NavLink } from "react-router-dom";
import Devices from "../../../../consts/Devices";
import Colors from "../../../../consts/Colors";
import HoverLine from "../../../hoverLine/HoverLine";

const NavLinkComponent = ({ target, text }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <StyledNavLink
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      to={target}
    >
      <NavText>{text}</NavText>
      <HoverLine hovered={hovered} />
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${Colors.ehfmPrimary};
  display: flex;
  padding: 2px 0 0;
  transition: all, 0.1s ease-out;
  margin-right: 4rem;
`;

const NavText = styled(Cta)`
  font-weight: normal;
`;

export default NavLinkComponent;
