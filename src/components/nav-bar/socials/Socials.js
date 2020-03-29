import React from 'react';
import styled from 'styled-components';
import InstagramLogo from '../../../assets/images/instagram-teal.png';
import FacebookLogo from '../../../assets/images/facebook-teal.png';
import ChatangoLogo from '../../../assets/images/chat-teal.png';
import Devices from '../../../consts/Devices';

const Socials = () => {
  return (
    <Wrapper>
      <SocialInnerWrapper>
        <a href="https://www.instagram.com/ehfm_live/" target="blank">
          <NavSocial src={InstagramLogo} alt="instagram" />
        </a>
      </SocialInnerWrapper>
      <SocialInnerWrapper>
        <a href="https://www.facebook.com/ehfm.live" target="blank">
          <NavSocial src={FacebookLogo} alt="facebook" />
        </a>
      </SocialInnerWrapper>
      <SocialInnerWrapper>
        <a href="http://eh-fm.chatango.com/" target="blank">
          <NavChat src={ChatangoLogo} alt="chatango" />
        </a>
      </SocialInnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 3px;
`;

const SocialInnerWrapper = styled.div`
  margin-left: 10px;
`;

const NavSocial = styled.img`
  width: auto;
  height: 16px;

  @media ${Devices.tablet} {
    height: 18px;
  }
`;

const NavChat = styled.img`
  width: auto;
  height: 16px;

  @media ${Devices.tablet} {
    height: 18px;
  }
`;

export default Socials;
