import React from "react";
import styled from "styled-components/macro";
import Colors from "../../../../../consts/Colors";
import Devices from "../../../../../consts/Devices";

const VolumeButton = (props) => (
  <Wrapper>
    <Volume
      className="volume-button"
      src={
        props.volume === 0
          ? `https://www.ehfm.live/volume-off-white.png`
          : `https://www.ehfm.live/volume-up-white.png`
        // change to SVG
      }
      onClick={props.volumeClicked}
      alt="volume control"
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: none;

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    display: flex;
    border-left: 2px solid ${Colors.ehfmPrimary()};
    padding: 2px 0 2px 20px;
  }
`;

const Volume = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;

export default VolumeButton;
