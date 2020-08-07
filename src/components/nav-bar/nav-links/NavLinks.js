import React from "react";
import styled from "styled-components/macro";
import { Cta } from "../../text-elements/index";
import { Link, NavLink } from "react-router-dom";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <StyledNavLink to={"/"} activeClassName="nav-link-active">
        <NavText>Spotlight</NavText>
      </StyledNavLink>
      <StyledNavLink to={"/residents"} activeClassName="nav-link-active">
        <NavText>Residents</NavText>
      </StyledNavLink>
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;

  .nav-link-active {
    border-bottom: 3px solid ${Colors.altBlueText()};
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${Colors.ehfmPrimary};
  padding: 2px 0 0;
  transition: all, 0.1s ease-out;
  margin-right: 4rem;

  @media ${Devices.tablet} {
    &:hover {
      text-decoration: none;
      border-bottom: 3px solid ${Colors.altBlueText()};
    }
  }
`;

const NavText = styled(Cta)`
  font-weight: normal;
`;

export default NavLinks;
