import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Colors from "../../consts/Colors";
import Devices from "../../consts/Devices";
import { Cta } from "../text-elements/index";

const ResidentListItem = (props) => {
  return (
    <React.Fragment>
      <Link to={`/residents/${props.showId}`}>
        <Wrapper>
          <ImageWrapper>
            <ShowImage src={props.thumbnailImage} alt="show presenters" />
          </ImageWrapper>
          <ShowTitle>{props.showTitle}</ShowTitle>
        </Wrapper>
      </Link>
    </React.Fragment>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 265px;
  padding: 5px 5px 4px 5px;
  margin: 15px 5px;
  background: white;
  border-bottom: 2px solid ${Colors.notQuiteBlack};
  height: 190px;
  width: 70vw;

  @media ${Devices.mobileL} {
    height: 140px;
    width: 30vw;
    margin: 15px 10px 15px 15px;
  }

  @media ${Devices.tablet} {
    height: 190px;
    width: 20vw;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  overflow: hidden;
  transition: all, 0.2s ease-out;

  @media ${Devices.tablet} {
    &:hover {
      img {
        opacity: 0.8;
      }
    }
  }
`;

const ShowImage = styled.img`
  width: auto;
  height: 265px;
  margin: 0px 0px 0px 0px;
  opacity: 1;
  transition: opacity, 0.2s ease-out;
`;

const ShowTitle = styled(Cta)`
  padding-top: 15px;
  color: ${Colors.notQuiteBlack};
  font-weight: normal;
  letter-spacing: 1px;
`;

export default ResidentListItem;
