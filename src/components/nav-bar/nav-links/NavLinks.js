import React from "react";
import styled from "styled-components";
import { Cta } from "../../text-elements/index";
import { Link, NavLink } from "react-router-dom";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      <StyledNavLink to={"/residents"} activeClassName="nav-link-active">
        <NavText>Residents</NavText>
      </StyledNavLink>
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  .nav-link-active {
    border-bottom: 3px solid ${Colors.altBlue};
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  color: ${Colors.ehfmPrimary};
  padding: 2px 0 0;
  border-bottom: 3px solid ${Colors.playerWhite};

  @media ${Devices.tablet} {
    &:hover {
      text-decoration: none;
      border-bottom: 3px solid ${Colors.altBlue};
    }
  }
`;

const NavText = styled(Cta)`
  font-weight: normal;
`;

export default NavLinks;
