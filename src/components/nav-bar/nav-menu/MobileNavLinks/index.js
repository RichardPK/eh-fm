import React, { useState } from "react";
import styled from "styled-components/macro";
import NavLink from "../NavLink/NavLink";
import Devices from "../../../../consts/Devices";
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
`;

const StyledNavLink = styled(NavLink)`
  margin: 0.5rem 0.2rem;
  padding-top: 0.25rem;
`;

const MonileNavMenu = () => {
  return (
    <Wrapper>
      {linksData.map((linkData) => (
        <StyledNavLink target={linkData.target} text={linkData.text} />
      ))}
    </Wrapper>
  );
};

export default MonileNavMenu;
