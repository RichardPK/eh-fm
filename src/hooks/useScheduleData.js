import { useState, useEffect, useCallback } from "react";

export const useScheduleData = () => {
  const [airTimeSchedule, setAirtimeSchedule] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);

  const scheduleApiCall = useCallback(() => {
    console.log("schedule API call firing");
    fetch("https://ehfm.airtime.pro/api/week-info")
      .then((response) => response.json())
      .then((data) => setAirtimeSchedule(data));
  }, []);

  useEffect(() => {
    scheduleApiCall();
  }, [scheduleApiCall]);

  const getRemainingShowsToday = (todaysSchedule) => {
    const now = Date.now();
    return todaysSchedule.filter((show) => {
      const startTimeInMs = new Date(show.start_timestamp).getTime();
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
      showsUpNext && setScheduleData(showsUpNext);
    };

    airTimeSchedule && populateSchedule();
  }, [airTimeSchedule]);

  return scheduleData;
};

export default useScheduleData;
