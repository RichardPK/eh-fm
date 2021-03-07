import React from "react";
import styled from "styled-components/macro";

const LoadingPlaceholder = ({
  height = "100%",
  width = "100%",
  zIndex = "auto",
}) => {
  return <Wrapper zIndex={zIndex} width={width} height={height} />;
};

const Wrapper = styled.div`
  z-index: ${(props) => props.zIndex};
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
  background-size: 1000px 640px;

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;

export default LoadingPlaceholder;
