import React from "react";
import styled from "styled-components/macro";
import DesktopNavBar from "../../components/nav-bar/DesktopNavBar";
import Devices from "../../consts/Devices";
import MobileHeader from "./mobile-header/MobileHeader";

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
