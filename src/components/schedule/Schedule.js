import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Devices from '../../consts/Devices';
import { Heading4, Cta } from '../text-elements/index';
import ScheduleDayHeading from './schedule-day-heading/ScheduleDayHeading';
import DailyShowSchedule from './daily-show-schedule/DailyShowSchedule';
import Colors from '../../consts/Colors';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: this.props.nextSevenDaysSchedule[0]
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.isDaySelected = this.isDaySelected.bind(this);
  }

  handleDayClick(day) {
    let selectedDay = this.props.nextSevenDaysSchedule.filter((daySchedule) => {
      return daySchedule[0] === day;
    });
    this.setState({ selectedDay: selectedDay[0] });
  }

  isDaySelected(day) {
    return day === this.state.selectedDay;
  }

  render() {
    return (
      <Wrapper>
        <Heading4Component>Schedule</Heading4Component>
        <Inner>
          <DaysHeaderWrapper>
            {this.props.nextSevenDaysSchedule.map((scheduleDay) => {
              return (
                <ScheduleDayHeading
                  onClick={this.handleDayClick}
                  dayName={scheduleDay[0]}
                  currentDay={this.props.currentDay}
                  selected={this.isDaySelected(scheduleDay)}
                />
              );
            })}
          </DaysHeaderWrapper>
          <Divider />
          <DailyShowSchedule selectedDay={this.state.selectedDay} />
        </Inner>
      </Wrapper>
    );
  }
}

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

const Divider = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${Colors.altBlue};
`;

const DaysHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;

  .days-header-item {
    cursor: pointer;
    padding: 10px;
    margin-top: 5px;

    @media ${Devices.tablet} {
      transition: all 0.2s;
      &:hover {
        background-color: ${Colors.altBlue};
        color: white;
      }
    }
  }

  .days-header-0 {
    background-color: ${Colors.altBlue};
    color: white;
  }
`;

export default Schedule;
