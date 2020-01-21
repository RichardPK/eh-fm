import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const Header3 = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.h3`
  ${Typography.heading3}
  letter-spacing: 1.5px;
`;

export default Header3;
