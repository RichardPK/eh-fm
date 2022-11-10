import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import MetaData from "../../components/metadata/MetaData";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles, PagePaddingStyles } from "../../consts/Styles";
import useScheduleData from "../../hooks/useScheduleData";
import ScheduleItem from "../../components/schedule/schedule-item/ScheduleItem";
import { getShowInPrismic } from "../../helpers/PrismicHelper";
import Colors from "../../consts/Colors";
import moment from "moment";

const Schedule = ({ residentsData, currentShow }) => {
  const { fiveDayAirTimeSchedule } = useScheduleData();
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
          {fiveDayAirTimeSchedule && residentsData
            ? Object.keys(fiveDayAirTimeSchedule).map((day, i) => {
                return (
                  <>
                    <Name key={`day-${day}-${i}`}>
                      {fiveDayAirTimeSchedule[day].date.split("NEXT").pop()}
                    </Name>
                    {fiveDayAirTimeSchedule[day].shows.map(
                      (scheduleItemData, j) => {
                        const foundShow = getShowInPrismic({
                          residentsData,
                          currentShow: scheduleItemData,
                        });

                        return (
                          <ScheduleItem
                            key={`shedule-item-${j}`}
                            showName={scheduleItemData.name}
                            starts={scheduleItemData.starts}
                            foundShow={foundShow}
                            playing={
                              moment().isBetween(
                                new Date(scheduleItemData.starts),
                                new Date(scheduleItemData.ends)
                              ) && scheduleItemData.name === currentShow.name
                            }
                          />
                        );
                      }
                    )}
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

const Name = styled.p`
  color: ${() => Colors.ehfmPrimary()};
  font-weight: 500;
`;

export default Schedule;
