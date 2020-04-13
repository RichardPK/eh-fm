import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';
import Sizes from '../../consts/Sizes';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [showConsentBanner, setShowConsentBanner] = useState(true);
  const [cookie, setCookie] = useCookies(['ehfm']);

  useEffect(() => {
    if (showConsentBanner === true) {
      if (cookie.ehfm) {
        setShowConsentBanner(false);
      }
    }
  }, [showConsentBanner, cookie]);

  return (
    <Wrapper showConsentBanner={showConsentBanner}>
      <Inner>
        <WhiteBox>
          <CookiesText>
            🍪 This website uses cookies to help us make eh-fm better. You can check out our policy{' '}
            {
              <a
                href="https://www.iubenda.com/privacy-policy/61514814"
                target="_blank"
                alt="privacy policy"
              >
                here
              </a>
            }
            . By continuing to use the site or by dismissing this window, you accept the use of
            cookies as detailed in{' '}
            <a
              href="https://www.iubenda.com/privacy-policy/61514814"
              target="_blank"
              alt="privacy policy"
            >
              our policy
            </a>
            .
          </CookiesText>
          <CloseButton
            onClick={() => {
              setCookie('ehfm', 1);
              setShowConsentBanner(false);
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
  display: ${(props) => (props.showConsentBanner ? 'block' : 'none')};
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
  margin: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${Colors.playerWhiteCustom(0.95)};

  @media ${Devices.tablet} {
    margin: 0 40px;
  }
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
  right: 10px;
  text-align: center;
  align-self: flex-end;
  font-size: 14px;
  padding: 1px 6px 4px 7px;
  color: ${Colors.ehfmPrimary};
  cursor: pointer;

  @media ${Devices.tablet} {
    top: 1rem;
    right: 0;
  }
`;

export default CookieConsent;
