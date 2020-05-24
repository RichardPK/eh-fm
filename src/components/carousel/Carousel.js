import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import PrimaryCarouselItem from '../carousel-items/primary-carousel-item/PrimaryCarouselItem';
import SecondaryCarouselItem from '../carousel-items/secondary-carousel-item/SecondaryCarouselItem';
import Colors from '../../consts/Colors';

const HighlightsCarousel = ({ data, hierarchy }) => {
  const params = {
    slidesPerView: hierarchy === 'primary' ? 3.3 : 6.2,
    // loop: true,
    spaceBetween: hierarchy === 'primary' ? 60 : 30
  };

  return (
    <Wrapper hierarchy={hierarchy}>
      {data.length > 0 ? (
        <Swiper {...params}>
          {data.map((carouselItemData) => {
            return (
              <div key={carouselItemData.id}>
                {hierarchy === 'primary' ? (
                  <PrimaryCarouselItem data={carouselItemData.data} hierarchy={hierarchy} />
                ) : (
                  <SecondaryCarouselItem data={carouselItemData.data} hierarchy={hierarchy} />
                )}
              </div>
            );
          })}
        </Swiper>
      ) : null}
      {hierarchy === 'primary' ? <Divider /> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Divider = styled.div`
  margin: 2rem;
  height: 2px;
  /* width: 100%; */
  background-color: ${Colors.notquiteBlack50Transparent};
`;

export default HighlightsCarousel;
