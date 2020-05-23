import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import CarouselItem from '../../carousel-item/CarouselItem';

const HighlightsCarousel = ({ data }) => {
  const params = {
    slidesPerView: 3.3,
    // loop: true,
    spaceBetween: 70
  };

  return (
    <Wrapper>
      {data.length > 0 ? (
        <Swiper {...params}>
          {data.map((carouselItemData) => {
            return (
              <div key={carouselItemData.id}>
                <CarouselItem data={carouselItemData.data} />
              </div>
            );
          })}
        </Swiper>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
`;

export default HighlightsCarousel;
