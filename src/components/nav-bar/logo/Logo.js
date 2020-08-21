import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/svgs/ehfm-logo.svg";
import Colors from "../../../consts/Colors";

const LogoHead = ({ mobile, color }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Link to="/">
          <StyledLogo color={color} mobile={mobile} />
        </Link>
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  /* display: flex; */
`;

const StyledLogo = styled(Logo)`
  height: ${(props) => (props.mobile ? "1.75rem" : "2.5rem")};
  width: auto;
  path,
  polygon {
    fill: ${(props) => (props.color ? props.color : Colors.playerWhite)};
  }
`;

export default LogoHead;
