import React from "react";
import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import Sizes from "../../../consts/Sizes";
import Anims from "../../../consts/Anims";

const BackgroundImage = ({ imageSrc, ...props }) => {
  console.log("rerender image");
  return <Wrapper imageSrc={imageSrc} {...props} />;
};

const Wrapper = styled.div`
  ${Anims.fadeInWithDelay(0.5)}
  width: 100%;
  background-position: center center !important;
  background-size: cover !important;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.imageSrc});

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
