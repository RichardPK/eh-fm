import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/EHFM_Arched-Logo_Teal_1080.png';

const LogoHead = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Link to="/">
          <LogoImg className="arched-logo" src={Logo} alt="ehfm arched logo" />
        </Link>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div``;

const LogoImg = styled.img`
  height: 36px;
`;

export default LogoHead;
