import React, { useState } from "react";
import styled from "styled-components/macro";
import Img from "../../components/image/Image";

const Wrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const About = ({ pageData }) => {
  const { about, want_to_get_involved, image } = pageData.data;

  return (
    <Wrapper>
      <Left></Left>
      <Right>
        <Img baseUrl={image.url} alt={image.alt} />
      </Right>
    </Wrapper>
  );
};

export default About;
