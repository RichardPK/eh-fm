import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import NowPlaying from './now-playing/NowPlaying';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';
import { Body } from '../../text-elements/index';
import PlayPauseButton from './play-pause-button/PlayPauseButton';
import VolumeButton from './volume-button/VolumeButton';

const Player = ({ playing, handlePlayPauseClicked, currentShow, handleVolumeClicked, volume }) => {
  return (
    <OuterWrapper>
      <Left playing={playing} onClick={handlePlayPauseClicked}>
        <PlaybuttonContainer>
          <PlayPauseButton playingTrueFalse={playing} playClicked={handlePlayPauseClicked} />
        </PlaybuttonContainer>
      </Left>
      <Right>
        <VolumeButton volumeClicked={handleVolumeClicked} volume={volume} />
      </Right>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  background-color: ${(props) => (props.playing ? Colors.ehfmPrimary : Colors.playerWhite)};

  span {
    color: ${(props) => (props.playing ? Colors.playerWhite : Colors.altBlue)};
  }

  .play-button {
    border-color: transparent transparent transparent
      ${(props) => (props.playing ? Colors.playerWhite : Colors.altBlue)};
  }

  .pause-button {
    border-color: ${Colors.altBlue};
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.playerWhite};
      cursor: pointer;

      span {
        color: ${Colors.altBlue};
      }

      .play-button {
        border-color: transparent transparent transparent ${Colors.altBlue};
      }

      .pause-button {
        border-color: ${Colors.altBlue};
      }
    }
  }
`;

const PlaybuttonContainer = styled.div`
  border-left: 2px solid ${Colors.playerWhite};
  width: 0.8em;
  padding-right: 20px;
`;

const Right = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Player;
