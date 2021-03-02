import React from "react";
import styled from "styled-components/macro";
import NavLinkComponent from "./NavLink/NavLink";
import linksData from "./linksData";

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {linksData.map((linkData, i) => (
        <NavLinkComponent {...linkData} key={i} />
      ))}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
