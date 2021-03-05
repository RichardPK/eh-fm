import React, { Component } from "react";
import styled from "styled-components/macro";
import CurrentShow from "../../current-show/CurrentShow";
import Player from "../../side-player/player/Player";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import Sizes from "../../../consts/Sizes";

const MobilePlayer = ({
  currentShow,
  playing,
  volume,
  handlePlayPauseClicked,
  handleVolumeClicked,
}) => {
  console.log("xxxx");
  return (
    <>
      <Wrapper>
        <Player
          playing={playing}
          handlePlayPauseClicked={handlePlayPauseClicked}
          currentShow={currentShow}
          handleVolumeClicked={handleVolumeClicked}
          volume={volume}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.ehfmPrimary()};

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

export default MobilePlayer;
