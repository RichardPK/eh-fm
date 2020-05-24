import React, { useEffect, useState } from 'react';
import CurrentShow from '../../components/current-show/CurrentShow';
import Schedule from '../../components/schedule/Schedule';
import { Helmet } from 'react-helmet';
import Prismic from 'prismic-javascript';
import styled from 'styled-components/macro';
import Colors from '../../consts/Colors';
import Devices from '../../consts/Devices';
import Sizes from '../../consts/Sizes';
import PlaceholderShowImg from '../../assets/images/placeholder-showimg.jpg';
import Carousel from '../../components/carousel/Carousel';

const HomeContainer = (props) => {
  const apiEndpoint = 'https://ehfm.cdn.prismic.io/api/v2';
  const [highlightedCarouselItems, setHighlightedCarouselItems] = useState([]);
  const [secondaryCarouselItems, setSecondaryCarouelItens] = useState([]);

  const SecondaryCarousel = Carousel;
  const PrimaryCarousel = Carousel;

  const getCarouselItems = () => {
    Prismic.api(apiEndpoint).then((api) => {
      api
        .query(Prismic.Predicates.at('document.type', 'home_feature'), {
          pageSize: 100,
          orderings: '[my.show.show_title]'
        })
        .then((response) => {
          if (response) {
            const highlightedFeatureItems = response.results.filter((featuredItem) => {
              return featuredItem.data.highlighted;
            });
            setHighlightedCarouselItems(highlightedFeatureItems);

            const secondaryFeatureItems = response.results.filter((featuredItem) => {
              return !featuredItem.data.highlighted;
            });
            setSecondaryCarouelItens(secondaryFeatureItems);
          }
        });
    });
  };

  useEffect(() => {
    getCarouselItems();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>EH-FM</title>
        <meta name="fragment" content="!" />
        <meta property="og:title" data-react-helmet="true" content="EH-FM" />
        <meta
          name="description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta
          property="og:description"
          data-react-helmet="true"
          content="EH-FM is an Edinburgh-based online radio station, providing a platform for the capital's local artists and broadcasting 24 hours a day."
        />
        <meta property="og:url" data-react-helmet="true" content="https://www.ehfm.live" />
        <meta property="og:image" data-react-helmet="true" content={PlaceholderShowImg} />
        <meta name="twitter:image" data-react-helmet="true" content={PlaceholderShowImg} />
      </Helmet>

      <Wrapper
        mixCloudWidget={props.mixCloudWidget}
        cookiesBannerShowing={props.cookies.get('ehfm') !== '1'}
      >
        <PrimaryCarousel data={highlightedCarouselItems} hierarchy={'primary'}></PrimaryCarousel>
        <SecondaryCarousel
          data={secondaryCarouselItems}
          hierarchy={'secondary'}
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
    ${(props) => (props.cookiesBannerShowing ? '95px' : props.mixCloudWidget ? `123px` : 0)};

  @media ${Devices.tablet} {
    margin: 125px auto
      ${(props) => (props.cookiesBannerShowing ? '70px' : props.mixCloudWidget ? `123px` : 0)};
  }
`;

export default HomeContainer;
