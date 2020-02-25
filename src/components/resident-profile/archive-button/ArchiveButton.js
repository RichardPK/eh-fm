import React from "react";
import styled from "styled-components";
import Colors from "../../../consts/Colors";

const ArchiveButton = ({ handleArchiveButtonClick }) => {
  return (
    <Wrapper onClick={() => handleArchiveButtonClick()}>
      <h1>Archive</h1>
      {/* Font Awesome icon needs replacing */}
      {/* <FontAwesomeIcon icon={faChevronRight} /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${Colors.ehfmPrimary};
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  min-width: 102px;
`;

export default ArchiveButton;
