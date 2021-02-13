import React from "react";
import styled from "styled-components";
import ChatangoWidget from "../../components/chatango/chatango-widget/ChatangoWidget";

const FullHeightDiv = styled.div`
  height: 100vh;
`;

const ChatangoHtml = () => {
  return (
    <FullHeightDiv id="chatango-div">
      <ChatangoWidget />
    </FullHeightDiv>
  );
};

export default ChatangoHtml;
