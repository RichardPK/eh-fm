import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";
import Colors from "../../../consts/Colors";

const Header3 = ({ children, className, ...props }) => {
  return (
    <Wrapper {...props} className={className}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  ${Typography.heading3}
  color: ${Colors.notQuiteBlack()};
`;

export default Header3;
