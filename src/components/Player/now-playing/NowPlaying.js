import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Playbutton from '../Playbutton/Playbutton';

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
    <div className={renderPlayingContainer()} onClick={handlePlayPauseClicked}>
      <div className="play-button-container">
        <Playbutton playingTrueFalse={playing} playClicked={handlePlayPauseClicked} />
      </div>
      <p className="current-show">{returnShowData()}</p>
    </div>
  );
};

const Wrapper = styled.div``;

export default NowPlaying;
