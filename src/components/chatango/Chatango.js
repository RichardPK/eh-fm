import React, { useEffect } from 'react';
import styled from 'styled-components';

const Chatango = ({}) => {
  useEffect(() => {
    const script = document.createElement('script');
    const body = document.body;
    script.type = 'text/javascript';
    script.src = 'https://st.chatango.com/js/gz/emb.js';
    script.id = 'cid0020000249692730644';
    script.style.cssText = 'width:250px; height:349px;';
    script.async = true;
    script.text =
      '{"handle":"eh-fm","arch":"js","styles":{"a":"00918a","b":100,"c":"FFFFFF","d":"FFFFFF","k":"00918a","l":"00918a","m":"00918a","n":"FFFFFF","p":"10","q":"00918a","r":100,"t":0,"pos":"br","cv":1,"cvfnt":"Helvetica Neue, Helvetica, Arial, sans-serif, sans-serif","cvbg":"00918a","cvw":75,"cvh":30 }}';

    body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script)
    // }
  });

  return null;
};

const Wrapper = styled.div``;

export default Chatango;
