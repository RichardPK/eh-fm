import React from "react";
import styled from "styled-components/macro";
import { Tiny } from "../text-elements/index";
import Colors from "../../consts/Colors";
import ScheduleItem from "./schedule-item/ScheduleItem";
import { getShowInPrismic } from "../../helpers/PrismicHelper";

const Schedule = ({ scheduleData, residentsData }) => {
  return (
    <Wrapper>
      <ComingUpText>Coming up...</ComingUpText>
      <ScheduleItemsWrapper>
        {scheduleData &&
          scheduleData.map((scheduleItemData, i) => {
            const foundShow = getShowInPrismic({
              residentsData,
              currentShow: scheduleItemData,
            });

            return (
              <ScheduleItem
                key={i}
                showName={scheduleItemData.name}
                starts={scheduleItemData.starts}
                foundShow={foundShow}
              />
            );
          })}
      </ScheduleItemsWrapper>
      <GradientWrapper />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 45%;
  padding: 1rem 1.5rem 0;
`;

const ComingUpText = styled(Tiny)`
  color: ${Colors.notQuiteBlack()};
  font-weight: normal;
  margin-bottom: 0.75rem;
`;

const ScheduleItemsWrapper = styled.div`
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

const GradientWrapper = styled.div`
  position: absolute;
  display: flex;
  align-self: center;
  left: 0;
  bottom: 0;
  width: 100%;
  pointer-events: none;
  height: 50%;
  background-image: linear-gradient(
    to bottom,
    ${Colors.playerWhiteCustom(0)},
    ${Colors.playerWhiteCustom(0.9)}
  );
  /* background-color: red; */
  z-index: 1;
`;

export default Schedule;
