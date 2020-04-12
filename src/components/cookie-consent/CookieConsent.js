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
        <WhiteBox>
          <CookiesText>
            🍪 This website uses cookies to help us make eh-fm better. You can check out our policy{' '}
            {<a href="https://www.iubenda.com/privacy-policy/61514814">here</a>}. You accept the use
            of cookies by closing or dismissing this notice, by clicking a link, button or by
            continuing to browse otherwise.
          </CookiesText>
          <CloseButton
            onClick={() => {
              console.log('Cross clicked');
            }}
          >
            <span>x</span>
          </CloseButton>
        </WhiteBox>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.playerWhiteCustom(0.95)};
  position: fixed;
  bottom: 0;
  width: 100vw;
  z-index: 2;
`;

const Inner = styled.div`
  margin: 0px auto;
  max-width: ${Sizes.maxInnerWidth};
`;

const WhiteBox = styled.div`
  position: relative;
  display: flex;
  margin: 0px 40px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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
  top: 1rem;
  right: 0;
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
