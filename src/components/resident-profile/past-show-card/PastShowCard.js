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

const Wrapper = styled.div`
  margin: 10px 10px 0;
  padding: 5px;
  color: ${Colors.notQuiteBlack()};
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  cursor: pointer;

  @media ${Devices.mobileL} {
    margin: 15px 0;
    padding: 10px 4px 10px 4px;
  }

  @media ${Devices.tablet} {
    transition: all 0.2s;
    &:hover {
      background-color: ${Colors.altBlueHover(0.2)};
    }
  }
`;

const Inner = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  border-bottom: 2px solid ${Colors.ehfmPrimary};
`;

const Date = styled(Body)`
  grid-column: 1 / 2;
  margin-right: 1rem;
  display: flex;
`;

const ShowName = styled(Heading4)`
  grid-column: 2 / 3;
  font-weight: normal;
  margin-right: 0.5rem;
  display: flex;
`;

const TagWrapper = styled.div`
  grid-column: 3 / 3;
  flex-wrap: wrap;
  display: flex;
`;

export default PastShowCard;
