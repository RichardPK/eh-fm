import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Heading4, Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import Image from '../image/Image';

const CarouselItem = ({ data }) => {
  const FlavourHeading = styled(Heading4)`
    color: ${Colors.notquiteBlack80Transparent};
  `;

  return (
    <Wrapper>
      <Body>{data.category}</Body>
      <Heading4>{data.headline}</Heading4>
      <FlavourHeading>{data.flavour_text}</FlavourHeading>
      <Image baseUrl={data.image.url} width={350} height={150} fit="crop" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default CarouselItem;
