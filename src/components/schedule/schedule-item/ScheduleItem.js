import React, { useRef, useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import moment from "moment";
import { Body } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import { SHOW_NOT_FOUND } from "../../../helpers/PrismicHelper";
import HoverLine from "../../hoverLine/HoverLine";

const ScheduleItem = ({ showName, starts, foundShow }) => {
  const [hovered, setHovered] = useState(false);
  const parsedTime = moment(starts, "YYYY-MM-DD HH:mm:ss").format("HH:mm");

  return (
    <>
      {foundShow === SHOW_NOT_FOUND ? (
        <Wrapper>
          <Time>{parsedTime}</Time>
          <Name>{showName}</Name>
        </Wrapper>
      ) : (
        <Wrapper>
          <Time>{parsedTime}</Time>
          <Link
            to={`/residents/${foundShow.uid}`}
            onMouseOver={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}
          >
            <Name hovered={hovered}>
              {showName} <HoverLine hovered={hovered} zIndex={-1} placeholder />
            </Name>
          </Link>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding-bottom: 0.15rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid ${Colors.notQuiteBlack(0.2)};

  /* a {
    position: relative;
  } */
`;

const Name = styled(Body)`
  display: inline-block;
  position: relative;
  z-index: 1;
  /* color: ${(props) => (props.hovered ? Colors.playerWhite : "#00000")};
  transition: color 0.3s ease-out; */
`;

const Time = styled(Body)`
  color: ${Colors.notQuiteBlack()};
`;

export default ScheduleItem;
