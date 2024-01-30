import React from "react";
import styled from "styled-components/macro";
import NavLink from "../NavLink/NavLink";
import linksData from "../linksData";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 38px;
  z-index: 6;
  background-color: white;
  padding: 0.5rem;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  width: 137px;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0.5rem 0.2rem;
  padding-top: 0.25rem;
`;

const MobileNavMenu = ({ onClick, links }) => {
  return (
    <Wrapper>
      {(links ? links : linksData).map((linkData, i) => (
        <StyledNavLink
          target={linkData.target}
          text={linkData.text}
          key={i}
          onClick={onClick}
        />
      ))}
    </Wrapper>
  );
};

export default MobileNavMenu;
