import { useState, useEffect, useCallback } from "react";
import { hydrate } from "react-dom";
import useHourTick from "./useHourTick";

export const useAirtime = () => {
  const [currentShowData, setCurrentShowData] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);
  const hourTick = useHourTick();

  const currentShowApiCall = useCallback(() => {
    console.log("current show API call firing");
    fetch("https://ehfm.airtime.pro/api/live-info")
      .then((response) => response.json())
      .then((data) => setCurrentShowData(data.currentShow[0]));
  }, []);

  const scheduleApiCall = useCallback(() => {
    console.log("schedule API call firing");
    fetch("https://ehfm.airtime.pro/api/week-info")
      .then((response) => response.json())
      .then((data) => setScheduleData(data));
  }, []);

  useEffect(() => {
    scheduleApiCall();
  }, [scheduleApiCall]);

  useEffect(() => {
    currentShowApiCall();
    console.log(hourTick);
  }, [currentShowApiCall, hourTick]);

  return { currentShowData, scheduleData };
};

export default useAirtime;
