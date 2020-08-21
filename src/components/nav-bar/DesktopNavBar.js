import React from "react";
import styled from "styled-components/macro";
import Logo from "./logo/Logo";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Socials from "./socials/Socials";
import Colors from "../../consts/Colors";
import NavLinks from "./nav-links/NavLinks";
import PaypalButton from "../paypal-button/PaypalButton";

const DekstopNavBar = (props) => {
  return (
    <>
      <FakeNavBar />
      <Wrapper>
        <Inner>
          <Left>
            <NavLinks />
          </Left>
          <Right>
            <PaypalButton />
            <Socials />
          </Right>
        </Inner>
      </Wrapper>
    </>
  );
};

const FakeNavBar = styled.div`
  height: ${Sizes.navHeight}px;
  width: calc(100% - ${Sizes.sidePlayerWidth}px);
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  z-index: -1;
`;

const Wrapper = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${Sizes.sidePlayerWidth}px;
  width: calc(100% - ${Sizes.sidePlayerWidth}px);

  @media ${Devices.tablet} {
  }
`;

const Inner = styled.div`
  display: flex;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: ${Colors.bgWhiteCustom(0.95)};
  /* border-bottom: 1px solid ${Colors.ehfmPrimary()}; */

  @media ${Devices.mobileL} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Left = styled.div`
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 1px;

  @media ${Devices.tablet} {
    height: 71px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto 0px auto auto;
`;

export default DekstopNavBar;
