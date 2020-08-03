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
      <Left>
        <PlayPauseWrapper playing={playing} onClick={handlePlayPauseClicked}>
          <PlayBorder />
          <PlayPauseButton playingTrueFalse={playing} />
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
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.ehfmPrimary};
  border: 1px solid ${Colors.playerWhite};
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const PlayPauseWrapper = styled.div`
  position: relative;
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.playing ? Colors.playerWhite : Colors.ehfmPrimary)};
  transition: all 0.2s ease-out;

  svg {
    width: 1rem;
    fill: ${(props) => (props.playing ? Colors.ehfmPrimary : Colors.playerWhite)};
  }

  @media ${Devices.tablet} {
    cursor: pointer;
    &:hover {
      /* svg {
        fill: ${(props) => (props.playing ? Colors.playerWhite : Colors.ehfmPrimary)};
      }
      background-color: ${(props) => (props.playing ? Colors.ehfmPrimary : Colors.playerWhite)}; */
    }
  }
`;

const PlayBorder = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
  height: 66%;
  width: 1px;
  background-color: ${Colors.playerWhite};
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
    width: 0.8rem;
    fill: ${Colors.playerWhite};
  }
`;

export default Player;
