import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const Heading2 = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.h2`
  ${Typography.heading2}
`;

export default Heading2;
