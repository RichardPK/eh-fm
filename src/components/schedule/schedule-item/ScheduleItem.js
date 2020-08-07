import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { Body } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import { SHOW_NOT_FOUND } from "../../../helpers/PrismicHelper";
import moment from "moment";

const ScheduleItem = ({ showName, starts, foundShow }) => {
  const parsedTime = moment(starts, "YYYY-MM-DD HH:mm:ss").format("HH:mm");

  return (
    <Wrapper>
      {foundShow === SHOW_NOT_FOUND ? (
        <>
          <Time>{parsedTime}</Time>
          <Name>{showName}</Name>
        </>
      ) : (
        <>
          <Time>{parsedTime}</Time>
          <Name>{showName}</Name>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding-bottom: 0.15rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid ${Colors.notQuiteBlackCustom(0.2)};
`;

const Name = styled(Body)``;

const Time = styled(Body)`
  color: ${Colors.notQuiteBlack};
`;

export default ScheduleItem;
