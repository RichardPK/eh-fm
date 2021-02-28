import React, { useState } from "react";
import styled from "styled-components/macro";
import NavLink from "../NavLink/NavLink";
import Devices from "../../../../consts/Devices";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 34px;
  z-index: 6;
  background-color: white;
  padding: 0.5rem;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0.5rem 0;
`;

const MonileNavMenu = () => {
  const linksArray = [
    { target: "/", text: "HOME" },
    { target: "/residents", text: "RESIDENTS" },
    { target: "/about", text: "ABOUT" },
  ];

  return (
    <Wrapper>
      {linksArray.map((linkData) => (
        <StyledNavLink target={linkData.target} text={linkData.text} />
      ))}
    </Wrapper>
  );
};

export default MonileNavMenu;
