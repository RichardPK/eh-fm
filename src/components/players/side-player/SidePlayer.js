import React from "react";
import styled from "styled-components/macro";
import CurrentShow from "../../current-show/CurrentShow";
import Player from "../player/Player";
import Logo from "../../nav-bar/logo/Logo";
import Schedule from "../../schedule/Schedule";
import Devices from "../../../consts/Devices";
import Colors from "../../../consts/Colors";
import Sizes from "../../../consts/Sizes";
import ChatangoButton from "../../chatango/chatango-button/ChatangoButton";

const SidePlayer = ({ currentShow, residentsData, scheduleData }) => {
  return (
    <>
      <FakeSidePlayer />
      <SidePlayerOuter>
        <Logo />
        <CurrentShowAndPlayerWrapper>
          <CurrentShow
            currentShow={currentShow}
            residentsData={residentsData}
          />
          <Player currentShow={currentShow} />
        </CurrentShowAndPlayerWrapper>
        <ScheduleWrapper>
          <Schedule residentsData={residentsData} scheduleData={scheduleData} />
        </ScheduleWrapper>
        <ChatangoButtonWrapper>
          <ChatangoButton />
        </ChatangoButtonWrapper>
      </SidePlayerOuter>
    </>
  );
};

const FakeSidePlayer = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 2;
  width: ${Sizes.sidePlayerWidthSmaller}px;
  display: none;

  @media ${Devices.tablet} {
    display: block;
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    width: ${Sizes.sidePlayerWidth}px;
  }
`;

const SidePlayerOuter = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: ${Colors.ehfmPrimary()};
  padding-top: 2rem;
  width: ${Sizes.sidePlayerWidthSmaller}px;
  height: 100%;
  display: none;

  @media ${Devices.tablet} {
    display: flex;
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    width: ${Sizes.sidePlayerWidth}px;
  }
`;

const CurrentShowAndPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0.5rem 1rem;

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      display: inline-block;
    }
  }

  @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
    @media {
      display: inline-block;
    }
  }
`;

const ScheduleWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-top: ${Colors.bgWhite};
  background-color: ${Colors.playerWhite};
`;

const ChatangoButtonWrapper = styled.div`
  position: absolute;
  bottom: 28px;
  left: 0;
`;

export default SidePlayer;
