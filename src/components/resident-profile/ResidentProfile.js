import React, { useState, useEffect } from "react";
import Devices from "../../consts/Devices";
import styled from "styled-components/macro";
import { Events, animateScroll as scroll } from "react-scroll";
import ProfileText from "./profile-text/ProfileText";
import MostRecentShowbutton from "./most-recent-show-button/MostRecentShowButton";
import ArchiveButton from "./archive-button/ArchiveButton";
import PastShows from "./past-shows/PastShows";

const ResidentProfile = (props) => {
  const [displayShows, setDisplayShows] = useState(false);
  const [orderedShows, setOrderedShows] = useState(null);
  const [mostRecentShow, setMostRecentShow] = useState(null);

  useEffect(() => {
    const getMostRecentShow = () => {
      let arrayWithModifiedTimestamps = props.pastMixcloudShows.map((show) => {
        show.created_timestamp = Date.parse(show.created_time);
        return show;
      });

      let orderedByTimestamp = arrayWithModifiedTimestamps.sort(
        (showA, showB) => {
          return showB.created_timestamp - showA.created_timestamp;
        }
      );

      if (orderedByTimestamp.length > 0) {
        setOrderedShows(orderedByTimestamp);
        setMostRecentShow(orderedByTimestamp[0]);
      } else {
        setMostRecentShow("none");
      }
    };

    props.pastMixcloudShows && getMostRecentShow();
  }, [props.pastMixcloudShows]);

  const renderShowName = (showName) => {
    if (showName.includes("-")) {
      let name = showName.split(" - ")[0].trim();
      return name;
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
    <React.Fragment>
      <Wrapper mixcloudWidgetHtml={props.mixcloudWidgetHtml}>
        <ProfileText props={props} />
        {props.pastMixcloudShows && orderedShows && (
          <React.Fragment>
            <MostRecentShowbutton
              mostRecentShow={mostRecentShow}
              handleMostRecentShowButtonClick={props.handleMixcloudClick}
              date={renderDate(mostRecentShow.name)}
              showName={renderShowName(mostRecentShow.name)}
            />
            {props.pastMixcloudShows.length > 1 ? (
              <>
                <ArchiveButton
                  handleArchiveButtonClick={handleArchiveButtonClick}
                  displayShows={displayShows}
                />
                <PastShows
                  displayShows={displayShows}
                  allPastShows={orderedShows}
                  handleMixcloudClick={props.handleMixcloudClick}
                  renderDate={renderDate}
                  renderShowName={renderShowName}
                  mixcloudWidgetHtml={props.mixcloudWidgetHtml}
                />
              </>
            ) : null}
          </React.Fragment>
        )}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* minus nav bar, padding & top margin. Took off slightly more to create bar at bottom */
  height: calc(100vh - 150px - 3.5rem);
  margin: 143px auto ${(props) => (props.mixcloudWidgetHtml ? `123px` : 0)};
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: 2rem auto 0;

  @media ${Devices.tablet} {
    margin: 2.5rem auto 0;
    height: calc(100vh - 126px - 3.5rem);
  }
`;

export default ResidentProfile;
