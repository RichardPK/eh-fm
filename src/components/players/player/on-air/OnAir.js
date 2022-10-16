import React from "react";
import styled from "styled-components/macro";
import Colors from "../../../../consts/Colors";
import { Tiny } from "../../../text-elements/index";
import Devices from "../../../../consts/Devices";

const OnAir = ({ isOnAir }) => {
  return (
    <OnAirWrapper>
      <OnAirText>{isOnAir ? "on air" : "off air"}</OnAirText>
      {isOnAir ? <PulsingCircle /> : <RedCircle />}
    </OnAirWrapper>
  );
};

const OnAirWrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 4px;

  @media ${Devices.tablet} {
    color: ${Colors.notQuiteBlack(0.8)};
    background-color: ${Colors.bgWhiteCustom(0.9)};
    padding: 0.4rem 0.5rem 0.4rem 0.4rem;
  }
`;

const OnAirText = styled(Tiny)`
  font-weight: 200;
  letter-spacing: 1px;
  color: ${Colors.playerWhite};

  @media ${Devices.tablet} {
    color: ${Colors.ehfmPrimary()};
  }
`;

const RedCircle = styled.div`
  background: ${Colors.offRed};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 7px;
`;

const PulsingCircle = styled.div`
  background: ${Colors.highlightYellow()};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 7px;
  animation: fader 3s infinite;
  animation-timing-function: ease-out;

  @media ${Devices.tablet} {
    background: ${Colors.ehfmPrimary()};
  }

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

export const PulsingRedCircle = styled.div`
  background: ${Colors.offRed};
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
