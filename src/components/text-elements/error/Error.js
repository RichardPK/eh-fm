import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";
import Colors from "../../../consts/Colors";

const Error = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.body}
  color: ${Colors.red} !important;
`;

export default Error;
