import { useState, useEffect, useCallback } from "react";
import useHourTick from "./useHourTick";

export const useCurrentShowData = () => {
  const [currentShowData, setCurrentShowData] = useState(null);
  const hourTick = useHourTick();

  const currentShowApiCall = useCallback(() => {
    fetch("https://ehfm.airtime.pro/api/live-info")
      .then((response) => response.json())
      .then((data) => setCurrentShowData(data.currentShow[0]));
  }, []);

  useEffect(() => {
    currentShowApiCall();
  }, [currentShowApiCall, hourTick]);

  return currentShowData;
};

export default useCurrentShowData;
