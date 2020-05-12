import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Heading4, Body } from '../../text-elements/index';

const DailyShowSchedule = ({ selectedDay }) => {
  const renderSelectedDay = () => {
    if (selectedDay) {
      let selectedDayShows = selectedDay[1];
      let showsForThatDay = selectedDayShows.map((show, index) => {
        return (
          <ShowRow key={index}>
            <ShowTimeWrapper>
              <ShowTime>{showTimeParser(show)}</ShowTime>
            </ShowTimeWrapper>
            <ShowNameWrapper key={index}>
              <ShowName>{showNameParser(show)}</ShowName>
            </ShowNameWrapper>
          </ShowRow>
        );
      });
      return showsForThatDay;
    }
  };

  const showNameParser = (show) => {
    let currentShowName = show.name;
    let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
    let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, '&');
    if (parsedForAmpersands.includes('with')) {
      return withParser(parsedForAmpersands);
    }
    return parsedForAmpersands;
  };

  const withParser = (showName) => {
    const splitShowName = showName.split('with');
    if (splitShowName.length > 2) {
      return showName;
    } else {
      const secondHalf = italicise(splitShowName[1]);
      return (
        <React.Fragment>
          {splitShowName[0]} with {secondHalf}
        </React.Fragment>
      );
    }
  };

  const italicise = (stringToItalicise) => {
    return <i>{stringToItalicise}</i>;
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
    return `${parsedStart} - ${parsedEnd}`;
  };

  return <Wrapper>{renderSelectedDay()}</Wrapper>;
};

const Wrapper = styled.div`
  padding: 10px 10px 0px 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const ShowRow = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ShowTimeWrapper = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const ShowNameWrapper = styled.div`
  flex: 3;
`;

const ShowName = styled(Heading4)`
  font-weight: normal;
`;

const ShowTime = styled(Body)`
  font-weight: normal;
`;

export default DailyShowSchedule;
