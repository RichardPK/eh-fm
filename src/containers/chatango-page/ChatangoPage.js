import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ChatangoWidget from "../../components/chatango/chatango-widget/ChatangoWidget";

const FullHeightDiv = styled.div`
  height: 100vh;
`;

const ChatangoHtml = () => {
  return (
    <>
      <Helmet>
        <title>Chat | EHFM</title>
        <meta name="fragment" content="!" />
        <meta
          property="og:title"
          data-react-helmet="true"
          content="Chat | EHFM"
        />
        <meta
          name="description"
          data-react-helmet="true"
          content="EHFM Chat - Through the wonders of the internet connect directly to other listeners, and the hosts!"
        />
        <meta
          property="og:description"
          data-react-helmet="true"
          content="EHFM Chat - Through the wonders of the internet connect directly to other listeners, and the hosts!"
        />
        <meta
          property="og:url"
          data-react-helmet="true"
          content={window.location.href}
        />
      </Helmet>
      <FullHeightDiv id="chatango-div">
        <ChatangoWidget />
      </FullHeightDiv>
    </>
  );
};

export default ChatangoHtml;
