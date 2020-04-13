import React, { useRef, useState, useEffect } from 'react';
import { withCookies, useCookies } from 'react-cookie';

const CookieHelper = () => {
  const [cookie, setCookie] = useCookies(['ehfm']);

  const setEhfmCookie = () => {
    setCookie('ehfm', 1);
  };

  const getEhfmCookie = () => {
    return cookie.ehfm;
  };
};

export CookieHelper;
