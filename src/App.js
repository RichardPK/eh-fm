import React from "react";
import Main from "./containers/main/Main";
import usePrismic from "./hooks/usePrismic";
import useAirtime from "./hooks/useAirtime";
import { PlayContext } from "./contexts/PlayContext";

export const App = () => {
  const { aboutPageData, supportPageData } = usePrismic();
  const { currentShowData, scheduleData } = useAirtime();

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
