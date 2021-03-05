import React from "react";
import Main from "./containers/main/Main";
import usePrismicData from "./hooks/usePrismicData";
import useCurrentShowData from "./hooks/useCurrentShowData";
import useScheduleData from "./hooks/useScheduleData";
import { PlayContext } from "./contexts/PlayContext";

export const App = () => {
  const { aboutPageData, supportPageData } = usePrismicData();
  const currentShowData = useCurrentShowData();
  const scheduleData = useScheduleData();

  const dataFetchingFinished = Boolean(
    aboutPageData && supportPageData && currentShowData
  );

  return (
    dataFetchingFinished && (
      <PlayContext.Provider value={"hello from context"}>
        <Main
          aboutPageData={aboutPageData}
          supportPageData={supportPageData}
          currentShowData={currentShowData}
          scheduleData={scheduleData}
        />
      </PlayContext.Provider>
    )
  );
};

export default App;
