import React from "react";
import styled from "styled-components";
import PlayPauseButton from "../player/play-pause-button/PlayPauseButton";

const ListenNowButton = ({ playing, playClicked }) => {
  const renderPlayingContainer = () => {
    if (playing === true) {
      return "currentshow-playbutton-container-white";
    } else {
      return "currentshow-playbutton-container";
    }
  };

  return (
    <div className={renderPlayingContainer()} onClick={playClicked}>
      <p>Listen now</p>
      <PlayPauseButton playingTrueFalse={playing} playClicked={playClicked} />
    </div>
  );
};

export default ListenNowButton;
