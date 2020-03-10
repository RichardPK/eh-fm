import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = ({ url }) => {
  useEffect(() => {
    ReactGA.initialize('UA-122943131-1');
  }, []);
  useEffect(() => {
    ReactGA.pageview(url);
  }, [url]);

  return <React.Fragment />;
};

export default Analytics;
