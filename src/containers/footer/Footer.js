import React from 'react';
import MixcloudWidget from './mixcloud-widget/MixcloudWidget';
import CookieConsent from '../../components/cookie-consent/CookieConsent';
import Chatango from '../../components/chatango/Chatango';

const FooterContainer = (props) => {
  return (
    <React.Fragment>
      <CookieConsent />
      <MixcloudWidget />
      <Chatango />
    </React.Fragment>
  );
};

export default FooterContainer;
