import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import Sizes from "../../../consts/Sizes";
import Devices from "../../../consts/Devices";

const Playbutton = props => {
  return (
    <Wrapper onClick={() => props.playClicked()}>
      <InnerButton
        className={props.playingTrueFalse ? "pause-button" : "play-button"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;

  .play-button {
    margin-left: 20px;
    cursor: pointer;
    border-style: solid;
    border-width: ${Sizes.mainButtonHalfSize} 0 ${Sizes.mainButtonHalfSize}
      ${Sizes.mainButtonSize};
    border-color: transparent transparent transparent ${Colors.playerWhite};
  }

  .pause-button {
    height: 11.28px;
    border-width: 0px 0 0px ${Sizes.mainButtonSize};
    border-color: ${Colors.playerWhite};
    border-style: double;
    margin-left: 20px;
    margin-right: 0.7px;
  }

  @media ${Devices.mobileL} {
    .pause-button {
      height: 15px;
      border-width: 0px 0 0px 12px;
    }
  }
`;

const InnerButton = styled.div``;

export default Playbutton;
