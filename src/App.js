import React, { useState, useEffect } from "react";
import Main from "./containers/main/Main";
import useAbout from "./hooks/useAbout";

export const App = () => {
  // const aboutPageData = useAbout();
  // const dataFetchingFinished = Boolean(aboutPageData);

  // return dataFetchingFinished && <Main aboutPageData={aboutPageData} />;
  return <Main />;
};

export default App;
