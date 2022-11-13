import React from "react";
import styled from "styled-components/macro";
import Devices from "../../../consts/Devices";
import { ReactComponent as Instagram } from "../../../assets/svgs/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/svgs/facebook.svg";
import Colors from "../../../consts/Colors";

const Socials = () => {
  return (
    <Wrapper>
      <SocialInnerWrapper>
        <a href="https://www.instagram.com/ehfm_live/" target="blank">
          <Instagram alt="instagram" />
        </a>
      </SocialInnerWrapper>
      <SocialInnerWrapper>
        <a href="https://www.facebook.com/ehfm.live" target="blank">
          <Facebook alt="facebook" />
        </a>
      </SocialInnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  margin-top: 3px;

  @media ${Devices.tablet} {
    display: flex;
  }
`;

const SocialInnerWrapper = styled.div`
  margin-left: 10px;

  svg {
    width: auto;
    height: 16px;
    path {
      fill: ${Colors.ehfmPrimary()};
    }

    @media ${Devices.tablet} {
      height: 18px;
    }
  }
`;

export default Socials;
