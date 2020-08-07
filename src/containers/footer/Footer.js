import React from "react";
import MixcloudWidget from "./mixcloud-widget/MixcloudWidget";
import CookieConsent from "../../components/cookie-consent/CookieConsent";
import ChatangoWidget from "../../components/chatango/chatango-widget/ChatangoWidget";

const FooterContainer = (props) => {
  return (
    <React.Fragment>
      <CookieConsent />
      <MixcloudWidget />
      {/* Comment out during development */}
      {/* <ChatangoWidget /> */}
    </React.Fragment>
  );
};

export default FooterContainer;
