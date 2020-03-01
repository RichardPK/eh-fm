import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const Cta = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.cta}
`;

export default Cta;
