import React from "react";
import styled from "styled-components";

const Playbutton = props => {
  return (
    <Wrapper
      className={props.playingTrueFalse ? "pause-button" : "play-button"}
      onClick={() => props.playClicked()}
    />
  );
};

const Wrapper = styled.div``;

export default Playbutton;
