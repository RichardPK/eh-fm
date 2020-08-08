import React from 'react';
import styled from 'styled-components/macro';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';
import { Body, Heading4 } from '../../text-elements/index';
import ShowTag from '../show-tag/ShowTag';

const PastShowCard = (props) => {
  return (
    <Inner onClick={props.handleMixCloudClick} key={props.key}>
      <Date>{props.date}</Date>
      <ShowName>{props.showName}</ShowName>
      <TagWrapper>
        {props.tags.map((tag, i) => {
          return <ShowTag key={i} index={i} name={tag.name} url={tag.url} />;
        })}
      </TagWrapper>
    </Inner>
  );
};

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  border-bottom: 2px solid ${Colors.ehfmPrimary};
  cursor: pointer;
  padding: 5px;
  color: ${Colors.notQuiteBlack()};
  @media ${Devices.mobileL} {
    padding: 10px 4px;
  }

  @media ${Devices.tablet} {
    transition: all 0.2s;
    &:hover {
      background-color: ${Colors.altBlueHover(0.2)};
    }
  }
`;

const Date = styled(Body)`
  grid-column: 1 / 2;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const ShowName = styled(Heading4)`
  grid-column: 2 / 3;
  font-weight: normal;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const TagWrapper = styled.div`
  grid-column: 3 / 3;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`;

export default PastShowCard;
