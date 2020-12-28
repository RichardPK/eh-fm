import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import Sizes from "../../../consts/Sizes";

const BackgroundImage = ({ mixCloudWidget, showImage }) => {
  return <Wrapper mixCloudWidget={mixCloudWidget} showImage={showImage} />;
};

const Wrapper = styled.div`
  width: 100%;
  background-position: center center !important;
  background-size: cover !important;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  margin-bottom: ${(props) => (props.mixCloudWidget ? "123px" : "auto")};
  background-image: url(${(props) => props.showImage});

  img {
    max-width: 100%;
    margin: auto;
  }

  @media ${Devices.tablet} {
    width: calc(100% - ${Sizes.sidePlayerWidthSmaller}px);
    margin-left: ${Sizes.sidePlayerWidthSmaller}px;
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    margin-left: ${Sizes.sidePlayerWidth}px;
    width: calc(100% - ${Sizes.sidePlayerWidth}px);
  }
`;

export default BackgroundImage;
