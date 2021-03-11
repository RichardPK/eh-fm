import React, { useContext } from "react";
import MixcloudWidget from "./mixcloud-widget/MixcloudWidget";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import CookieConsent from "../../components/cookie-consent/CookieConsent";
import { useCookies } from "react-cookie";

const FooterContainer = () => {
  const { mixcloudWidgetHtml, setMixcloudWidgetHtml } = useContext(
    MixcloudWidgetContext
  );
  const [cookie] = useCookies(["ehfm"]);

  return (
    <React.Fragment>
      {!cookie.ehfm && <CookieConsent />}
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
