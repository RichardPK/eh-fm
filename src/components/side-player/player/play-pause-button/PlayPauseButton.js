import React from 'react';
import styled from 'styled-components';
import Colors from '../../../../consts/Colors';
import Sizes from '../../../../consts/Sizes';
import Devices from '../../../../consts/Devices';
import { ReactComponent as PlayButton } from '../../../../assets/svgs/play-button.svg';
import { ReactComponent as PauseButton } from '../../../../assets/svgs/pause.svg';

const Playbutton = (props) => {
  return (
    <Wrapper onClick={() => props.playClicked()}>
      {props.playingTrueFalse ? <StyledPauseButton /> : <StyledPlayButton />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;

  svg {
    fill: ${Colors.ehfmPrimary};
  }
`;

const StyledPlayButton = styled(PlayButton)``;

const StyledPauseButton = styled(PauseButton)``;

export default Playbutton;
