import React from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import { Body } from "../text-elements/index";
import Colors from "../../consts/Colors";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["ehfm"]);

  return (
    <Wrapper>
      <Inner>
        <WhiteBox>
          <CookiesText>
            <span role="img" aria-label="cookie emoji">
              🍪
            </span>{" "}
            This website uses cookies to help us make EHFM better. You can check
            out our policy{" "}
            {
              <a
                href="https://www.iubenda.com/privacy-policy/61514814"
                target="_blank"
                rel="noopener noreferrer"
                alt="privacy policy"
              >
                here
              </a>
            }
            . By continuing to use the site or by dismissing this window, you
            accept the use of cookies as detailed in{" "}
            <a
              href="https://www.iubenda.com/privacy-policy/61514814"
              rel="noopener noreferrer"
              target="_blank"
              alt="privacy policy"
            >
              our policy
            </a>
            .
          </CookiesText>
          <CloseButton
            onClick={() => {
              setCookie("ehfm", 1, { path: "/" });
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
  margin: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  @media ${Devices.tablet} {
    margin: 0 40px;
  }
`;

const CookiesText = styled(Body)`
  padding: 1rem 30px;
  color: ${Colors.ehfmPrimary()};
  a {
    color: ${Colors.ehfmPrimary()};
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
  color: ${Colors.ehfmPrimary()};
  cursor: pointer;

  @media ${Devices.tablet} {
    top: 1rem;
    right: 0;
  }
`;

export default CookieConsent;
