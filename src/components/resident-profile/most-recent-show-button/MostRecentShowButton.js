import React from 'react';
import styled from 'styled-components/macro';
import Colors from '../../../consts/Colors';
import { Cta } from '../../text-elements/index';
import { ReactSVG } from 'react-svg';
import MixCloud from '../../../assets/svgs/mixcloud.svg';
import Devices from '../../../consts/Devices';

const MostRecentShowbutton = ({
  mostRecentShow,
  handleMostRecentShowButtonClick,
  date,
  showName
}) => {
  return (
    <Wrapper
      // className="resident-pastshow-card"
      onClick={() => handleMostRecentShowButtonClick(mostRecentShow.key)}
    >
      <ReactSVG src={MixCloud} />
      <Date>{date}</Date>
      <ShowName>{showName}</ShowName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 42px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  margin-left: 0px;
  width: fit-content;
  background: ${Colors.ehfmPrimary};
  color: ${Colors.playerWhite};
  cursor: pointer;

  svg {
    height: 1.75rem;
    width: auto;
    margin-right: 0.75rem;
    margin-top: 0.1rem;

    path {
      fill: ${Colors.playerWhite};
    }
  }

  @media ${Devices.mobileL} {
    position: relative;
    margin-left: 5px;
    margin-bottom: 0;
    bottom: auto;
  }

  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.playerWhite};
      color: ${Colors.ehfmPrimary};
      transition: background-color 0.2s;

      path {
        fill: ${Colors.ehfmPrimary};
      }
    }
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
