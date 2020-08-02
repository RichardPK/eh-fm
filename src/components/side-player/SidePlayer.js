import React, { Component } from 'react';
import styled from 'styled-components/macro';
import CurrentShow from '../current-show/CurrentShow';
import Player from './player/Player';
import Logo from '../nav-bar/logo/Logo';
import Schedule from '../schedule/Schedule';
import Devices from '../../consts/Devices';
import Colors from '../../consts/Colors';

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
    <SidePlayerOuter>
      <Logo />
      <CurrentShowWrapper>
        {currentShow ? (
          <CurrentShow
            currentShow={currentShow}
            residents={residents}
            playing={playing}
            handlePlayPauseClicked={handlePlayPauseClicked}
          />
        ) : null}
      </CurrentShowWrapper>
      <PlayerWrapper>
        <Player
          playing={playing}
          handlePlayPauseClicked={handlePlayPauseClicked}
          currentShow={currentShow}
          handleVolumeClicked={handleVolumeClicked}
          volume={volume}
        />
      </PlayerWrapper>
      <ScheduleWrapper>
        <Schedule showsUpNext={showsUpNext} />
      </ScheduleWrapper>
    </SidePlayerOuter>
  );
};

const SidePlayerOuter = styled.div`
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${Colors.ehfmPrimary};
  padding-top: 2rem;
  width: 350px;
  height: 100%;
`;

const CurrentShowWrapper = styled.div`
  position: relative;
  padding: 1rem 0.5rem 0;
`;

const PlayerWrapper = styled.div`
  width: calc(100% - 1rem);
  padding: 0 0.5rem 0.5rem;
`;

const ScheduleWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${Colors.playerWhite};
`;

export default SidePlayer;
