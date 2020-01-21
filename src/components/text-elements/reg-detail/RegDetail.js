import React from "react";
import styled from "styled-components";
import Typography from "../../../consts/typography/Typography";

const RegDetail = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.span`
  ${Typography.regDetail}
`;

export default RegDetail;
