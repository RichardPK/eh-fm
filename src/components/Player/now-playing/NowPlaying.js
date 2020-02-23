import React, { useRef, useState } from "react";
import styled from "styled-components";
import PlayPauseButton from "../PlayPauseButton/PlayPauseButton";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import { Body } from "../../text-elements/index";

const NowPlaying = ({ handlePlayPauseClicked, playing, currentShow }) => {
  const returnShowData = () => {
    let currentShowName = null;
    if (currentShow !== null) {
      let showData = currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
      return parsedForAmpersands;
    }
    return currentShowName;
  };

  return (
    <Wrapper playing={playing} onClick={handlePlayPauseClicked}>
      <PlaybuttonContainer>
        <PlayPauseButton
          playingTrueFalse={playing}
          playClicked={handlePlayPauseClicked}
        />
      </PlaybuttonContainer>
      <CurrentShowText>{returnShowData()}</CurrentShowText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  background-color: ${props =>
    props.playing ? Colors.playerWhite : Colors.ehfmPrimary};

  span {
    color: ${props => (props.playing ? Colors.altBlue : Colors.playerWhite)};
  }

  .play-button {
    border-color: transparent transparent transparent
      ${props => (props.playing ? Colors.altBlue : Colors.playerWhite)};
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

const CurrentShowText = styled(Body)`
  border-right: 2px solid white;
  padding-right: 50px;
  color: ${Colors.playerWhite};
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 40px;
  letter-spacing: 1px;
`;

export default NowPlaying;
