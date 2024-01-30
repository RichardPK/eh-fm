import React from "react";
import styled from "styled-components/macro";
import NavLinkComponent from "./NavLink/NavLink";
import RadioLinks from "./RadioLinks";
import linksData from "./linksData";

const GROUPED_LINKS = ["SCHEDULE", "RESIDENTS", "LATEST SHOWS"];

const NavLinks = () => {
  return (
    <NavLinksWrapper>
      {linksData
        .filter(({ text }) => !GROUPED_LINKS.includes(text))
        .map((linkData, i) => {
          return (
            <React.Fragment key={i}>
              <NavLinkComponent target={linkData.target} text={linkData.text} />
              {i === 0 ? <RadioLinks /> : null}
            </React.Fragment>
          );
        })}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
