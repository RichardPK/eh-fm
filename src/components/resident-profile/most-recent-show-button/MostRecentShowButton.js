import React from "react";
import styled from "styled-components";

const MostRecentShowbutton = ({
  mostRecentShow,
  handleMostRecentShowButtonClick,
  date,
  showName
}) => {
  const mapMostRecentShow = () => {
    return (
      <div
        className="resident-pastshow-card"
        onClick={() => handleMostRecentShowButtonClick(mostRecentShow)}
      >
        {/* Font Awesome icon needs replacing */}
        {/* <FontAwesomeIcon icon={faMixcloud} className="faMixcloud" /> */}
        <div className="showname-info-cont">
          <span className="resident-mixcloud-date">{date}</span>
          <span className="resident-mixcloud-showname">{showName}</span>
        </div>
      </div>
    );
  };

  return mapMostRecentShow();
};

export default MostRecentShowbutton;
