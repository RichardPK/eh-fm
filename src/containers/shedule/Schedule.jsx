import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles, PagePaddingStyles } from "../../consts/Styles";
import useScheduleData from "../../hooks/useScheduleData";
import ScheduleItem from "../../components/schedule/schedule-item/ScheduleItem";
import { getShowInPrismic } from "../../helpers/PrismicHelper";

const Schedule = ({ residentsData }) => {
  const { airTimeSchedule } = useScheduleData();
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);
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
          {airTimeSchedule && residentsData
            ? Object.keys(airTimeSchedule)
                .filter((key) => key !== "AIRTIME_API_VERSION")
                .map((day, index) => {
                  return (
                    <>
                      <p key={`day-${day}-${index}`}>{day}</p>
                      {airTimeSchedule[day].map((scheduleItemData, jindex) => {
                        const foundShow = getShowInPrismic({
                          residentsData,
                          currentShow: scheduleItemData,
                        });

                        return (
                          <ScheduleItem
                            key={`shedule-item-${jindex}`}
                            showName={scheduleItemData.name}
                            starts={scheduleItemData.starts}
                            foundShow={foundShow}
                          />
                        );
                      })}
                    </>
                  );
                })
            : null}
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
