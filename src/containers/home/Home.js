import React, { useEffect, useState } from "react";
import Prismic from "prismic-javascript";
import styled from "styled-components/macro";
import Devices from "../../consts/Devices";
import Sizes from "../../consts/Sizes";
import PlaceholderShowImg from "../../assets/images/placeholder-showimg.jpg";
import Carousel from "../../components/carousel/Carousel";
import MetaData from "../../components/metadata/MetaData";

const HomeContainer = (props) => {
  const apiEndpoint = "https://ehfm.cdn.prismic.io/api/v2";
  const [highlightedCarouselItems, setHighlightedCarouselItems] = useState([]);
  const [secondaryCarouselItems, setSecondaryCarouselItems] = useState([]);

  const SecondaryCarousel = Carousel;
  const PrimaryCarousel = Carousel;

  const getCarouselItems = () => {
    Prismic.api(apiEndpoint).then((api) => {
      api
        .query(Prismic.Predicates.at("document.type", "home_feature"), {
          pageSize: 100,
          orderings: "[my.show.show_title]",
        })
        .then((response) => {
          if (response) {
            setHighlightedItems(response);
            setSecondaryItems(response);
          }
        });
    });
  };

  const setHighlightedItems = (response) => {
    const highlightedFeatureItems = response.results.filter((featuredItem) => {
      return featuredItem.data.highlighted;
    });
    setHighlightedCarouselItems(
      reverseChronologicalSort(highlightedFeatureItems)
    );
  };

  const setSecondaryItems = (response) => {
    const secondaryFeatureItems = response.results.filter((featuredItem) => {
      return !featuredItem.data.highlighted;
    });
    setSecondaryCarouselItems(reverseChronologicalSort(secondaryFeatureItems));
  };

  const reverseChronologicalSort = (array) => {
    return array.sort((item1, item2) => {
      const firstDate = new Date(item1.first_publication_date);
      const secondDate = new Date(item2.first_publication_date);
      return secondDate - firstDate;
    });
  };

  useEffect(() => {
    // Find out why this component is re-rendering when play is changing.
    // Debug issue with carousel hover.
    getCarouselItems();
  }, []);

  return (
    <React.Fragment>
      <MetaData
        title={"EH-FM | Edinburgh Community Radio broadcast"}
        url={"https://www.ehfm.live"}
        imageSrc={PlaceholderShowImg}
        description={
          "EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        }
      />

      <Wrapper
        mixCloudWidget={props.mixCloudWidget}
        cookiesBannerShowing={props.cookies.get("ehfm") !== "1"}
      >
        <PrimaryCarousel
          data={highlightedCarouselItems}
          hierarchy={"primary"}
        ></PrimaryCarousel>
        <SecondaryCarousel
          data={secondaryCarouselItems}
          hierarchy={"secondary"}
        ></SecondaryCarousel>
        {/* <CurrentShow
          currentShow={props.currentShow}
          residents={props.residents}
          playing={props.playing}
          handlePlayPauseClicked={props.handlePlayPauseClicked}
        />

        <Schedule
          nextSevenDaysSchedule={props.nextSevenDaysSchedule}
          currentDay={props.currentDay}
        /> */}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  /* max-width: ${Sizes.maxInnerWidth}; */
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 150px auto
    ${(props) =>
      props.cookiesBannerShowing ? "95px" : props.mixCloudWidget ? `123px` : 0};

  @media ${Devices.tablet} {
    margin: 125px auto
      ${(props) =>
        props.cookiesBannerShowing
          ? "70px"
          : props.mixCloudWidget
          ? `123px`
          : 0};
  }
`;

export default HomeContainer;
