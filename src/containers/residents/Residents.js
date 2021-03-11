import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";
import ResidentListItem from "../../components/resident-list-item/ResidentListItem";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import WidgetMarginStyles from "../../consts/WidgetMarginStyles";

const ResidentsContainer = ({ residentsData }) => {
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);
  const [cookies] = useCookies(["ehfm"]);

  return (
    <React.Fragment>
      <MetaData
        title="Residents | EHFM"
        description="Get to know our presenters and listen back to the archive of previous shows."
        ult="http://www.ehfm.live/residents"
      />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        {residentsData.map((show, index) => {
          return (
            <ResidentListItem
              show={show}
              index={index}
              key={index}
              showTitle={show.data.show_title}
              thumbnailImage={show.data.show_image.url}
              showId={show.uid}
            />
          );
        })}
      </Wrapper>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  padding: 0 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${(props) => WidgetMarginStyles(props)}
`;

export default ResidentsContainer;
