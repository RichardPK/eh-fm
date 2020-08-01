import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Cta } from '../text-elements/index';
import DailyShowSchedule from './daily-show-schedule/DailyShowSchedule';
import Colors from '../../consts/Colors';

const Schedule = ({ todaysSchedule }) => {
  return (
    <Wrapper>
      <Heading4Component>Coming up...</Heading4Component>
      <Inner>
        {todaysSchedule &&
          todaysSchedule.map((scheduleItem) => {
            // return (
            //   <ScheduleDayHeading
            //     onClick={this.handleDayClick}
            //     dayName={scheduleDay[0]}
            //     currentDay={this.props.currentDay}
            //     selected={this.isDaySelected(scheduleDay)}
            //   />
            // );
          })}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  margin: 0px 10px 0px 10px;
  overflow: hidden;
  border-radius: 5px;

  @media ${Devices.tablet} {
    width: 41vw;
    margin: 0px 20px 0px 10px;
  }
`;

const Heading4Component = styled(Heading4)`
  color: ${Colors.notQuiteBlack};
  margin: 10px 20px 10px 10px;
`;

const Inner = styled.div`
  background-color: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  margin: 0px;
  overflow: hidden;
  box-shadow: 0px 1px 10px 0.1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  @media ${Devices.tablet} {
    margin: 0px 20px 0px 10px;
  }
`;

export default Schedule;
