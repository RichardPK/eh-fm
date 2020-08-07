import React from "react";
import styled from "styled-components/macro";
import { Cta } from "../../text-elements/index";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import NavLinkComponent from "./NavLink/NavLink";

const NavLinks = () => {
  const linksArray = [
    { target: "/", text: "HOME" },
    { target: "/residents", text: "RESIDENTS" },
  ];

  return (
    <NavLinksWrapper>
      {linksArray.map((linkData) => (
        <NavLinkComponent target={linkData.target} text={linkData.text} />
      ))}
    </NavLinksWrapper>
  );
};

const NavLinksWrapper = styled.div`
  display: flex;
  margin-bottom: 2px;
`;

export default NavLinks;
