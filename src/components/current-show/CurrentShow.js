import React, { Component } from "react";
import "./CurrentShow.scss";
import PlayPauseButton from "../Player/play-pause-button/PlayPauseButton";
import styled from "styled-components";
import Devices from "../../consts/Devices";
import { Heading4, Heading3, Body } from "../text-elements/index";
import Colors from "../../consts/Colors";

class CurrentShowDetail extends Component {
  constructor(props) {
    super(props);
    this.playClicked = this.playClicked.bind(this);
    this.renderPlayingContainer = this.renderPlayingContainer.bind(this);
    this.findShowUrlInPrismic = this.findShowUrlInPrismic.bind(this);
  }

  returnShowName() {
    let currentShowName = null;
    if (this.props.currentShow !== null) {
      let showData = this.props.currentShow;
      currentShowName = showData.currentShow[0].name;
      let parsedForInvertedCommas = currentShowName.replace(/&#039;/g, "'");
      let parsedForAmpersands = parsedForInvertedCommas.replace(/&amp;/g, "&");
      return parsedForAmpersands;
    }
    return currentShowName;
  }

  findShowUrlInPrismic() {
    let result;
    let toLowerCase;
    const currentShowName = this.returnShowName();
    if (currentShowName) {
      toLowerCase = currentShowName.toLowerCase();
    }
    if (this.props.residents && toLowerCase) {
      const filtered = this.props.residents.filter(resident =>
        toLowerCase.includes(resident.data.show_title.toLowerCase())
      );
      if (filtered.length > 0) {
        result = filtered[0].data.show_image.larger.url;
      }
    }

    return result;
  }

  returnShowImgUrl() {
    let linkedPrismicImg = this.findShowUrlInPrismic();

    if (linkedPrismicImg) {
      return linkedPrismicImg;
    } else {
      let currentShowImgUrl = null;
      if (this.props.currentShow !== null) {
        let showData = this.props.currentShow;
        currentShowImgUrl = showData.currentShow[0].image_path;
      }
      if (currentShowImgUrl === "") {
        currentShowImgUrl = "./placeholder-showimg.jpg";
      }
      return currentShowImgUrl;
    }
  }

  returnShowDescription() {
    let currentShowDescription = null;
    if (this.props.currentShow !== null) {
      let showData = this.props.currentShow;
      currentShowDescription = showData.currentShow[0].description;
      if (currentShowDescription === "") {
        currentShowDescription = "Independent community radio for Edinburgh.";
        return currentShowDescription;
      } else {
        let parsedForInvertedCommas = currentShowDescription.replace(
          /&#039;/g,
          "'"
        );
        let parsedForAmpersands = parsedForInvertedCommas.replace(
          /&amp;/g,
          "&"
        );
        return parsedForAmpersands;
      }
    }
  }

  renderPlayingContainer() {
    if (this.props.playing === true) {
      return "currentshow-playbutton-container-white";
    } else {
      return "currentshow-playbutton-container";
    }
  }

  playClicked() {
    this.props.handlePlayPauseClicked();
  }

  render() {
    return (
      <Wrapper>
        <Heading4Component>Live now</Heading4Component>
        <WhiteWrapper>
          <ImageWrapper>
            <CurrentShowImage
              className="currentshow-img"
              src={this.returnShowImgUrl()}
              alt="current live show"
            />
          </ImageWrapper>
          <InfoWrapper>
            <NameWrapper>
              <ShowName>{this.returnShowName()}</ShowName>
            </NameWrapper>
            <div
              className={this.renderPlayingContainer()}
              onClick={this.playClicked}
            >
              <p>Listen now</p>
              <PlayPauseButton
                playingTrueFalse={this.props.playing}
                playClicked={this.playClicked}
              />
            </div>
            <DescriptionWrapper>
              <ShowDescription>{this.returnShowDescription()}</ShowDescription>
            </DescriptionWrapper>
          </InfoWrapper>
        </WhiteWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 85vw;
  margin: 0px 10px 0px 10px;
  margin-bottom: 40px;

  @media ${Devices.tablet} {
    display: flex;
    flex-direction: column;
    width: 41vw;
    margin: 0px 10px 0px 20px;
  }
`;

const Heading4Component = styled(Heading4)`
  color: ${Colors.notQuiteBlack};
  margin: 10px 20px 10px 10px;
`;

const WhiteWrapper = styled.div`
  padding: 4px 4px 1px;
  border-radius: 5px;
  position: relative;
  color: white;
  background-color: white;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: inherit;
  z-index: -1;
`;

const CurrentShowImage = styled.img`
  height: auto;
  margin: 0px 0px 0px 0px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 15px;
  bottom: 15px;

  @media ${Devices.mobileL} {
    margin-right: 16px;
  }
`;

const ShowName = styled(Heading3)``;

const NameWrapper = styled.div`
  display: inline-block;
  background-color: ${Colors.notquiteBlack80Transparent};
  padding: 4px;
`;

const DescriptionWrapper = styled.div`
  display: inline-block;
  background-color: ${Colors.notquiteBlack80Transparent};
  padding: 4px;
  margin-right: 10%;
  margin-top: 2rem;

  @media ${Devices.tablet} {
    margin-right: 25%;
  }
`;

const ShowDescription = styled(Body)``;

export default CurrentShowDetail;
