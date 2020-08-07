import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/svgs/ehfm-logo.svg';

const LogoHead = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Link to="/">
          <StyledLogo />
        </Link>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
`;

const StyledLogo = styled(Logo)`
  height: 2.5rem;
  width: auto;
  path,
  polygon {
    fill: white;
  }
`;

export default LogoHead;
