import React, { useRef, useState, memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import PrimaryCarouselItem from '../carousel-items/primary-carousel-item/PrimaryCarouselItem';
import SecondaryCarouselItem from '../carousel-items/secondary-carousel-item/SecondaryCarouselItem';
import Colors from '../../consts/Colors';
import { isInternal, splitUrl } from '../../helpers/CarouselLinkHelper';

const Carousel = ({ data, hierarchy, handleMixCloudClick }) => {
  const [carouselRef, setCarouselRef] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (hierarchy === 'primary') {
      const duplicateSlides = document.querySelectorAll('.swiper-primary-duplicate-slide');

      duplicateSlides.forEach((slide, i) => {
        if (data) {
          const slideHeadlineText = slide.getElementsByClassName('carousel-item-headline')[0]
            .innerText;
          const slideData = data.filter((carouselItemData) => {
            return carouselItemData.data.headline === slideHeadlineText;
          });
          const foundItemData = slideData[0].data;
          slide.onclick = () => handleCarouselItemClick(foundItemData.link, foundItemData.type);
        }
      });
    }
  }, []);

  const params = {
    breakpoints: {
      1640: {
        slidesPerView: hierarchy === 'primary' ? 3.1 : 6,
        spaceBetween: hierarchy === 'primary' ? 75 : 32
      },
      1024: {
        slidesPerView: hierarchy === 'primary' ? 2.15 : 5,
        spaceBetween: hierarchy === 'primary' ? 60 : 32
      },
      768: {
        slidesPerView: hierarchy === 'primary' ? 2 : 3,
        spaceBetween: hierarchy === 'primary' ? 40 : 25
      },
      640: {
        slidesPerView: hierarchy === 'primary' ? 1 : 2,
        spaceBetween: hierarchy === 'primary' ? 40 : 20
      },
      320: {
        slidesPerView: hierarchy === 'primary' ? 1 : 2,
        spaceBetween: hierarchy === 'primary' ? 30 : 15
      }
    },
    slideDuplicateClass:
      hierarchy === 'primary' ? 'swiper-primary-duplicate-slide' : 'swiper-slide-duplicate',
    slidesPerGroup: 1,
    loop: hierarchy === 'primary' ? true : false,
    speed: 400,
    autoplay:
      hierarchy === 'primary'
        ? {
            delay: hierarchy === 'primary' ? 7000 : 7000,
            disableOnInteraction: false
          }
        : false
  };

  const handleCarouselItemClick = (link, type) => {
    const url = link.url;
    if (type.toLowerCase() === 'link') {
      if (isInternal(url)) {
        history.push(splitUrl(url));
      } else {
        window.open(url, '_blank');
      }
    }
    if (type.toLowerCase() === 'past show') {
      const deconstructedUrl = new URL(link.url, 'https://www.mixcloud.com/');
      handleMixCloudClick(deconstructedUrl.pathname);
    }
  };

  console.log(carouselRef ? `Autoplay running: ${carouselRef.autoplay.running}` : `No carouselRef`);

  return (
    <Wrapper hierarchy={hierarchy}>
      {data.length > 0 ? (
        <Swiper
          {...params}
          getSwiper={(swiperEl) => {
            setCarouselRef(swiperEl);
          }}
        >
          {data.map((carouselItemData) => {
            return (
              <div key={carouselItemData.id}>
                {hierarchy === 'primary' ? (
                  <PrimaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                    carouselRef={carouselRef}
                  />
                ) : (
                  <SecondaryCarouselItem
                    data={carouselItemData.data}
                    hierarchy={hierarchy}
                    handleCarouselItemClick={handleCarouselItemClick}
                    carouselRef={carouselRef}
                  />
                )}
              </div>
            );
          })}
        </Swiper>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: grab;
  margin: ${(props) => (props.hierarchy === 'primary' ? '0 0 5rem' : '0 0 1rem')};
`;

export default memo(Carousel);
