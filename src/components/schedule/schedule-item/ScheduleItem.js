import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Body } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import moment from 'moment';

const ScheduleItem = ({ showName, starts }) => {
  const parsedTime = moment(starts, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');

  return (
    <Wrapper>
      <Time>{parsedTime}</Time>
      <Name>{showName}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Name = styled(Body)``;

const Time = styled(Body)`
  color: ${Colors.notQuiteBlack};
`;

export default ScheduleItem;
