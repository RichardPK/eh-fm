import React from "react";
import styled from "styled-components/macro";
import Logo from "./logo/Logo";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Socials from "./socials/Socials";
import Colors from "../../consts/Colors";
import NavLinks from "./nav-links/NavLinks";
import PaypalButton from "../paypal-button/PaypalButton";

const MobileNavBar = (props) => {
  return (
    <Inner>
      <Left>
        <NavLinks />
      </Left>
      <Right>
        <PaypalButton />
      </Right>
    </Inner>
  );
};

const Inner = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.6rem;
  padding-bottom: 0.75rem;

  @media ${Devices.mobileL} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 1px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto 0px auto auto;
`;

export default MobileNavBar;
