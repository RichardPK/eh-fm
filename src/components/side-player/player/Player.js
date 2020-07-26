import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import NowPlaying from './now-playing/NowPlaying';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';
import { Body } from '../../text-elements/index';
import PlayPauseButton from './play-pause-button/PlayPauseButton';
import VolumeButton from './volume-button/VolumeButton';
import { ReactComponent as Volume } from '../../../assets/svgs/volume.svg';
import { ReactComponent as MuteVolume } from '../../../assets/svgs/volume-mute.svg';

const Player = ({ playing, handlePlayPauseClicked, currentShow, handleVolumeClicked, volume }) => {
  return (
    <Wrapper>
      <Left playing={playing} onClick={handlePlayPauseClicked}>
        <PlayPauseWrapper>
          <PlayPauseButton playingTrueFalse={playing} playClicked={handlePlayPauseClicked} />
        </PlayPauseWrapper>
      </Left>
      <Right>
        <VolumeWrapper onClick={() => handleVolumeClicked()}>
          {volume === 0 ? <MuteVolume /> : <Volume />}
        </VolumeWrapper>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => (props.playing ? Colors.ehfmPrimary : Colors.playerWhite)};
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem;
  margin-left: 0.75rem;
  cursor: pointer;

  @media ${Devices.tablet} {
    &:hover {
      cursor: pointer;
    }
  }
`;

const PlayPauseWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1.5px solid ${Colors.ehfmPrimary};

  svg {
    width: 1.1rem;
    fill: ${Colors.ehfmPrimary};
  }
`;

const Right = styled.div`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
  align-items: center;
  justify-content: flex-end;
`;

const VolumeWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    fill: ${Colors.ehfmPrimary};
  }
`;

export default Player;
