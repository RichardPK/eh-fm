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
      <CookiesText>
        🍪 This website uses cookies to help us make the eh-fm better. You can read more about how,{' '}
        {<a href="https://www.iubenda.com/">here</a>}.
      </CookiesText>
      {/* <CookiesButton positive onClick={() => handleCookieConsentClick('positive')}>
        I'm OK with that
      </CookiesButton>
      <CookiesButton negative onClick={() => handleCookieConsentClick('negative')}>
        Not OK
      </CookiesButton> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 154px;
  z-index: 2;

  @media ${Devices.tablet} {
    top: 126px;
  }

  width: 100%;
  display: flex;
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

export default CookieConsent;
