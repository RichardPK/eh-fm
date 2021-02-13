import React from "react";
import htmlFile from "./ChatangoHtml";
import ChatangoWidget from "../../components/chatango/chatango-widget/ChatangoWidget";

const ChatangoHtml = () => {
  // return <div dangerouslySetInnerHTML={{ __html: htmlFile }} />;
  return <ChatangoWidget />;
};

export default ChatangoHtml;
