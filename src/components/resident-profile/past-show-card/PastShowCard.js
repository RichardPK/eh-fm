import React from 'react';
import styled from 'styled-components';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';
import { Body, Heading4 } from '../../text-elements/index';
import ShowTag from '../show-tag/ShowTag';

const PastShowCard = (props) => {
  return (
    <React.Fragment>
      <Wrapper onClick={props.handleMixCloudClick} key={props.key}>
        <Inner>
          <Date>{props.date}</Date>
          <ShowName>{props.showName}</ShowName>
          <TagWrapper>
            {props.tags.map((tag) => {
              return <ShowTag name={tag.name} url={tag.url} />;
            })}
          </TagWrapper>
        </Inner>
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

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled(Body)`
  margin-right: 1rem;
`;

const ShowName = styled(Heading4)`
  font-weight: normal;
  margin-right: 0.5rem;
`;

const TagWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

export default PastShowCard;
