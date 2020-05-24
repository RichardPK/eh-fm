import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';
import { ReactSVG } from 'react-svg';
import { Cta } from '../text-elements/index';
import { ReactComponent as MixCloudSvg } from '../../assets/svgs/mixcloud.svg';

const CarouselButton = ({ type, hierarchy, hovered }) => {
  return (
    <Wrapper hovered={hovered} hierarchy={hierarchy}>
      {type === 'Past show' ? (
        <>
          <IconWrapper>
            <MixCloudSvg />
          </IconWrapper>
          <CtaText hovered={hovered}>Listen now</CtaText>
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => (props.hovered ? Colors.ehfmPrimary10 : Colors.ehfmPrimary)};
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  transition: background-color, 0.2s ease-out;
`;

const CtaText = styled(Cta)`
  color: ${Colors.playerWhite};
  font-weight: normal;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: 0.5rem;

  svg {
    height: 20px;
    width: 20px;

    path {
      fill: white;
    }
  }
`;

export default CarouselButton;
