import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import OnAir from './on-air/OnAir';
import NowPlaying from './now-playing/NowPlaying';
import VolumeButton from './volume-button/VolumeButton';

const Player = ({ playing, handlePlayPauseClicked, currentShow, handleVolumeClicked, volume }) => {
  return (
    <>
      <Left>
        <OnAir />
        <NowPlaying
          playing={playing}
          handlePlayPauseClicked={handlePlayPauseClicked}
          currentShow={currentShow}
        />
      </Left>
      <Right>
        <VolumeButton volumeClicked={handleVolumeClicked} volume={volume} />
      </Right>
    </>
  );
};

const Wrapper = styled.div``;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Player;
