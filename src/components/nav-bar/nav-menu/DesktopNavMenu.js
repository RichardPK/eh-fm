import React from "react";
import styled from "styled-components/macro";
import NavLinkComponent from "./NavLink/NavLink";
import RadioLinks from "./RadioLinks";
import linksData from "./linksData";

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {linksData.map((linkData, i) => (
        <NavLinkComponent
          target={linkData.target}
          text={linkData.text}
          key={i}
        />
      ))}
      <RadioLinks />
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
