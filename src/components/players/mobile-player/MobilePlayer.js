import React from "react";
import styled from "styled-components/macro";
import Player from "../player/Player";
import Colors from "../../../consts/Colors";

const MobilePlayer = ({ currentShow }) => {
  return (
    <>
      <Wrapper>
        <Player currentShow={currentShow} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.ehfmPrimary()};

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      display: inline-block;
    }
  }

  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    @media {
      display: inline-block;
    }
  }
`;

export default MobilePlayer;
