import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import BurgerMenuButton from "./BurgerMenuButton";
import MobileNavLinks from "./MobileNavLinks";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(false));

  return (
    <Wrapper ref={wrapperRef}>
      <BurgerMenuButton
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      />
      {menuOpen && <MobileNavLinks onClick={() => setMenuOpen(false)} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
