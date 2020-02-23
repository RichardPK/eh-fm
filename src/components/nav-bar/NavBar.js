import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "./logo/Logo";
import "./logo/Logo.scss";
import Devices from "../../consts/Devices";
import Socials from "./socials/Socials";

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
            <Socials />
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
