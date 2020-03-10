import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Devices from '../../../consts/Devices';

const BackgroundImage = ({ mixCloudWidget, showImage }) => {
  return <Wrapper mixCloudWidget={mixCloudWidget} showImage={showImage} />;
};

const Wrapper = styled.div`
  background-position: center center !important;
  background-size: cover !important;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: absolute;
  z-index: -100;
  top: 0;
  left: 0;
  margin-bottom: ${(props) => (props.mixCloudWidget ? '123px' : 'auto')};
  background-image: url(${(props) => props.showImage});

  img {
    max-width: 100%;
    margin: auto;
  }

  @media ${Devices.mobileL} {
    top: 100px;
    height: calc(100vh - 100px);
  }
`;

export default BackgroundImage;
