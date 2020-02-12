import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const DailyShowSchedule = ({ selectedDay }) => {
  const renderSelectedDay = () => {
    if (selectedDay) {
      let selectedDayShows = selectedDay[1];
      let showsForThatDay = selectedDayShows.map((show, index) => {
        return (
          <tr key={index} className="show-listing">
            {showTimeParser(show)}
            <td className="show-name" key={index}>
              {showNameParser(show)}
            </td>
          </tr>
        );
      });
      return showsForThatDay;
    }
  };

  const showNameParser = (show) => {
    let currentShowName = show.name;
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
    return parsedForAmpersands;
  };

  const showTimeParser = (show) => {
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
  };

  return (
    <Wrapper>
      <table className="show-schedule">
        <tbody>{renderSelectedDay()}</tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DailyShowSchedule;
