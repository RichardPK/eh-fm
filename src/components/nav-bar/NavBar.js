import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "./logo/Logo";
import "./logo/Logo.scss";
import Devices from "../../consts/Devices";
import Socials from "./socials/Socials";
import Colors from "../../consts/Colors";

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
        <Inner>
          <Left>
            <p className={renderActiveLink()}>
              <Link to={residentsURL}>Residents</Link>
            </p>
          </Left>
          <div className="logo-head-container">
            <Logo />
          </div>
          <Right>
            <Socials />
          </Right>
        </Inner>
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

const Inner = styled.div`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;

  a {
    color: ${Colors.ehfmPrimary};
  }

  @media ${Devices.mobileL} {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Left = styled.div`
  height: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 1px;

  @media ${Devices.tablet} {
    height: 71px;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0px auto auto;
`;

export default NavBar;
