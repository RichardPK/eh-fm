import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles, PagePaddingStyles } from "../../consts/Styles";

const Schedule = ({ scheduleData }) => {
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);
  console.log('mixcloudWidgetHtml', mixcloudWidgetHtml);
  const [cookies] = useCookies(["ehfm"]);

  return (
    <>
      <MetaData
        title="Schedule | EHFM"
        description="See what we are about to play next."
        url="https://www.ehfm.live/schedule"
      />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        <ScheduleData>
            {scheduleData.map((show, index) => {
            return (
                <li>{JSON.stringify(show)}</li>
            );
            })}
        </ScheduleData>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${(props) => WidgetMarginStyles(props)}
  ${PagePaddingStyles}
`;

const ScheduleData = styled.ul`
  display: block;
  width: 100%;
`;

export default Schedule;
