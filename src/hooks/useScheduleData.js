import { useState, useEffect, useCallback } from "react";

export const useScheduleData = () => {
  const [airTimeSchedule, setAirtimeSchedule] = useState(null);
  const [currentAirTimeSchedule, setCurrentAirtimeSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);

  const scheduleApiCall = useCallback(() => {
    fetch("https://ehfm.airtime.pro/api/week-info")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        delete data.AIRTIME_API_VERSION;
        console.log("data", data);
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
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];

    const populateSchedule = () => {
      const daysIndex = new Date().getUTCDay();
      const daysString = days[daysIndex];
      const showsUpNext = getRemainingShowsToday(airTimeSchedule[daysString]);
      // console.log(airTimeSchedule);
      // debugger;
      showsUpNext && setScheduleData(showsUpNext);
    };

    airTimeSchedule && populateSchedule();
  }, [airTimeSchedule]);

  return {
    scheduleData,
    airTimeSchedule,
  };
};

export default useScheduleData;
