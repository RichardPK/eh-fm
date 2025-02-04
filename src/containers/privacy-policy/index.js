import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useCookies } from "react-cookie";
import Devices from "../../consts/Devices";
import MetaData from "../../components/metadata/MetaData";
import { PagePaddingStyles } from "../../consts/Styles";
import { MixcloudWidgetContext } from "../../contexts/MixcloudWidgetContext";
import { WidgetMarginStyles } from "../../consts/Styles";

const Wrapper = styled.div`
  ${PagePaddingStyles}
  ${(props) => WidgetMarginStyles(props)};

  @media ${Devices.tablet} {
    max-width: 70ch;
    margin-left: 0;
  }

  a {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = ({ pageData }) => {
  const [cookies] = useCookies(["ehfm"]);
  const { mixcloudWidgetHtml } = useContext(MixcloudWidgetContext);

  return (
    <>
      <MetaData
        title={"Privacy Policy | EHFM"}
        url="https://www.ehfm.live/groundfloor"
        description=""
        imageWidth="800px"
        imageHeight="800px"
      />
      <Wrapper
        mixcloudWidgetHtml={mixcloudWidgetHtml}
        cookiesBannerShowing={!cookies.ehfm}
      >
        <h1>EHFM Customer Privacy Notice</h1>

        <p>Registered name: EH-FM Radio C.I.C.</p>
        <p>This privacy notice tells you what to expect us to do with your personal information.</p>
        <ul>
          <li><p>Contact details</p>
          </li>
          <li><p>What information we collect, use, and why</p>
          </li>
          <li><p>Lawful bases and data protection rights</p>
          </li>
          <li><p>Where we get personal information from</p>
          </li>
          <li><p>How long we keep information</p>
          </li>
          <li><p>How to complain</p>
          </li>
        </ul>
        <br />

        <h2>Contact details</h2>
        <p><strong>Email</strong></p>
        <p><a href="mailto:hello@ehfm.live">hello@ehfm.live</a></p>
        <p><strong><em>What information we collect, use, and why</em></strong></p>
        <p>We collect or use the following information for <strong>service updates or marketing purposes</strong>:</p>
        <ul>
          <li><p>Location data</p>
          </li>
          <li><p>Website and app user journey information</p>
          </li>
        </ul>
        <br />

        <h2>Lawful bases and data protection rights</h2>
        <p>Under UK data protection law, we must have a “lawful basis” for collecting and using your personal information. There is a list of possible lawful bases in the UK GDPR. You can find out more about lawful bases on the ICO’s website.</p>
        <p>Which lawful basis we rely on may affect your data protection rights which are in brief set out below. You can find out more about your data protection rights and the exemptions which may apply on the ICO’s website:</p>
        <ul>
          <li><strong>Your right of access</strong> - You have the right to ask us for copies of your personal information. You can request other information such as details about where we get personal information from and who we share personal information with. There are some exemptions which means you may not receive all the information you ask for. You can read more about this right here.</li>
          <li><strong>Your right to rectification</strong> - You have the right to ask us to correct or delete personal information you think is inaccurate or incomplete. You can read more about this right here.</li>
          <li><strong>Your right to erasure</strong> - You have the right to ask us to delete your personal information. You can read more about this right here.</li>
          <li><strong>Your right to restriction of processing</strong> - You have the right to ask us to limit how we can use your personal information. You can read more about this right here.</li>
          <li><strong>Your right to object to processing</strong> - You have the right to object to the processing of your personal data. You can read more about this right here.</li>
          <li><strong>Your right to data portability</strong> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you. You can read more about this right here.</li>
          <li><strong>Your right to withdraw consent</strong> – When we use consent as our lawful basis you have the right to withdraw your consent at any time. You can read more about this right here.</li>
        </ul>
        <p>If you make a request, we must respond to you without undue delay and in any event within one month.</p>
        <p>To make a data protection rights request, please contact us using the contact details at the top of this privacy notice.</p>

        <p><strong>Our lawful bases for the collection and use of your data</strong></p>
        <p>Our lawful bases for collecting or using personal information for <strong>service updates or marketing purposes</strong> are:</p>
        <ul>
          <li>Consent - we have permission from you after we gave you all the relevant information. All of your data protection rights may apply, except the right to object. To be clear, you do have the right to withdraw your consent at any time.</li>
        </ul>
        <p><strong><em>Where we get personal information from</em></strong></p>
        <ul>
          <li>Directly from you</li>
        </ul>
        <br />

        <h2>How long we keep information</h2>
        <p>The only data we retain is through Google analytics, who hold information for 26 months. </p>
        <br />

        <h2>How to complain</h2>
        <p>If you have any concerns about our use of your personal data, you can make a complaint to us using the contact details at the top of this privacy notice.</p>
        <p>If you remain unhappy with how we’ve used your data after raising a complaint with us, you can also complain to the ICO.</p>
        <p>The ICO’s address:</p>
        <p>Information Commissioner’s Office<br />Wycliffe House<br />Water Lane<br />Wilmslow<br />Cheshire<br />SK9 5AF</p>
        <p>Helpline number: 0303 123 1113</p>
        <p>Website: <a href="https://www.ico.org.uk/make-a-complaint">https://www.ico.org.uk/make-a-complaint</a></p>
        <br />

        <h2>Last updated</h2>
        <p>21 January 2025</p>
        <br />
        <br />
      </Wrapper>
    </>
  );
};

export default PrivacyPolicy;
