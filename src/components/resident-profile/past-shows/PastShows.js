import React from "react";
import styled from "styled-components";
import PastShowCard from "../past-show-card/PastShowCard";

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixCloudClick
}) => {
  const mapPastShows = () => {
    let showDisplay = allPastShows.map(show => {
      let tags = show.tags.map(tag => {
        return (
          <div className="mixcloud-tag" key={tag.url}>
            <span>{tag.name}</span>
          </div>
        );
      });
      return (
        <PastShowCard
          handleMixCloudClick={() => handleMixCloudClick(show)}
          // key={this.props.pastShows.indexOf(show)}
          renderDate={() => renderDate(show.name)}
          renderShowName={() => renderShowName(show.name)}
          tags={tags}
        />
      );
    });
    showDisplay.splice(0, 1);
    return showDisplay;
  };

  return displayShows ? (
    <PastShowsWrapper>{mapPastShows()}</PastShowsWrapper>
  ) : null;
};

const PastShowsWrapper = styled.div``;

export default PastShows;
