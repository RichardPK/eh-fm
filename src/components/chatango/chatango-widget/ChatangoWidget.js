import React, { useEffect } from "react";

const ChatangoWidget = ({}) => {
  useEffect(() => {
    //or other condition you like
    const script = document.createElement("script");
    const chatangoDiv = document.getElementById("chatango-div");
    script.type = "text/javascript";
    script.src = "https://st.chatango.com/js/gz/emb.js";
    // script.dataCfasync = false;
    script.id = "cid0020000257371229541";
    // script.dataid = 'chatango-script';
    script.style.cssText = "width:100%; height:100%;";
    script.async = true;
    script.text =
      '{"handle":"eh-fm","arch":"js","styles":{"a":"00B398","b":100,"c":"FFFFFF","d":"FFFFFF","e":"ffffff","k":"00B398","l":"00B398","m":"00B398","n":"FFFFFF","p":"10","q":"00B398","r":100,"cnrs":"0.21","fwtickm":1}}';
    chatangoDiv.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatangoWidget;
