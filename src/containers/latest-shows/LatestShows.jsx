import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";
import ResidentListItem from "../../components/resident-list-item/ResidentListItem";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles, PagePaddingStyles } from "../../consts/Styles";

const LatestShows = ({ mixcloudFeed }) => {
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);
  const [cookies] = useCookies(["ehfm"]);
  console.log("mixcloudFeed", mixcloudFeed);

  const latest10 = mixcloudFeed
    .sort(
      (showA, showB) =>
        new Date(showB.created_time) - new Date(showA.created_time)
    )
    .slice(0, 10);

  // console.log("latest10", latest10);
  // console.log("latestUploads", latestUploads);
  return (
    <React.Fragment>
      <MetaData
        title="Latest shows | EHFM"
        description="The latest shows added to the EHFM radio, updated every day."
        url="https://www.ehfm.live/latest-shows"
      />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        {latest10.map(({ cloudcasts }, index) => {
          const { name, slug, pictures } = cloudcasts[0];
          const slugArray = slug.split("-");
          slugArray.pop();

          return (
            <ResidentListItem
              index={index}
              key={index}
              showTitle={name}
              thumbnailImage={pictures["640wx640h"]}
              showId={slugArray.join("-")}
            />
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${(props) => WidgetMarginStyles(props)}
  ${PagePaddingStyles}
`;

export default LatestShows;
