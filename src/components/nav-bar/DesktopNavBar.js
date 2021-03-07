import React from "react";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Socials from "./socials/Socials";
import Colors from "../../consts/Colors";
import DesktopNavMenu from "./nav-menu/DesktopNavMenu";
import PaypalButton from "../paypal-button/PaypalButton";
import NavIcon from "./nav-menu/NavIcon";

const DesktopNavBar = (props) => {
  return (
    <>
      <FakeDesktopNavBar />
      <Wrapper>
        <Inner>
          <Left>
            <DesktopNavMenu />
          </Left>
          <Right>
            <NavIcon to={"https://ehfm.bigcartel.com/"} />
            <PaypalButton />
            <Socials />
          </Right>
        </Inner>
      </Wrapper>
    </>
  );
};

const FakeDesktopNavBar = styled.div`
  height: ${Sizes.navHeight}px;
  width: calc(100% - ${Sizes.sidePlayerWidthSmaller}px);
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  z-index: -1;

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    width: calc(100% - ${Sizes.sidePlayerWidth}px);
  }
`;

const Wrapper = styled.nav`
  position: fixed;
  z-index: 2;
  top: 0;
  left: ${Sizes.sidePlayerWidthSmaller}px;
  width: calc(100% - ${Sizes.sidePlayerWidthSmaller}px);

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    left: ${Sizes.sidePlayerWidth}px;
    width: calc(100% - ${Sizes.sidePlayerWidth}px);
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

export default DesktopNavBar;
