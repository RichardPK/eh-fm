import React from "react";
import styled from "styled-components/macro";
import MobileNavBar from "../../../components/nav-bar/MobileNavBar";
import Colors from "../../../consts/Colors";
import Logo from "../../../components/nav-bar/logo/Logo";
import MobilePlayer from "../../../components/players/mobile-player/MobilePlayer";
import Sizes from "../../../consts/Sizes";

const MobileHeader = ({ currentShow }) => {
  return (
    <>
      <FakeMobileHeader />
      <Wrapper>
        <LogoWrapper>
          <Logo color={Colors.ehfmPrimary()} mobile />
        </LogoWrapper>
        <MobileNavBar />
        <MobilePlayer currentShow={currentShow} />
      </Wrapper>
    </>
  );
};

const FakeMobileHeader = styled.div`
  height: ${Sizes.mobileNavHeight}px;
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${Colors.playerWhite};
  position: relative;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin: 0.75rem auto 0;
`;

export default MobileHeader;
