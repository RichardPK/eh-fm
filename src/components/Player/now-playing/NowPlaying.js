import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Playbutton from '../Playbutton/Playbutton';
import Devices from '../../../consts/Devices';
import Colors from '../../../consts/Colors';

const NowPlaying = ({ handlePlayPauseClicked, playing, currentShow }) => {
  const renderPlayingContainer = () => {
    if (playing === true) {
      return 'now-playing-container-white';
    } else {
      return 'now-playing-container';
    }
  };

  const returnShowData = () => {
    let currentShowName = null;
    if (currentShow !== null) {
      let showData = currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
      return parsedForAmpersands;
    }
    return currentShowName;
  };

  return (
    <Wrapper playing={playing} onClick={handlePlayPauseClicked}>
      <div className="play-button-container">
        <Playbutton playingTrueFalse={playing} playClicked={handlePlayPauseClicked} />
      </div>
      <p className="current-show">{returnShowData()}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 8px;
  cursor: pointer;
  background-color: ${(props) => (props.playing ? Colors.playerWhite : Colors.ehfmPrimary)};

  p {
    color: ${(props) => (props.playing ? Colors.altBlue : Colors.playerWhite)};
  }

  .play-button {
    border-color: transparent transparent transparent
      ${(props) => (props.playing ? Colors.altBlue : Colors.playerWhite)};
  }

  .pause-button {
    border-color: ${Colors.altBlue};
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.playerWhite};
      cursor: pointer;

      p {
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

// background-color: $playerwhite;

// // p {
// //   color: $altblue;
// // }

// // .play-button {
// //   border-color: transparent transparent transparent $altblue;
// // }

// // .pause-button {
// //   border-color: $altblue;
// // }

export default NowPlaying;
