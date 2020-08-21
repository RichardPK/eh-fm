import React from "react";
import styled from "styled-components/macro";
import DesktopNavBar from "../../../components/nav-bar/DesktopNavBar";
import MobileNavBar from "../../../components/nav-bar/MobileNavBar";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import Logo from "../../../components/nav-bar/logo/Logo";
import MobilePlayer from "../../../components/players/mobile-player/MobilePlayer";
import Sizes from "../../../consts/Sizes";

const MobileHeader = ({
  currentShow,
  residents,
  playing,
  volume,
  handlePlayPauseClicked,
  handleVolumeClicked,
  showsUpNext,
}) => {
  return (
    <>
      <FakeMobileHeader />
      <Wrapper>
        <LogoWrapper>
          <Logo color={Colors.ehfmPrimary()} mobile />
        </LogoWrapper>
        <MobileNavBar />
        <MobilePlayer
          currentShow={currentShow}
          residents={residents}
          playing={playing}
          volume={volume}
          handlePlayPauseClicked={handlePlayPauseClicked}
          handleVolumeClicked={handleVolumeClicked}
          showsUpNext={showsUpNext}
        />
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
  background-color: ${Colors.bgWhiteCustom(1)};
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
