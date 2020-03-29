import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import CookiesButton from './cookies-button/CookiesButton';
import Devices from '../../consts/Devices';

const CookieConsent = ({}) => {
  const handleCookieConsentClick = (response) => {
    if (response === 'positive') {
      console.log('Pos');
    } else {
      console.log('Neg');
    }
  };

  return (
    <Wrapper>
      <Inner>
        <CookiesText>
          🍪 This website uses cookies to help us make eh-fm better. You can read more about how,{' '}
          {<a href="https://www.iubenda.com/">here</a>}.
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
  top: 154px;
  z-index: 2;
  width: 100vw;

  @media ${Devices.tablet} {
    top: 126px;
  }
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.playerWhiteCustom(0.95)};
  padding: 1rem 30px;
`;

const CookiesText = styled(Body)`
  color: ${Colors.ehfmPrimary};
  a {
    color: ${Colors.ehfmPrimary};
    text-decoration: underline;
  }
`;

const CloseButton = styled.div`
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
