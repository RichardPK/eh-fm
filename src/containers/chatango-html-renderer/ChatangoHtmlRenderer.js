import React from "react";
import htmlFile from "./ChatangoHtml";

const ChatangoHtml = () => {
  return <div dangerouslySetInnerHTML={{ __html: htmlFile }} />;
};

export default ChatangoHtml;
