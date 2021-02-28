import React, { useState } from "react";
import styled from "styled-components/macro";
import BurgerMenuButton from "./BurgerMenuButton";
import MonileNavMenu from "./MobileNavMenu";

const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavLinksWrapper>
      <BurgerMenuButton onClick={() => setMenuOpen(!menuOpen)} />
      {menuOpen && <MonileNavMenu />}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
