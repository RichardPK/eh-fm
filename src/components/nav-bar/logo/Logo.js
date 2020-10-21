import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/svgs/ehfm-logo.svg';
import Colors from '../../../consts/Colors';
import ComRadioLogo from '../../../assets/images/EHFM LOGO _Community Radio White.png';

const LogoHead = ({ mobile, color }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Link to="/">
          {mobile ? (
            <StyledLogo color={color} mobile={mobile} />
          ) : (
            <LogoImg src={ComRadioLogo} mobile={mobile} />
          )}
        </Link>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
`;

const StyledLogo = styled(Logo)`
  height: ${(props) => (props.mobile ? '1.75rem' : '2.5rem')};
  width: auto;
  path,
  polygon {
    fill: ${(props) => (props.color ? props.color : Colors.playerWhite)};
  }
`;

const LogoImg = styled.img`
  height: ${(props) => (props.mobile ? '2.75rem' : '6rem')};
  width: auto;
`;

export default LogoHead;
