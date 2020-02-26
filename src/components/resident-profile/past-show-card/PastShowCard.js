import React from 'react';
import styled from 'styled-components';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';

const PastShowCard = (props) => {
  let tags = props.tags.map((tag) => {
    return (
      <div className="mixcloud-tag" key={tag.url}>
        <span>{tag.name}</span>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Wrapper onClick={props.handleMixCloudClick} key={props.key}>
        <div className="showname-info-cont">
          <span className="resident-mixcloud-date">{props.date}</span>
          <span className="resident-mixcloud-showname">{props.showName}</span>
          <div className="resident-mixcloud-tags-container">{tags}</div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  border-bottom: 2px solid ${Colors.ehfmPrimary};
  margin: 10px 10px;
  padding: 5px;
  color: ${Colors.notQuiteBlack};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  cursor: pointer;

  @media ${Devices.mobileL} {
    margin: 15px 10px;
    padding: 10px 4px 10px 4px;
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.altBlue20Transparent};
      transition: background-color 0.2s ease-out;
    }
  }
`;

export default PastShowCard;
