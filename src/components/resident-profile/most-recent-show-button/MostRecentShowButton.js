import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";
import { Cta } from "../../text-elements/index";
import { ReactComponent as MixCloud } from "../../../assets/svgs/mixcloud.svg";

const MostRecentShowbutton = ({
  mostRecentShow,
  handleMostRecentShowButtonClick,
  date,
  showName
}) => {
  return (
    <Wrapper
      // className="resident-pastshow-card"
      onClick={() => handleMostRecentShowButtonClick(mostRecentShow)}
    >
      {/* <MixCloud /> */}

      <Date>{date}</Date>
      <ShowName>{showName}</ShowName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  width: fit-content;
  background: ${Colors.ehfmPrimary};
  color: ${Colors.playerWhite};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.playerWhite};
    color: ${Colors.ehfmPrimary};
    transition: background-color 0.2s;
  }
`;

const Date = styled(Cta)`
  font-weight: normal;
  margin-right: 0.75rem;
`;

const ShowName = styled(Cta)`
  font-weight: normal;
`;

export default MostRecentShowbutton;
