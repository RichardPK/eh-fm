import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import BurgerMenuButton from "./BurgerMenuButton";
import MobileNavLinks from "./MobileNavLinks";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(!menuOpen));

  return (
    <Wrapper ref={wrapperRef}>
      <BurgerMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && <MobileNavLinks />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2px;
  /* box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.1); */
`;

export default NavLinks;
