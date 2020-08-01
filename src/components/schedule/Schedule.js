import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Cta } from '../text-elements/index';
import DailyShowSchedule from './daily-show-schedule/DailyShowSchedule';
import Colors from '../../consts/Colors';
import ScheduleItem from './schedule-item/ScheduleItem';

const Schedule = ({ todaysSchedule }) => {
  return (
    <Wrapper>
      <Heading4Component>Coming up...</Heading4Component>
      <ScheduleItemsWrapper>
        {todaysSchedule &&
          todaysSchedule[1].map((scheduleItemData) => {
            debugger;
            return <ScheduleItem />;
          })}
      </ScheduleItemsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem 0;
`;

const Heading4Component = styled(Cta)`
  color: ${Colors.notQuiteBlack};
  font-weight: normal;
`;

const ScheduleItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Schedule;
