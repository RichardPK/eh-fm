import React from "react";
import styled from "styled-components/macro";
import PastShowCard from "../past-show-card/PastShowCard";
import Devices from "../../../consts/Devices";
import { PagePaddingStyles, WidgetMarginStyles } from "../../../consts/Styles";

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixcloudClick,
  mixcloudWidgetHtml,
  cookiesBannerShowing,
}) => {
  const showsToDisplay = allPastShows.map((show, i) => {
    return (
      <PastShowCard
        key={i}
        handleMixcloudClick={() => handleMixcloudClick(show.key)}
        date={renderDate(show.name)}
        showName={renderShowName(show.name)}
        tags={show.tags}
      />
    );
  });
  showsToDisplay.splice(0, 1);

  return (
    displayShows && (
      <PastShowsWrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={cookiesBannerShowing}
      >
        {showsToDisplay}
      </PastShowsWrapper>
    )
  );
};

const PastShowsWrapper = styled.div`
  ${PagePaddingStyles}
  position: absolute;
  top: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;

  @media ${Devices.tablet} {
    top: calc(100vh - 7rem);
  }
`;

export default PastShows;
