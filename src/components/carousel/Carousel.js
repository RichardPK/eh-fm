import React, { useState, memo, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Swiper from "react-id-swiper";
import PrimaryCarouselItem from "../carousel-items/primary-carousel-item/PrimaryCarouselItem";
import SecondaryCarouselItem from "../carousel-items/secondary-carousel-item/SecondaryCarouselItem";
import Devices from "../../consts/Devices";
import { isInternal, splitUrl } from "../../helpers/CarouselLinkHelper";
import { clickedCarouselItem } from "../analytics/ClickEventAnalytics";

const Carousel = ({ data, hierarchy, handleMixcloudClick }) => {
  const [carouselRef, setCarouselRef] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (hierarchy === "primary") {
      const duplicateSlides = document.querySelectorAll(
        ".swiper-primary-duplicate-slide"
      );

      duplicateSlides.forEach((slide, i) => {
        if (data) {
          const slideHeadlineText = slide.getElementsByClassName(
            "carousel-item-headline"
          )[0].innerText;
          const slideData = data.filter((carouselItemData) => {
            return carouselItemData.data.headline === slideHeadlineText;
          });
          const foundItemData = slideData[0].data;
          slide.onclick = () =>
            handleCarouselItemClick(foundItemData.link, foundItemData.type);
        }
      });
    }
  }, []);

  const params = {
    breakpoints: {
      1800: {
        slidesPerView: hierarchy === "primary" ? 4 : 7,
        spaceBetween: hierarchy === "primary" ? 64 : 32,
      },
      1024: {
        slidesPerView: hierarchy === "primary" ? 3 : 5,
        spaceBetween: hierarchy === "primary" ? 60 : 28,
      },
      768: {
        slidesPerView: hierarchy === "primary" ? 2 : 3,
        spaceBetween: hierarchy === "primary" ? 40 : 25,
      },
      640: {
        slidesPerView: hierarchy === "primary" ? 1 : 2,
        spaceBetween: hierarchy === "primary" ? 40 : 20,
      },
      320: {
        slidesPerView: hierarchy === "primary" ? 1 : 2,
        spaceBetween: hierarchy === "primary" ? 30 : 15,
      },
    },
    slideDuplicateClass:
      hierarchy === "primary"
        ? "swiper-primary-duplicate-slide"
        : "swiper-slide-duplicate",
    // slidesPerGroup: 1,
    loop: hierarchy === "primary" ? true : false,
    speed: 400,
    autoplay:
      hierarchy === "primary"
        ? {
            delay: hierarchy === "primary" ? 6000 : 7000,
            disableOnInteraction: false,
          }
        : false,
  };

  const handleCarouselItemClick = (link, type, index, hierarchy) => {
    console.log("link", link);
    clickedCarouselItem(link, type, index, hierarchy);

    const url = link.url;
    if (type.toLowerCase() === "link") {
      if (isInternal(url)) {
        history.push(splitUrl(url));
      } else {
        window.open(url, "_blank");
      }
    }
    if (type.toLowerCase() === "past show") {
      const deconstructedUrl = new URL(link.url, "https://www.mixcloud.com/");

      handleMixcloudClick(deconstructedUrl.pathname);
    }
  };

  // console.log(
  //   carouselRef
  //     ? `Autoplay running: ${carouselRef.autoplay.running}`
  //     : `No carouselRef`
  // );

  return (
    <Wrapper hierarchy={hierarchy}>
      <Swiper
        {...params}
        getSwiper={(swiperEl) => {
          setCarouselRef(swiperEl);
        }}
      >
        {data.length &&
          data.map((carouselItemData, i) => (
            <div key={`carouselItemData-${i}`}>
              {hierarchy === "primary" ? (
                <PrimaryCarouselItem
                  data={carouselItemData.data}
                  hierarchy={hierarchy}
                  handleCarouselItemClick={handleCarouselItemClick}
                  carouselRef={carouselRef}
                  index={i}
                />
              ) : (
                <SecondaryCarouselItem
                  data={carouselItemData.data}
                  hierarchy={hierarchy}
                  handleCarouselItemClick={handleCarouselItemClick}
                  carouselRef={carouselRef}
                  index={i}
                />
              )}
            </div>
          ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: grab;
  margin: ${(props) => (props.hierarchy === "primary" ? "0 0 3rem" : "0")};

  @media ${Devices.tablet} {
    margin: ${(props) =>
      props.hierarchy === "primary" ? "0 0 5rem" : "0 0 1rem"};
  }

  .swiper-wrapper {
    height: inherit;

    .swiper-slide {
      height: inherit;
    }
  }
`;

export default memo(Carousel);
