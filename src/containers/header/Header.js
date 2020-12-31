import React from "react";
import styled from "styled-components/macro";
import DesktopNavBar from "../../components/nav-bar/DesktopNavBar";
import MobileNavBar from "../../components/nav-bar/MobileNavBar";
import Devices from "../../consts/Devices";
import Logo from "../../components/nav-bar/logo/Logo";
import MobilePlayer from "../../components/players/mobile-player/MobilePlayer";
import MobileHeader from "./mobile-header/MobileHeader";
import Confetti from "../../components/confetti/Confetti";

const HeaderContainer = ({
  currentShow,
  residents,
  playing,
  volume,
  handlePlayPauseClicked,
  handleVolumeClicked,
  showsUpNext,
}) => {
  return (
    <React.Fragment>
      <Confetti />
      <MobileWrapper>
        <MobileHeader
          currentShow={currentShow}
          residents={residents}
          playing={playing}
          volume={volume}
          handlePlayPauseClicked={handlePlayPauseClicked}
          handleVolumeClicked={handleVolumeClicked}
          showsUpNext={showsUpNext}
        />
      </MobileWrapper>
      <DesktopWrapper>
        <DesktopNavBar />
      </DesktopWrapper>
    </React.Fragment>
  );
};

const MobileWrapper = styled.div`
  display: block;
  z-index: 5;

  @media ${Devices.tablet} {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;

  @media ${Devices.tablet} {
    display: block;
  }
`;

export default HeaderContainer;
