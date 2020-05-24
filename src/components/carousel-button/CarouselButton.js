import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';

const CarouselButton = ({ kind }) => {
  let [hovered, setHovered] = useState(false);

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  background-color: ${Colors.ehfmPrimary};
`;

export default CarouselButton;
