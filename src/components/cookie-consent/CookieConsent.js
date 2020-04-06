import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import CookiesButton from './cookies-button/CookiesButton';
import Devices from '../../consts/Devices';
import { SerializerStream } from 'parse5';
import Sizes from '../../consts/Sizes';

const CookieConsent = ({}) => {
  const handleCookieConsentClick = (response) => {
    if (response === 'positive') {
      console.log('Posa');
    } else {
      console.log('Nega');
    }
  };

  return (
    <Wrapper>
      <Inner>
        <CookiesText>
          🍪 This website uses cookies to help us make eh-fm better. You can check out our policy{' '}
          {<a href="https://www.iubenda.com/privacy-policy/61514814">here</a>}. You accept the use
          of cookies by closing or dismissing this notice, by clicking a link, button or by
          continuing to browse otherwise.
        </CookiesText>
        {/* <CookiesButton positive onClick={() => handleCookieConsentClick('positive')}>
        I'm OK with that
      </CookiesButton>
      <CookiesButton negative onClick={() => handleCookieConsentClick('negative')}>
        Not OK
      </CookiesButton> */}
        <CloseButton
          onClick={() => {
            console.log('Cross clicked');
          }}
        >
          <span>x</span>
        </CloseButton>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  /* top: 154px; */
  bottom: 0;
  /* left: 50%;
  transform: translateX(-50%); */
  width: 100vw;
  z-index: 2;

  @media ${Devices.tablet} {
    /* top: 126px; */
    bottom: 0;
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  margin: 0px auto;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  max-width: ${Sizes.maxInnerWidth};
  background-color: ${Colors.playerWhiteCustom(0.95)};
`;

const CookiesText = styled(Body)`
  padding: 1rem 30px;
  color: ${Colors.ehfmPrimary};
  a {
    color: ${Colors.ehfmPrimary};
    text-decoration: underline;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
  align-self: flex-end;
  font-size: 14px;
  padding: 1px 6px 4px 7px;
  color: ${Colors.ehfmPrimary};
  cursor: pointer;
/* 
  @media ${Devices.tablet} {
    &:hover {
      background-color: ${Colors.softWhite};
      color: ${Colors.altBlue60Transparent};
      transition: background-color 0.2s, color 0.2s, ease-out;
    }
  } */
`;

export default CookieConsent;
