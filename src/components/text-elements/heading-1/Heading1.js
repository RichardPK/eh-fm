import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";
import Colors from "../../../consts/Colors";

const Heading1 = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.h1`
  ${Typography.heading1}
  color: ${Colors.notQuiteBlack()};
`;

export default Heading1;
