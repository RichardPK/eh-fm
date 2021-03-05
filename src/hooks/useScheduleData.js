import { useState, useEffect, useCallback } from "react";

export const useScheduleData = () => {
  const [scheduleData, setScheduleData] = useState(null);

  const scheduleApiCall = useCallback(() => {
    console.log("schedule API call firing");
    fetch("https://ehfm.airtime.pro/api/week-info")
      .then((response) => response.json())
      .then((data) => setScheduleData(data));
  }, []);

  useEffect(() => {
    scheduleApiCall();
  }, [scheduleApiCall]);

  useEffect(() => {}, [scheduleData]);

  return scheduleData;
};

export default useScheduleData;
