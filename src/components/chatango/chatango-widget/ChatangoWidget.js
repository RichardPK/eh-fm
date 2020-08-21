import React, { useEffect } from "react";

const ChatangoWidget = ({}) => {
  useEffect(() => {
    if (document.body.clientWidth >= 768) {
      //or other condition you like
      const script = document.createElement("script");
      const chatangoDiv = document.getElementById("chatango-div");
      script.type = "text/javascript";
      script.src = "https://st.chatango.com/js/gz/emb.js";
      // script.dataCfasync = false;
      script.id = "cid0020000257371229541";
      // script.dataid = 'chatango-script';
      script.style.cssText = "width:350px; height:349px;";
      script.async = true;
      script.text =
        '{"handle":"eh-fm","arch":"js","styles":{"a":"00918a","b":100,"c":"FFFFFF","d":"FFFFFF","k":"00918a","l":"00918a","m":"00918a","n":"FFFFFF","p":"10","q":"00918a","r":100,"pos":"bl","cv":1,"cvfnt":"Helvetica Neue, Helvetica, Arial, sans-serif, sans-serif","cvbg":"00918a","cvw":75,"cvh":30 }}';
      chatangoDiv.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default ChatangoWidget;
