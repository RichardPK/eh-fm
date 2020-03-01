import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const Tiny = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.tiny}
`;

export default Tiny;
