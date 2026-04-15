import React, { useState, useEffect } from "react";
import Devices from "../../consts/Devices";
import styled, { keyframes } from "styled-components/macro";
import { Events, animateScroll as scroll } from "react-scroll";
import ProfileText from "./profile-text/ProfileText";
import MostRecentShowbutton from "./most-recent-show-button/MostRecentShowButton";
import ArchiveButton from "./archive-button/ArchiveButton";
import PastShows from "./past-shows/PastShows";
import Colors from "../../consts/Colors";
import Sizes from "../../consts/Sizes";
import { Heading4 } from "../text-elements/index";
import {
  PagePaddingStyles,
  FullHeightPageStyles,
  mobileMargin,
  desktopMargin,
} from "../../consts/Styles";

const ResidentProfile = ({
  handleMixcloudClick,
  mixcloudWidgetHtml,
  cookies,
  pastMixcloudShows,
  loadingShows,
  selectedShow,
}) => {
  const [displayShows, setDisplayShows] = useState(false);
  const [orderedPastShows, setOrderedPastShows] = useState(null);
  const [mostRecentShow, setMostRecentShow] = useState(null);

  useEffect(() => {
    const getMostRecentShow = () => {
      let arrayWithModifiedTimestamps = pastMixcloudShows.map((show) => {
        show.created_timestamp = Date.parse(show.created_time);
        return show;
      });

      let orderedByTimestamp = arrayWithModifiedTimestamps.sort(
        (showA, showB) => {
          return showB.created_timestamp - showA.created_timestamp;
        }
      );

      if (orderedByTimestamp.length > 0) {
        setOrderedPastShows(orderedByTimestamp);
        setMostRecentShow(orderedByTimestamp[0]);
      }
    };

    pastMixcloudShows && getMostRecentShow();
  }, [pastMixcloudShows]);

  const renderShowName = (showName) => {
    if (showName.includes("-")) {
      let splitName = showName.split(" - ")[0].trim();
      return splitName;
    } else {
      return showName;
    }
  };

  const renderDate = (showName) => {
    let dateToReturn = "";
    if (showName.includes("-")) {
      let date = showName.split(" - ")[1];
      if (date) {
        dateToReturn = date.trim();
      }
      return dateToReturn;
    } else {
      return;
    }
  };

  const handleArchiveButtonClick = () => {
    if (displayShows === true) {
      scroll.scrollTo(0);
      Events.scrollEvent.register("end", () => {
        setDisplayShows(false);
      });
    } else {
      Events.scrollEvent.remove("end");
      setDisplayShows(true);
      scroll.scrollTo(200);
    }
  };

  return (
    <Wrapper
      mixcloudWidgetHtml={mixcloudWidgetHtml}
      cookiesBannerShowing={!cookies.ehfm}
      displayShows={displayShows}
    >
      <ProfileText selectedShow={selectedShow} />
      {loadingShows && (
        <LoadingWrapper>
          <LoadingTitle>Loading archive</LoadingTitle>
          <Spinner />
        </LoadingWrapper>
      )}
      {pastMixcloudShows && orderedPastShows && (
        <>
          <MostRecentShowbutton
            mostRecentShow={mostRecentShow}
            handleMostRecentShowButtonClick={handleMixcloudClick}
            date={renderDate(mostRecentShow.name)}
            showName={renderShowName(mostRecentShow.name)}
          />
          {pastMixcloudShows.length > 1 && (
            <>
              <ArchiveButton
                handleArchiveButtonClick={handleArchiveButtonClick}
                displayShows={displayShows}
              />
              <PastShows
                displayShows={displayShows}
                allPastShows={orderedPastShows}
                handleMixcloudClick={handleMixcloudClick}
                renderDate={renderDate}
                renderShowName={renderShowName}
                mixcloudWidgetHtml={mixcloudWidgetHtml}
                cookiesBannerShowing={!cookies.ehfm}
              />
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${FullHeightPageStyles}
  ${PagePaddingStyles}
  margin: ${mobileMargin} auto ${(props) =>
    props.displayShows ? 0 : props.mixcloudWidgetHtml ? `123px` : 0};

  @media ${Devices.tablet} {
    margin: ${desktopMargin} auto
      ${(props) =>
        props.displayShows ? 0 : props.mixcloudWidgetHtml ? `123px` : 0};
  }
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  background-color: ${Colors.ehfmPrimary()};
  color: ${Colors.playerWhite};
  position: absolute;
  padding: 0.25rem 0.3rem 0.25rem 0.5rem;
  border-radius: ${Sizes.buttonRadius}px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media ${Devices.mobileL} {
    bottom: 20px;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
  }
`;

const LoadingTitle = styled(Heading4)`
  font-weight: normal;
  color: ${Colors.playerWhite};
`;

const Spinner = styled.div`
  width: 14px;
  height: 14px;
  border: 2px solid ${Colors.playerWhiteCustom(0.35)};
  border-top-color: ${Colors.playerWhite};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  flex-shrink: 0;
`;

export default ResidentProfile;
