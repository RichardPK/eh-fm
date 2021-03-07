import React from "react";
import styled from "styled-components/macro";
import PastShowCard from "../past-show-card/PastShowCard";
import Devices from "../../../consts/Devices";

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixcloudClick,
  mixCloudWidget,
}) => {
  const showsToDisplay = allPastShows.map((show, i) => {
    return (
      <PastShowCard
        handleMixcloudClick={() => handleMixcloudClick(show.key)}
        key={i}
        date={renderDate(show.name)}
        showName={renderShowName(show.name)}
        tags={show.tags}
      />
    );
  });
  showsToDisplay.splice(0, 1);

  return (
    displayShows && (
      <PastShowsWrapper mixCloudWidget={mixCloudWidget}>
        {showsToDisplay}
      </PastShowsWrapper>
    )
  );
};

const PastShowsWrapper = styled.div`
  left: 5px;
  right: 5px;
  position: absolute;
  top: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.mixCloudWidget ? "123px" : "auto")};

  @media ${Devices.mobileL} {
    left: 20px;
    right: 20px;
  }
`;

export default PastShows;
