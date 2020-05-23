import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const CarouselItem = ({ data }) => {
  return (
    <Wrapper>
      <h1>{data.headline}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CarouselItem;
