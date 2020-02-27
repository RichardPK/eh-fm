import React, { useRef, useState } from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";

const ScheduleDayHeading = ({ dayName, currentDay, onClick, selected }) => {
  const parseDayData = dayName => {
    let namesWithNextInChopped = removeNextFromDay(dayName);
    let splitName = namesWithNextInChopped.split("");
    let sliceToUpperCase = splitName.slice(0, 1);
    let upperCaseSlice = sliceToUpperCase[0].toUpperCase();
    let lowerCaseSlice = splitName.slice(1);
    lowerCaseSlice.unshift(upperCaseSlice);
    let finalDayName = lowerCaseSlice.join("");
    if (finalDayName === currentDay) {
      return "Today";
    } else {
      return finalDayName;
    }
  };

  const removeNextFromDay = dayName => {
    if (dayName.includes("next")) {
      let splitName = dayName.split("");
      let cutName = splitName.splice(4);
      return cutName.join("");
    } else {
      return dayName;
    }
  };

  return (
    <Wrapper onClick={() => onClick(dayName)} selected={selected}>
      {parseDayData(dayName)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  margin-top: 5px;
  transition: all 0.2s ease-out;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  ${props =>
    props.selected
      ? `
  background-color: ${Colors.altBlue};
  color: ${Colors.bgWhite};
  `
      : ``}
`;

export default ScheduleDayHeading;
