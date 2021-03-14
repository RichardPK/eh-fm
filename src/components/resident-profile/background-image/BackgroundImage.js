import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import Sizes from "../../../consts/Sizes";
import Anims from "../../../consts/Anims";

const BackgroundImage = ({ imageSrc, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imageSrc;

    imageLoader.onload = () => {
      setLoaded(true);
    };
  }, [imageSrc, loaded]);

  return <Wrapper imageSrc={imageSrc} {...props} loaded={loaded} />;
};

const Wrapper = styled.div`
  opacity: 0;
  ${(props) => (props.loaded ? `${Anims.fadeInWithDelay(0)}` : ``)}

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
