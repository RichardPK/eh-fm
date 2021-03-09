import React, { useState } from "react";
import styled from "styled-components/macro";
import { Heading4, Heading3, Body } from "../../text-elements/index";
import Colors from "../../../consts/Colors";
import Image from "../../image/Image";
import CarouselButton from "../../carousel-button/CarouselButton";
import Anims from "../../../consts/Anims";

const PrimaryCarouselItem = ({
  data,
  hierarchy,
  handleCarouselItemClick,
  carouselRef,
  index,
}) => {
  let [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      hierarchy={hierarchy}
      onMouseOver={() => {
        // console.log('hovered' + data.headline);
        setHovered(true);
        carouselRef && carouselRef.autoplay.stop();
      }}
      onMouseOut={() => {
        setHovered(false);
        carouselRef && carouselRef.autoplay.start();
      }}
      onClick={() => {
        handleCarouselItemClick(data.link, data.type, index, hierarchy);
      }}
    >
      <TextWrapper>
        <CategoryBody>{data.category}</CategoryBody>
        <ItemTitle className="carousel-item-headline">
          {data.headline}
        </ItemTitle>
        <FlavourHeading>{data.flavour_text}</FlavourHeading>
      </TextWrapper>
      <ImageWrapper hovered={hovered}>
        <Image baseUrl={data.image.url} width={900} height={900} fit="crop" />
        <ButtonWrapper>
          <CarouselButton
            type={data.type}
            hierarchy={hierarchy}
            hovered={hovered}
            customText={data.custom_link_text}
          />
        </ButtonWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Anims.fadeInWithDelay}
  position: relative;
  width: 100%;
  height: 100%;
  /* make height same as 2x parent container */
  display: grid;
  grid-template-rows: 1fr auto;
  border-radius: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  padding-bottom: 0.5rem;
  grid-row: 1/2;
  /* justify-content: flex-start; */
`;

const CategoryBody = styled(Body)`
  color: ${Colors.ehfmPrimary()};
  padding-bottom: 0.25rem;
`;

const ItemTitle = styled(Heading3)`
  padding-bottom: 0.15rem;
`;

const FlavourHeading = styled(Heading4)`
  color: ${Colors.notQuiteBlack(0.6)};
  font-weight: normal;
  padding-bottom: 0.25rem;
`;

const ImageWrapper = styled.div`
  grid-row: 2/2;
  /* width: 100%; */
  /* height: 350px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  opacity: ${(props) => (props.hovered ? 0.8 : 1)};
  transition: opacity, 0.2s ease-out;

  :hover {
    opacity: 0.8;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default PrimaryCarouselItem;
