import React from 'react';
import styled from 'styled-components';
import Colors from '../../../consts/Colors';
import Devices from '../../../consts/Devices';
import { Heading4 } from '../../text-elements/index';
import { ReactSVG } from 'react-svg';
import ArrowRight from '../../../assets/svgs/arrow-right.svg';

const ArchiveButton = ({ handleArchiveButtonClick, displayShows }) => {
  return (
    <Wrapper onClick={() => handleArchiveButtonClick()} displayShows={displayShows}>
      <Title>Archive</Title>
      <ReactSVG src={ArrowRight} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => (props.displayShows ? Colors.playerWhite : Colors.ehfmPrimary)};
  color: ${(props) => (props.displayShows ? Colors.ehfmPrimary : Colors.playerWhite)};
  position: absolute;
  padding: 0.25rem 0.3rem 0.25rem 0.5rem;
  min-width: 0px;
  max-width: 90px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    margin-top: ${(props) => (props.displayShows ? `5px` : `3px`)};
    margin-left: 0.5rem;
    padding-right: 2px;
    height: 1rem;
    width: auto;
    ${(props) => (props.displayShows ? `transform: rotate(90deg);` : ``)}
    transition: 0.2s transform ease-out;

    path {
      fill: ${(props) => (props.displayShows ? Colors.ehfmPrimary : Colors.playerWhite)};
    }
  }

  @media ${Devices.mobileL} {
    bottom: 20px;
    padding: 0.5rem 0.75rem 0.5rem 1rem;
    /* min-width: 102px;
    max-width: 200px; */
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

const Title = styled(Heading4)`
  font-weight: normal;
`;

export default ArchiveButton;
