import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Heading4, Body } from '../../text-elements/index';
import Colors from '../../../consts/Colors';
import Image from '../../image/Image';
import CarouselButton from '../../carousel-button/CarouselButton';
import CarouselLinkHelper from '../../../helpers/CarouselLinkHelper';

const PrimaryCarouselItem = ({ data, hierarchy }) => {
  let [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      hierarchy={hierarchy}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      onClick={() => {
        CarouselLinkHelper(data.link, data.type);
      }}
    >
      <TextWrapper>
        <CategoryBody>{data.category}</CategoryBody>
        <Heading4>{data.headline}</Heading4>
        <FlavourHeading>{data.flavour_text}</FlavourHeading>
      </TextWrapper>
      <ImageWrapper hovered={hovered}>
        <Image baseUrl={data.image.url} width={450} height={250} fit="crop" />
      </ImageWrapper>
      <ButtonWrapper>
        <CarouselButton
          type={data.type}
          hierarchy={hierarchy}
          hovered={hovered}
          customText={data.custom_link_text}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 370px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-between;
  margin: 0.5rem 2rem;
  border-radius: 4px;
  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  padding-bottom: 0.5rem;
  /* justify-content: flex-start; */
`;

const CategoryBody = styled(Body)`
  color: ${Colors.altBlue};
  padding-bottom: 4px;
`;

const FlavourHeading = styled(Heading4)`
  color: ${Colors.notquiteBlack80Transparent};
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.hovered ? 0.8 : 1)};
  transition: opacity, 0.2s ease-out;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default PrimaryCarouselItem;
