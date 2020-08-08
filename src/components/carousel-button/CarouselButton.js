import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';
import { Cta } from '../text-elements/index';
import { ReactComponent as MixCloud } from '../../assets/svgs/mixcloud.svg';
import { ReactComponent as ExternalLink } from '../../assets/svgs/external-link.svg';

const CarouselButton = ({ type, customText, hierarchy, hovered }) => {
  return (
    <Wrapper hovered={hovered} hierarchy={hierarchy}>
      {type === 'Past show' ? (
        <>
          <IconWrapper mixcloud={true}>
            <MixCloud />
          </IconWrapper>
          <CtaText hovered={hovered}>{customText ? customText : 'Listen back'}</CtaText>
        </>
      ) : (
        <>
          <IconWrapper>
            <ExternalLink />
          </IconWrapper>
          <CtaText hovered={hovered}>{customText ? customText : 'Visit'}</CtaText>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.hovered ? Colors.ehfmPrimaryCustom(0.9) : Colors.ehfmPrimary};
  border-top-right-radius: 10px;
  border-bottom-left-radius: 4px;
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
    height: 100%;
    width: ${(props) => (props.mixcloud ? '20px' : '15px')};

    path {
      fill: white;
    }
  }
`;

export default CarouselButton;
