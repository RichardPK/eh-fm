import React from "react";
import styled from "styled-components";
import PlayPauseButton from "../player/play-pause-button/PlayPauseButton";
import Colors from "../../consts/Colors";
import Devices from "../../consts/Devices";

const ListenNowButton = ({ playing, playClicked }) => {
  return (
    <Wrapper
      className={"currentshow-playbutton-container"}
      onClick={playClicked}
    >
      <p>Listen now</p>
      <PlayPauseButton playingTrueFalse={playing} playClicked={playClicked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  padding: 4px;
  padding: 10px;
  background-color: ${Colors.altBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  letter-spacing: 1px;

  p {
    margin: 0px;
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.playerWhite};
      color: ${Colors.altBlue};

      .play-button {
        border-color: transparent transparent transparent ${Colors.altBlue};
      }

      .pause-button {
        border-color: ${Colors.altBlue};
      }
    }
  }
  @media ${Devices.mobileS} {
    padding: 5px;
  }

  @media ${Devices.mobileL} {
    font-size: 14px;
    padding: 10px;
  }
`;

export default ListenNowButton;
