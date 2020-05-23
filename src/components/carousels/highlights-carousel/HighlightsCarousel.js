import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import CarouselItem from '../../carousel-item/CarouselItem';

const HighlightsCarousel = ({ data }) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 10
  };

  return (
    <Wrapper>
      <Swiper {...params}>
        {data.map((carouselItemData) => {
          return <CarouselItem data={carouselItemData.data} />;
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

export default HighlightsCarousel;
