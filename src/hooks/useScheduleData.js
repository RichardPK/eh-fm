import { useState, useEffect, useCallback } from "react";
import moment from "moment";

export const useScheduleData = () => {
  const [airTimeSchedule, setAirtimeSchedule] = useState(null);
  const [fiveDayAirTimeSchedule, setFiveDayAirtimeSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);

  const scheduleApiCall = useCallback(() => {
    fetch("https://ehfm.airtime.pro/api/week-info")
      .then((response) => response.json())
      .then((data) => {
        delete data.AIRTIME_API_VERSION;
        setAirtimeSchedule(data);
      });
  }, []);

  useEffect(() => {
    scheduleApiCall();
  }, [scheduleApiCall]);

  const getRemainingShowsToday = (todaysSchedule) => {
    const now = Date.now();
    return todaysSchedule.filter((show) => {
      const browserAgnosticShowTimestamp = show.start_timestamp.replace(
        / /g,
        "T"
      );
      const startTimeInMs = new Date(browserAgnosticShowTimestamp).getTime();
      return startTimeInMs > now;
    });
  };

  useEffect(() => {
    const jsDays = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const twoWeeks = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
      "nextmonday",
      "nexttuesday",
      "nextwednesday",
      "nextthursday",
      "nextfriday",
      "nextsaturday",
      "nextsunday",
    ];

    const populateTodaysSchedule = () => {
      const daysIndex = new Date().getUTCDay();
      const daysString = jsDays[daysIndex];
      const showsUpNext = getRemainingShowsToday(airTimeSchedule[daysString]);
      showsUpNext && setScheduleData(showsUpNext);
    };

    const populateFiveDaysSchedule = () => {
      const daysIndex = new Date().getUTCDay();
      const daysString = jsDays[daysIndex];
      const scheduledDaysIndex = twoWeeks.findIndex(
        (day) => day === daysString
      );
      const fiveDays = twoWeeks.splice(scheduledDaysIndex, 5);
      const todaysShows = getRemainingShowsToday(airTimeSchedule[daysString]);
      const fiveDayAirTimeSchedule = {};
      fiveDays.forEach((day, index) => {
        let date = moment().add(index, "days");
        let formattedDate = moment(date).format("DD MMM");
        fiveDayAirTimeSchedule[day] = {
          day,
          date: day.toUpperCase() + ", " + formattedDate,
          shows: airTimeSchedule[day],
        };
      });
      todaysShows && setFiveDayAirtimeSchedule(fiveDayAirTimeSchedule);
    };

    airTimeSchedule && populateTodaysSchedule();
    airTimeSchedule && populateFiveDaysSchedule();
  }, [airTimeSchedule]);

  return {
    scheduleData,
    airTimeSchedule,
    fiveDayAirTimeSchedule,
  };
};

export default useScheduleData;
