import React from "react";
import styled from "styled-components";
import InstagramLogo from "../../../assets/images/instagram-teal.png";
import FacebookLogo from "../../../assets/images/facebook-teal.png";
import ChatangoLogo from "../../../assets/images/chat-teal.png";

const Socials = () => {
  return (
    <Wrapper>
      <a href="https://www.instagram.com/ehfm_live/" target="blank">
        <NavSocial src={InstagramLogo} alt="instagram" />
      </a>
      <a href="https://www.facebook.com/ehfm.live" target="blank">
        <NavSocial src={FacebookLogo} alt="facebook" />
      </a>
      <a href="http://eh-fm.chatango.com/" target="blank">
        <NavChat src={ChatangoLogo} alt="chatango" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NavSocial = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 10px;
`;

const NavChat = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 10px;
`;

export default Socials;
