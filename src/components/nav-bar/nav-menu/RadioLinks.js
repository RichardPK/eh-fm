import React, { useState, useRef } from "react";
import styled from "styled-components/macro";
import NavLink from "./NavLink/NavLink";
import MobileNavLinks from "./MobileNavLinks";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

const RadioLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(false));

  return (
    <Wrapper ref={wrapperRef}>
      <NavLink onClick={() => setMenuOpen(true)}>Radio</NavLink>
      {menuOpen && (
        <MobileNavLinks
          onClick={() => setMenuOpen(false)}
          links={[
            { target: "/schedule", text: "SCHEDULE" },
            { target: "/residents", text: "RESIDENTS" },
            { target: "/latest-shows", text: "LATEST SHOWS" },
          ]}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 2px;
`;

export default RadioLinks;
