import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import Colors from "../../../../consts/Colors";
import { Tiny } from "../../../text-elements/index";
import Devices from "../../../../consts/Devices";

const OnAir = ({}) => {
  return (
    <OnAirWrapper>
      <OnAirText>ON AIR</OnAirText>
      <Circle />
    </OnAirWrapper>
  );
};

const OnAirWrapper = styled.div`
  color: ${Colors.notQuiteBlack(0.8)};
  padding: 0.4rem 0.5rem 0.4rem 0.4rem;
  background-color: ${Colors.bgWhiteCustom(0.9)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 4px;

  @media ${Devices.mobileL} {
  }
`;

const OnAirText = styled(Tiny)`
  font-weight: 200;
  letter-spacing: 1px;
  color: ${Colors.altBlueText()};
`;

const Circle = styled.div`
  background: ${Colors.altBlueText()};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 7px;
  animation: fader 3s infinite;
  animation-timing-function: ease-out;

  @keyframes fader {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default OnAir;
