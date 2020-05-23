import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Heading4, Body } from '../text-elements/index';
import Colors from '../../consts/Colors';
import Image from '../image/Image';

const CarouselItem = ({ data }) => {
  return (
    <Wrapper>
      <TextWrapper>
        <CategoryBody>{data.category}</CategoryBody>
        <Heading4>{data.headline}</Heading4>
        <FlavourHeading>{data.flavour_text}</FlavourHeading>
      </TextWrapper>
      <ImageWrapper>
        <Image baseUrl={data.image.url} width={350} height={250} fit="crop" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* background-color: ${Colors.playerWhite}; */
  padding: 4px;
  border-radius: 4px;
`;

const TextWrapper = styled.div`
  padding-bottom: 1rem;
  /* justify-content: flex-start; */
`;

const FlavourHeading = styled(Heading4)`
  color: ${Colors.notquiteBlack80Transparent};
`;

const CategoryBody = styled(Body)`
  color: ${Colors.altBlue};
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
`;

export default CarouselItem;
