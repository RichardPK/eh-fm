import React, { Component } from 'react';
import './Schedule.scss';
import styled from 'styled-components';
import Devices from '../../consts/Devices';
import { Heading4, Cta } from '../text-elements/index';
import ScheduleDayHeading from './schedule-day-heading/ScheduleDayHeading';
import Colors from '../../consts/Colors';

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: this.props.nextSevenDaysSchedule[0]
    };

    this.renderSelectedDay = this.renderSelectedDay.bind(this);
    this.showTimeParser = this.showTimeParser.bind(this);
    this.showNameParser = this.showNameParser.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  renderSelectedDay() {
    if (this.state.selectedDay) {
      let selectedDayShows = this.state.selectedDay[1];
      let showsForThatDay = selectedDayShows.map((show, index) => {
        return (
          <tr key={index} className="show-listing">
            {this.showTimeParser(show)}
            <td className="show-name" key={index}>
              {this.showNameParser(show)}
            </td>
          </tr>
        );
      });
      return showsForThatDay;
    }
  }

  showNameParser(show) {
    let currentShowName = show.name;
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
    return parsedForAmpersands;
  }

  showTimeParser(show) {
    let startTime = show.start_timestamp;
    let endTime = show.end_timestamp;
    let parsedStart = startTime
      .split(' ')
      .splice(1)
      .join()
      .slice(0, -3);
    let parsedEnd = endTime
      .split(' ')
      .splice(1)
      .join()
      .slice(0, -3);
    return (
      <td className="show-time">
        {parsedStart} - {parsedEnd}
      </td>
    );
  }

  handleDayClick(day) {
    let selectedDay = this.props.nextSevenDaysSchedule.filter((daySchedule) => {
      return daySchedule[0] === day;
    });
    this.setState({ selectedDay: selectedDay[0] });
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
                />
              );
            })}
          </DaysHeaderWrapper>
          <Divider />
          <table className="show-schedule">
            <tbody>{this.renderSelectedDay()}</tbody>
          </table>
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
      &:hover {
        background-color: var(--altblue);
        color: white;
      }
    }
  }

  .days-header-0 {
    background-color: var(--altblue);
    color: white;
  }
`;

const DaysHeader = styled(Cta)``;

export default Schedule;
