import React, { useContext } from "react";
import MixcloudWidget from "./mixcloud-widget/MixcloudWidget";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import CookieConsent from "../../components/cookie-consent/CookieConsent";

const FooterContainer = () => {
  const { mixcloudWidgetHtml, setMixcloudWidgetHtml } = useContext(
    MixcloudWidgetContext
  );

  return (
    <React.Fragment>
      <CookieConsent />
      {mixcloudWidgetHtml && (
        <MixcloudWidget
          mixcloudWidgetHtml={mixcloudWidgetHtml}
          setMixcloudWidgetHtml={setMixcloudWidgetHtml}
        />
      )}
    </React.Fragment>
  );
};

export default FooterContainer;
