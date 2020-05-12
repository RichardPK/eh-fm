import React from 'react';
import styled from 'styled-components/macro';
import Logo from './logo/Logo';
import Devices from '../../consts/Devices';
import Socials from './socials/Socials';
import Colors from '../../consts/Colors';
import NavLinks from './nav-links/NavLinks';
import PaypalButton from '../paypal-button/PaypalButton';

const NavBar = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Inner>
          <Left>
            <NavLinks />
          </Left>
          <HeaderLogoWrapper>
            <Logo />
          </HeaderLogoWrapper>
          <Right>
            <PaypalButton />
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

const HeaderLogoWrapper = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -70px;
  padding-left: 50vw;
  padding-right: 50vw;
  padding-top: 10px;
  padding-bottom: 5px;
  background-color: white;

  @media ${Devices.tablet} {
    top: 0px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto 0px auto auto;
`;

export default NavBar;
