import React from "react";
import styled from "styled-components";
import ChatangoWidget from "../../components/chatango/chatango-widget/ChatangoWidget";
import MetaData from "../../components/metadata/MetaData";

const FullHeightDiv = styled.div`
  height: 100vh;
`;

const ChatangoHtml = () => {
  return (
    <>
      <MetaData
        title="Chat | EHFM"
        description="EHFM Chat - Through the wonders of the internet connect directly to other listeners, and the hosts!"
      />
      <FullHeightDiv id="chatango-div">
        <ChatangoWidget />
      </FullHeightDiv>
    </>
  );
};

export default ChatangoHtml;
