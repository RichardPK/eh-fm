import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";

const HoveredLine = ({ hovered, zIndex, bottomOffset }) => {
  return (
    <Wrapper hovered={hovered} zIndex={zIndex} bottomOffset={bottomOffset} />
  );
};

const Wrapper = styled.div`
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  position: absolute;
  bottom: calc(
    ${(props) => (props.bottomOffset ? props.bottomOffset : "0px")} - 4px
  );
  /* transform: translateY(-50%); */
  left: 0;
  transition: width 0.3s;
  width: ${(props) => (props.hovered ? "120%" : "0px")};
  height: 4px;
  background-color: ${Colors.altBlueHover()};
`;

export default HoveredLine;
