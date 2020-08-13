import React, { Component } from 'react';
import styled from 'styled-components/macro';
import CurrentShow from '../current-show/CurrentShow';
import Player from './player/Player';
import Logo from '../nav-bar/logo/Logo';
import Schedule from '../schedule/Schedule';
import Devices from '../../consts/Devices';
import Colors from '../../consts/Colors';
import Sizes from '../../consts/Sizes';

const SidePlayer = ({
  currentShow,
  residents,
  playing,
  volume,
  handlePlayPauseClicked,
  handleVolumeClicked,
  showsUpNext
}) => {
  return (
    <>
      <FakeSidePlayer />
      <SidePlayerOuter>
        <Logo />
        <CurrentShowAndPlayerWrapper>
          {currentShow ? (
            <CurrentShow
              currentShow={currentShow}
              residents={residents}
              playing={playing}
              handlePlayPauseClicked={handlePlayPauseClicked}
            />
          ) : null}
          <Player
            playing={playing}
            handlePlayPauseClicked={handlePlayPauseClicked}
            currentShow={currentShow}
            handleVolumeClicked={handleVolumeClicked}
            volume={volume}
          />
        </CurrentShowAndPlayerWrapper>
        <ScheduleWrapper>
          <Schedule residents={residents} showsUpNext={showsUpNext} />
        </ScheduleWrapper>
      </SidePlayerOuter>
    </>
  );
};

const FakeSidePlayer = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 2;
  width: ${Sizes.sidePlayerWidth}px;
`;

const SidePlayerOuter = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${Colors.ehfmPrimary};
  padding-top: 2rem;
  width: ${Sizes.sidePlayerWidth}px;
  height: 100%;
`;

const CurrentShowAndPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem 1rem;

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      display: inline-block;
    }
  }

  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    @media {
      display: inline-block;
    }
  }
`;

const ScheduleWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-top: ${Colors.bgWhite};
  background-color: ${Colors.playerWhite};
`;

export default SidePlayer;
