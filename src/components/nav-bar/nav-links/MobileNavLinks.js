import React from "react";
import styled from "styled-components/macro";
import NavLinkComponent from "./NavLink/NavLink";
import BurgerMenuButton from "./BurgerMenuButton";

const NavLinks = () => {
  const linksArray = [
    { target: "/", text: "HOME" },
    { target: "/residents", text: "RESIDENTS" },
    { target: "/about", text: "ABOUT" },
  ];

  return (
    <NavLinksWrapper>
      <BurgerMenuButton />
      {/* {linksArray.map((linkData) => (
        <NavLinkComponent target={linkData.target} text={linkData.text} />
      ))} */}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
