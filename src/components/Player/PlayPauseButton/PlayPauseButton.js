import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import Sizes from "../../../consts/Sizes";

const Playbutton = props => {
  return (
    <Wrapper
      className={props.playingTrueFalse ? "pause-button" : "play-button"}
      onClick={() => props.playClicked()}
    />
  );
};

const Wrapper = styled.div`
  .play-button {
    margin-left: 20px;
    cursor: pointer;
    border-style: solid;
    border-width: ${Sizes.mainButtonHalfSize} 0 ${Sizes.mainButtonHalfSize}
      ${Sizes.mainButtonSize};
    border-color: transparent transparent transparent ${Colors.playerWhite};
  }
`;

export default Playbutton;
