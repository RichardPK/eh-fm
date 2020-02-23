import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "./Logo/Logo";
import "./Logo/Logo.scss";
import InstagramLogo from "../../assets/images/instagram-teal.png";
import FacebookLogo from "../../assets/images/facebook-teal.png";
import ChatangoLogo from "../../assets/images/chat-teal.png";
import Devices from "../../consts/Devices";

const NavBar = props => {
  const residentsURL = "/residents";

  const renderActiveLink = function() {
    if (window.location.href.includes(residentsURL)) {
      return "nav-link-active";
    } else {
      return "nav-link";
    }
  };

  return (
    <React.Fragment>
      <Wrapper>
        <div className="nav-bar">
          <div className="nav-left">
            <p className={renderActiveLink()}>
              <Link to={residentsURL}>Residents</Link>
            </p>
          </div>
          <div className="logo-head-container">
            <Logo />
          </div>
          <div className="nav-right">
            <div className="nav-socials-wrapper">
              <a href="https://www.instagram.com/ehfm_live/" target="blank">
                <img
                  className="nav-social"
                  src={InstagramLogo}
                  alt="instagram"
                ></img>
              </a>
              <a href="https://www.facebook.com/ehfm.live" target="blank">
                <img
                  className="nav-social"
                  src={FacebookLogo}
                  alt="facebook"
                ></img>
              </a>
              <a href="http://eh-fm.chatango.com/" target="blank">
                <img
                  className="nav-chat"
                  src={ChatangoLogo}
                  alt="chatango"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 100;
  top: 68px;

  @media ${Devices.tablet} {
    top: 0px;
  }
`;

export default NavBar;
