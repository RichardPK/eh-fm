import React from 'react';
import MixcloudWidget from './mixcloud-widget/MixcloudWidget';
import CookieConsent from '../../components/cookie-consent/CookieConsent';

const FooterContainer = (props) => {
  return (
    <React.Fragment>
      <CookieConsent />
      <MixcloudWidget />
    </React.Fragment>
  );
};

export default FooterContainer;
