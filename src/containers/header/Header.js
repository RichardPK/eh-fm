import React from "react";
import styled from "styled-components/macro";
import DekstopNavBar from "../../components/nav-bar/DesktopNavBar";
import MobileNavBar from "../../components/nav-bar/MobileNavBar";
import Devices from "../../consts/Devices";

const HeaderContainer = (props) => {
  return (
    <React.Fragment>
      <MobileWrapper>
        <LogoWrapper></LogoWrapper>
        <MobileNavBar />
      </MobileWrapper>
      <DesktopWrapper>
        <DekstopNavBar />
      </DesktopWrapper>
    </React.Fragment>
  );
};

const MobileWrapper = styled.div`
  display: block;

  @media ${Devices.tablet} {
    display: none;
  }
`;

const LogoWrapper = styled.div``;

const DesktopWrapper = styled.div`
  display: none;

  @media ${Devices.tablet} {
    display: block;
  }
`;

export default HeaderContainer;
