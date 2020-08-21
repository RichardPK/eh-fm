import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";
import Colors from "../../../consts/Colors";

const Header4 = ({ children, className, unsetColor }) => {
  return (
    <Wrapper className={className} unsetColor={unsetColor}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h4`
  ${Typography.heading4}
  ${(props) => (props.unsetColor ? `` : `color: ${Colors.notQuiteBlack()};`)}
`;

export default Header4;
