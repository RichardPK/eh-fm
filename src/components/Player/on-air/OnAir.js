import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../consts/Colors';
import { Tiny } from '../../text-elements/index';

const OnAir = ({}) => {
  return (
    <OnAirWrapper>
      <OnAirText>ON AIR</OnAirText>
      <Circle />
    </OnAirWrapper>
  );
};

const OnAirWrapper = styled.div`
  color: ${Colors.playerWhite};
  font-size: 11px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  letter-spacing: 2px;
`;

const OnAirText = styled(Tiny)`
  font-weight: 100;
`;

const Circle = styled.div`
  background: ${Colors.highlightYellow};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 7px;
  animation: fader 3s infinite;
  animation-timing-function: ease-out;
`;

export default OnAir;
