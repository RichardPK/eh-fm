import React from "react";
import styled from "styled-components";

const ResidentProfileSocial = ({ hrefs, type, imgSrcs }) => {
  return (
    <div className="social-icon">
      <a href={hrefs[type]} target="blank">
        <img src={imgSrcs[type]} alt="social profile" />
      </a>
    </div>
  );
};

export default ResidentProfileSocial;
