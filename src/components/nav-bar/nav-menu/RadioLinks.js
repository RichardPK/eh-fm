import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import MobileNavLinks from "./MobileNavLinks";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import { Cta } from "../../text-elements/index";
import HoverLine from "../../hoverLine/HoverLine";

const RadioLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(false));

  return (
    <Wrapper ref={wrapperRef}>
      <StyledRadioLink action={() => setMenuOpen(true)} />
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
  margin-right: 0.5rem;
  padding: 1px 0 0;

  @media ${Devices.mobileS} {
    margin-right: 1rem;
  }

  @media ${Devices.mobileL} {
    margin-right: 2rem;
  }

  @media ${Devices.tablet} {
    margin-right: 3rem;
  }

  @media ${Devices.laptop} {
    margin-right: 4rem;
  }
`;

const Button = ({ action }) => {
  const [hovered, setHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      window &&
      (window.location.pathname.includes("residents") ||
        window.location.pathname.includes("latest") ||
        window.location.pathname.includes("schedule"))
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [window.location.pathname]);

  return (
    <button
      style={{
        border: "none",
        color: Colors.notQuiteBlack(),
        background: "transparent",
        cursor: "pointer",
      }}
      onClick={action}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <NavText>RADIO</NavText>
      <HoverLine hovered={hovered || isActive} width={"100%"} />
    </button>
  );
};

const StyledRadioLink = styled(Button)`
  position: relative;
  color: ${Colors.notQuiteBlack()};
  display: flex;
  padding: 2px 0 0;
  transition: all, 0.1s ease-out;
  margin-right: 0.5rem;

  @media ${Devices.mobileS} {
    margin-right: 1rem;
  }

  @media ${Devices.mobileL} {
    margin-right: 2rem;
  }

  @media ${Devices.tablet} {
    margin-right: 3rem;
  }

  @media ${Devices.laptop} {
    margin-right: 4rem;
  }

  svg {
    height: 20px;
    width: auto;
    g {
      fill: black;
    }
  }
`;

const NavText = styled(Cta)`
  font-weight: normal;
`;

export default RadioLinks;
