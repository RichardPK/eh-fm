import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components/macro";
import MetaData from "../../components/metadata/MetaData";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import Carousel from "../../components/carousel/Carousel";
import WidgetMarginStyles from "../../consts/WidgetMarginStyles";
import AdditionalCarouselHeading from "../../components/additional-carousel-heading/AdditionalCarouselHeading";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";

const HomeContainer = ({ carouselData }) => {
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml, handleMixcloudClick } = useContext(
    MixcloudWidgetContext
  );
  const [highlightedCarouselItems, setHighlightedCarouselItems] = useState([]);
  const [
    additionalCarouselsWithItems,
    setAdditionalCarouselsWithItems,
  ] = useState([]);
  const PrimaryCarousel = Carousel;
  const { allCarouselItems, additionalCarousels } = carouselData;

  const reverseChronologicalSort = (array) => {
    return array.sort((item1, item2) => {
      const firstDate = new Date(item1.first_publication_date);
      const secondDate = new Date(item2.first_publication_date);
      return secondDate - firstDate;
    });
  };

  // Get 'highlighted' carousel items
  useEffect(() => {
    const filterHighlightedCarouselItems = () => {
      return allCarouselItems.filter((featuredItem) => {
        return featuredItem.data.highlighted;
      });
    };

    const filteredHighlightedCarouselItems = filterHighlightedCarouselItems();
    const sortedByMostRecent = reverseChronologicalSort(
      filteredHighlightedCarouselItems
    );

    setHighlightedCarouselItems(sortedByMostRecent);
  }, [allCarouselItems]);

  // Get 'additional' carousels
  useEffect(() => {
    const sortCarouselsByPosition = (array) => {
      return array.sort((item1, item2) => {
        return item1.position - item2.position;
      });
    };

    const getCarouselItems = (carouselData) => {
      const carouselItemsWithoutLinkedData = carouselData.data.carousel_items;
      const carouselItemsWithLinkedData = carouselItemsWithoutLinkedData.map(
        (carouselItem) => {
          return allCarouselItems.find((item) => {
            const idToCompare = carouselItem.carousel_item
              ? carouselItem.carousel_item.id
              : carouselItem.id;
            return item.id === idToCompare;
          });
        }
      );
      return carouselItemsWithLinkedData;
    };

    const getCarousels = () =>
      additionalCarousels.map((carouselData) => {
        const carouselItems = getCarouselItems(carouselData);
        carouselData.data.carousel_items = carouselItems;
        carouselData.data.id = carouselData.id;
        return carouselData.data;
      });

    const carouselsWithParsedData = getCarousels();
    const carouselsSortedByPosition = sortCarouselsByPosition(
      carouselsWithParsedData
    );
    setAdditionalCarouselsWithItems(carouselsSortedByPosition);
  }, [additionalCarousels, allCarouselItems]);
  console.log(cookies);

  return (
    <React.Fragment>
      <MetaData url="https://www.ehfm.live" />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        {highlightedCarouselItems.length > 0 && (
          <PrimaryCarousel
            data={highlightedCarouselItems}
            hierarchy={"primary"}
            handleMixcloudClick={handleMixcloudClick}
          />
        )}

        {additionalCarouselsWithItems.length > 0
          ? additionalCarouselsWithItems.map((carousel) => {
              const sortedData = reverseChronologicalSort(
                carousel.carousel_items
              );
              return (
                <AdditionalCarouselWrapper key={carousel.id}>
                  <AdditionalCarouselHeading
                    carouselName={carousel.carousel_name}
                  />
                  <Carousel
                    data={sortedData}
                    hierarchy={"secondary"}
                    handleMixcloudClick={handleMixcloudClick}
                  />
                </AdditionalCarouselWrapper>
              );
            })
          : null}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-width: calc(100vw - 2rem);
  ${(props) => WidgetMarginStyles(props)};

  @media ${Devices.mobileL} {
    padding: 0 2rem;
    max-width: calc(100vw - 4rem);
  }

  @media ${Devices.tablet} {
    padding: 0 3rem;
    max-width: calc(100vw - ${Sizes.sidePlayerWidthSmaller}px - 6rem);
  }

  @media ${Devices.laptop} and ${Devices.laptopHeightS} {
    max-width: calc(100vw - ${Sizes.sidePlayerWidth}px - 6rem);
  }
`;

const AdditionalCarouselWrapper = styled.div`
  margin-bottom: 2.75rem;
`;

export default HomeContainer;
