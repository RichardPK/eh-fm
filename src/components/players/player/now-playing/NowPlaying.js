import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import PlayPauseButton from "../play-pause-button/PlayPauseButton";
import Devices from "../../../../../consts/Devices";
import Colors from "../../../../../consts/Colors";
import { Body } from "../../../text-elements/index";

const NowPlaying = ({ handlePlayPauseClicked, playing, currentShow }) => {
  return (
    <Wrapper playing={playing} onClick={handlePlayPauseClicked}>
      <PlaybuttonContainer>
        <PlayPauseButton
          playingTrueFalse={playing}
          playClicked={handlePlayPauseClicked}
        />
      </PlaybuttonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.playing ? Colors.ehfmPrimary() : Colors.playerWhite};

  span {
    color: ${(props) =>
      props.playing ? Colors.playerWhite : Colors.ehfmPrimary()};
  }

  .play-button {
    border-color: transparent transparent transparent
      ${(props) => (props.playing ? Colors.playerWhite : Colors.ehfmPrimary())};
  }

  .pause-button {
    border-color: ${Colors.ehfmPrimary()};
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.playerWhite};
      cursor: pointer;

      span {
        color: ${Colors.ehfmPrimary()};
      }

      .play-button {
        border-color: transparent transparent transparent
          ${Colors.ehfmPrimary()};
      }

      .pause-button {
        border-color: ${Colors.ehfmPrimary()};
      }
    }
  }
`;

const PlaybuttonContainer = styled.div`
  border-left: 2px solid ${Colors.playerWhite};
  width: 0.8em;
  padding-right: 20px;
`;

export default NowPlaying;
