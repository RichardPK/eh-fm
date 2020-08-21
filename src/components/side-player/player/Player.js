import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import NowPlaying from "./now-playing/NowPlaying";
import Colors from "../../../consts/Colors";
import Devices from "../../../consts/Devices";
import { Body } from "../../text-elements/index";
import PlayPauseButton from "./play-pause-button/PlayPauseButton";
import VolumeButton from "./volume-button/VolumeButton";
import { ReactComponent as Volume } from "../../../assets/svgs/volume.svg";
import { ReactComponent as MuteVolume } from "../../../assets/svgs/volume-mute.svg";

const Player = ({
  playing,
  handlePlayPauseClicked,
  currentShow,
  handleVolumeClicked,
  volume,
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Wrapper>
      <Left
        onClick={handlePlayPauseClicked}
        playing={playing}
        hovered={hovered}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseOut={() => {
          setHovered(false);
        }}
      >
        <PlayPauseWrapper playing={playing} hovered={hovered}>
          <PlayPauseButton playingTrueFalse={playing} />
        </PlayPauseWrapper>
        <PlayBorder />
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
  background-color: ${Colors.ehfmPrimary()};
  border: 1px solid ${Colors.playerWhite};
`;

const Left = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  justify-self: flex-start;
  cursor: pointer;
  background-color: ${(props) =>
    props.hovered || props.playing ? Colors.playerWhite : Colors.ehfmPrimary()};
  transition: all 0.2s ease-out;
`;

const PlayPauseWrapper = styled.div`
  padding: 0.5rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  @media ${Devices.tablet} {
    svg {
      width: 1rem;
      fill: ${(props) =>
        props.hovered || props.playing
          ? Colors.ehfmPrimary()
          : Colors.playerWhite};
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
  /* flex: 1; */

  position: relative;
  align-self: center;
  justify-self: flex-end;
`;

const VolumeWrapper = styled.div`
  padding: 0.5rem 1rem;
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
