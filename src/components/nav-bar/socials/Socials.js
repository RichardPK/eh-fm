import React from "react";
import styled from "styled-components";
import InstagramLogo from "../../../assets/images/instagram-teal.png";
import FacebookLogo from "../../../assets/images/facebook-teal.png";
import ChatangoLogo from "../../../assets/images/chat-teal.png";

const Socials = () => {
  return (
    <div className="nav-socials-wrapper">
      <a href="https://www.instagram.com/ehfm_live/" target="blank">
        <img className="nav-social" src={InstagramLogo} alt="instagram"></img>
      </a>
      <a href="https://www.facebook.com/ehfm.live" target="blank">
        <img className="nav-social" src={FacebookLogo} alt="facebook"></img>
      </a>
      <a href="http://eh-fm.chatango.com/" target="blank">
        <img className="nav-chat" src={ChatangoLogo} alt="chatango"></img>
      </a>
    </div>
  );
};

export default Socials;
