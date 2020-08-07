import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";

const HoveredLine = ({ hovered, zIndex, offset }) => {
  return <Wrapper hovered={hovered} zIndex={zIndex} offset={offset} />;
};

const Wrapper = styled.div`
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: 0;
  transition: width 0.3s;
  width: ${(props) =>
    props.offset && props.hovered
      ? `calc(110% - ${props.offset})`
      : props.hovered
      ? "110%"
      : "0px"};
  height: 1rem;
  background-color: ${Colors.altBlueHover()};
`;

export default HoveredLine;
