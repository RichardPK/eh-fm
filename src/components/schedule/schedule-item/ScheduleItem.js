import React, { useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import moment from "moment";
import { Body } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import Devices from "../../../consts/Devices";
import { SHOW_NOT_FOUND, sanitiseString } from "../../../helpers/PrismicHelper";
import HoverLine from "../../hoverLine/HoverLine";
import { PulsingRedCircle } from "../../players/player/on-air/OnAir";

const ScheduleItem = ({ showName, starts, foundShow, playing }) => {
  const [hovered, setHovered] = useState(false);
  const parsedTime = moment(starts, "YYYY-MM-DD HH:mm:ss").format("HH:mm");

  return (
    <Wrapper>
      <Time>{parsedTime}</Time>
      {playing ? (
        <Playing>
          <PulsingRedCircle />
        </Playing>
      ) : null}
      {foundShow === SHOW_NOT_FOUND ? (
        <Name>{sanitiseString(showName)}</Name>
      ) : (
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
            {sanitiseString(showName)}
            <HoverLine hovered={hovered} zIndex={-1} placeholder />
          </Name>
        </Link>
      )}
    </Wrapper>
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

const Playing = styled.div`
  position: absolute;
  top: 0.3rem;
  left: 1.8rem;

  @media ${Devices.mobileL} {
    top: 0.35rem;
    left: 2rem;
  }

  @media ${Devices.tablet} {
    left: 2.25rem;
  }

  @media ${Devices.laptop} {
    left: 2.5rem;
  }
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
