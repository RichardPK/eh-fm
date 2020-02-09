import React, { Component } from 'react';
import './Schedule.scss';
import styled from 'styled-components';
import Devices from '../../consts/Devices';
import { Heading4, Cta } from '../text-elements/index';
import Colors from '../../consts/Colors';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.renderSelectedDay = this.renderSelectedDay.bind(this);
    this.showTimeParser = this.showTimeParser.bind(this);
    this.showNameParser = this.showNameParser.bind(this);
    this.parseDayData = this.parseDayData.bind(this);
    this.removeNextFromDay = this.removeNextFromDay.bind(this);
    this.renderNextSevenDaysHeaders = this.renderNextSevenDaysHeaders.bind(this);
  }

  renderSelectedDay() {
    if (this.props.selectedDay !== null) {
      let selectedDay = this.props.selectedDay[1];
      let showsForThatDay = selectedDay.map((show, index) => {
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

  parseDayData(dayName) {
    let namesWithNextInChopped = this.removeNextFromDay(dayName);
    let splitName = namesWithNextInChopped.split('');
    let sliceToUpperCase = splitName.slice(0, 1);
    let upperCaseSlice = sliceToUpperCase[0].toUpperCase();
    let lowerCaseSlice = splitName.slice(1);
    lowerCaseSlice.unshift(upperCaseSlice);
    let finalDayName = lowerCaseSlice.join('');
    if (finalDayName === this.state.currentDay) {
      return 'Today';
    } else {
      return finalDayName;
    }
  }

  removeNextFromDay(dayName) {
    if (dayName.includes('next')) {
      let splitName = dayName.split('');
      let cutName = splitName.splice(4);
      return cutName.join('');
    } else {
      return dayName;
    }
  }

  renderNextSevenDaysHeaders() {
    console.log(this.props.nextSevenDaysSchedule);
    debugger;
  }

  render() {
    return (
      <Wrapper>
        <Heading4Component>Schedule</Heading4Component>
        <Inner>
          <DaysHeaderWrapper>{this.renderNextSevenDaysHeaders()}</DaysHeaderWrapper>
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
