import React from 'react';
import styled from 'styled-components';
import PlayPauseButton from '../player/play-pause-button/PlayPauseButton';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';
import { Cta } from '../text-elements/index';

const ListenNowButton = ({ playing, playClicked }) => {
  return (
    <Wrapper className={'currentshow-playbutton-container'} onClick={playClicked}>
      <ListenNowText>Listen now</ListenNowText>
      <PlayPauseButton playingTrueFalse={playing} playClicked={playClicked} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  padding: 4px;
  background-color: ${Colors.altBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  letter-spacing: 1px;

  p {
    margin: 0px;
  }

  @media ${Devices.mobileS} {
    padding: 5px;
  }

  @media ${Devices.mobileL} {
    font-size: 14px;
    padding: 8px;
  }

  @media ${Devices.tablet} {
    padding: 10px;

    &:hover {
      background-color: ${Colors.playerWhite};
      color: ${Colors.altBlue};

      .play-button {
        border-color: transparent transparent transparent ${Colors.altBlue};
      }

      .pause-button {
        border-color: ${Colors.altBlue};
      }
    }
  }
`;

const ListenNowText = styled(Cta)`
  font-weight: normal;
`;

export default ListenNowButton;
