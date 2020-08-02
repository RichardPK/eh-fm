import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Body } from '../text-elements/index';
import DailyShowSchedule from './daily-show-schedule/DailyShowSchedule';
import Colors from '../../consts/Colors';
import ScheduleItem from './schedule-item/ScheduleItem';

const Schedule = ({ showsUpNext }) => {
  return (
    <Wrapper>
      <ComingUpText>Coming up...</ComingUpText>
      <ScheduleItemsWrapper>
        {showsUpNext &&
          showsUpNext.map((scheduleItemData) => {
            return (
              <ScheduleItem showName={scheduleItemData.name} starts={scheduleItemData.starts} />
            );
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

const ComingUpText = styled(Body)`
  color: ${Colors.notQuiteBlack};
  font-weight: normal;
`;

const ScheduleItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default Schedule;
