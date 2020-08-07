import React from "react";
import styled from "styled-components/macro";
import Colors from "../../../consts/Colors";
import Devices from "../../../consts/Devices";
import { Body, Heading4 } from "../../text-elements/index";
import ShowTag from "../show-tag/ShowTag";

const PastShowCard = (props) => {
  return (
    <React.Fragment>
      <Wrapper onClick={props.handleMixCloudClick} key={props.key}>
        <Inner>
          <Date>{props.date}</Date>
          <ShowName>{props.showName}</ShowName>
          <TagWrapper>
            {props.tags.map((tag, i) => {
              return (
                <ShowTag key={i} index={i} name={tag.name} url={tag.url} />
              );
            })}
          </TagWrapper>
        </Inner>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  border-bottom: 2px solid ${Colors.ehfmPrimary};
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
  display: flex;
  align-items: center;
`;

const Date = styled(Body)`
  margin-right: 1rem;
  flex: 0.25;
  display: flex;
`;

const ShowName = styled(Heading4)`
  font-weight: normal;
  margin-right: 0.5rem;
  display: flex;
  flex: 1.5;
`;

const TagWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex: 0.25;
`;

export default PastShowCard;
