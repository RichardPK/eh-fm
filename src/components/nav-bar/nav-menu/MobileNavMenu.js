import React, { useState } from "react";
import styled from "styled-components/macro";
import BurgerMenuButton from "./BurgerMenuButton";
import MobileNavLinks from "./MobileNavLinks";

const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavLinksWrapper>
      <BurgerMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && <MobileNavLinks />}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2px;
  /* box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1); */
`;

export default NavLinks;
