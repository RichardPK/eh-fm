import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import NowPlaying from "./now-playing/NowPlaying";
import Colors from "../../../consts/Colors";
import Devices from "../../../consts/Devices";
import { Heading4, Cta } from "../../text-elements/index";
import PlayPauseButton from "./play-pause-button/PlayPauseButton";
import VolumeButton from "./volume-button/VolumeButton";
import { ReactComponent as Volume } from "../../../assets/svgs/volume.svg";
import { ReactComponent as MuteVolume } from "../../../assets/svgs/volume-mute.svg";
import OnAir from "./on-air/OnAir";

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
      <OnAirWrapper>
        <OnAir />
      </OnAirWrapper>
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

        {currentShow ? (
          <CurrentShowText playing={playing} hovered={hovered}>
            {currentShow.name}
          </CurrentShowText>
        ) : null}
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
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;

  @media ${Devices.mobileL} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${Devices.tablet} {
    padding: 0;
    width: auto;
  }
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
  white-space: nowrap;
  overflow: hidden;
`;

const OnAirWrapper = styled.div`
  display: block;
  margin-right: 1rem;

  @media ${Devices.tablet} {
    display: none;
  }
`;

const CurrentShowText = styled(Cta)`
  color: ${(props) =>
    props.hovered || props.playing ? Colors.ehfmPrimary() : Colors.playerWhite};
  font-weight: normal;
  display: block;

  @media ${Devices.tablet} {
    display: none;
  }
`;

const PlayPauseWrapper = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  svg {
    width: 0.75rem;
    fill: ${(props) =>
      props.hovered || props.playing
        ? Colors.ehfmPrimary()
        : Colors.playerWhite};

    @media ${Devices.tablet} {
      width: 1rem;
    }
  }
  border-left: 1px solid ${Colors.playerWhite};

  @media ${Devices.tablet} {
    border: none;
    padding: 0.5rem 1.25rem;
  }
`;

const PlayBorder = styled.div`
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  top: 50%;
  height: 100%;
  width: 1px;
  background-color: ${Colors.playerWhite};

  @media ${Devices.tablet} {
    height: 66%;
  }
`;

const Right = styled.div`
  display: flex;
  /* flex: 1; */
  position: relative;
  align-self: center;
  justify-self: flex-end;
`;

const VolumeWrapper = styled.div`
  padding: 0.5rem 0 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 0.8rem;
    fill: ${Colors.playerWhite};
  }

  @media ${Devices.tablet} {
    padding: 0.5rem 1rem;
  }
`;

export default Player;
