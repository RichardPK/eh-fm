import React, { useEffect } from "react";

const ChatangoWidget = ({}) => {
  useEffect(() => {
    if (document.body.clientWidth >= 768) {
      //or other condition you like
      const script = document.createElement("script");
      const chatangoDiv = document.getElementById("app");
      script.type = "text/javascript";
      script.src = "https://st.chatango.com/js/gz/emb.js";
      // script.dataCfasync = false;
      script.id = "cid0020000257371229541";
      // script.dataid = 'chatango-script';
      script.style.cssText = "width:100%; height:500px;";
      script.async = true;
      script.text =
        '{"handle":"eh-fm","arch":"js","styles":{"a":"CC0000","b":100,"c":"FFFFFF","d":"FFFFFF","k":"CC0000","l":"CC0000","m":"CC0000","n":"FFFFFF","p":"10","q":"CC0000","r":100}}';
      chatangoDiv.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default ChatangoWidget;
