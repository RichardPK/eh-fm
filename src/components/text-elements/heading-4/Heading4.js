import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const Header4 = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.h4`
  ${Typography.heading4}
`;

export default Header4;
