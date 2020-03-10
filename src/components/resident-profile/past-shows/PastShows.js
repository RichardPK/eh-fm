import React from 'react';
import styled from 'styled-components';
import PastShowCard from '../past-show-card/PastShowCard';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const PastShows = ({
  displayShows,
  allPastShows,
  renderDate,
  renderShowName,
  handleMixCloudClick,
  mixCloudWidget
}) => {
  const showsToDisplay = allPastShows.map((show, i) => {
    return (
      <PastShowCard
        handleMixCloudClick={() => handleMixCloudClick(show)}
        key={i}
        date={renderDate(show.name)}
        showName={renderShowName(show.name)}
        tags={show.tags}
      />
    );
  });
  showsToDisplay.splice(0, 1);

  return displayShows ? (
    <PastShowsWrapper mixCloudWidget={mixCloudWidget}>{showsToDisplay}</PastShowsWrapper>
  ) : null;
};

const PastShowsWrapper = styled.div`
  left: 0;
  position: absolute;
  top: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.mixCloudWidget ? '123px' : 'auto')};

  @media ${Devices.mobileL} {
    left: 20px;
  }
`;

export default PastShows;
