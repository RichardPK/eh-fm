import React from "react";
import styled from "styled-components";
import { ReactComponent as PlayButton } from "../../../../../assets/svgs/play-button.svg";
import { ReactComponent as PauseButton } from "../../../../../assets/svgs/pause.svg";

const Playbutton = (props) => {
  return (
    <>{props.playingTrueFalse ? <StyledPauseButton /> : <StyledPlayButton />}</>
  );
};

const StyledPlayButton = styled(PlayButton)``;

const StyledPauseButton = styled(PauseButton)``;

export default Playbutton;
