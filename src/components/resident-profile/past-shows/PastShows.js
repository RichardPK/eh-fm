import React from "react";
import styled from "styled-components";
import PastShowCard from "../past-show-card/PastShowCard";
import Colors from "../../../consts/Colors";

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixCloudClick
}) => {
  const mapPastShows = () => {
    let showDisplay = allPastShows.map((show, i) => {
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
          key={i}
          renderDate={renderDate(show.name)}
          renderShowName={renderShowName(show.name)}
          tags={tags}
        />
      );
    });
    showDisplay.splice(0, 1);
    return showDisplay;
  };

  return displayShows ? (
    <PastShowsWrapper className="cards-container">
      {mapPastShows()}
    </PastShowsWrapper>
  ) : null;
};

const PastShowsWrapper = styled.div``;

export default PastShows;
