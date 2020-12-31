import React from "react";
import styled from "styled-components/macro";
import Colors from "../../consts/Colors";

const Confetti = () => {
  return (
    <Wrapper>
      <FixedWrapper>
        <ConfettiWrapper>
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
          <div className="confetti" />
        </ConfettiWrapper>
      </FixedWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FixedWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
`;

const ConfettiWrapper = styled.div`
  .confetti {
    width: 15px;
    height: 15px;
    background-color: #f2d74e;
    position: absolute;
    top: 0%;
    left: 0%;
    animation: confetti 5s ease-in-out -2s infinite;
    transform-origin: left top;
  }
  .confetti:nth-child(1) {
    background-color: #f2d74e;
    left: -50%;
    animation-delay: 0;
  }
  .confetti:nth-child(2) {
    background-color: #95c3de;
    left: -10%;
    animation-delay: -5s;
  }
  .confetti:nth-child(3) {
    background-color: #ff9a91;
    left: 15%;
    animation-delay: -3s;
  }
  .confetti:nth-child(4) {
    background-color: ${Colors.ehfmPrimary()};
    left: -20%;
    animation-delay: -2.5s;
  }
  .confetti:nth-child(5) {
    background-color: #95c3de;
    left: 50%;
    animation-delay: -4s;
  }
  .confetti:nth-child(6) {
    background-color: #ff9a91;
    left: 30%;
    animation-delay: -6s;
  }
  .confetti:nth-child(7) {
    background-color: ${Colors.ehfmPrimary()};
    left: 35%;
    animation-delay: -1.5s;
  }
  .confetti:nth-child(8) {
    background-color: #95c3de;
    left: 40%;
    animation-delay: -2s;
  }
  .confetti:nth-child(9) {
    background-color: #ff9a91;
    left: 45%;
    animation-delay: -3.5s;
  }
  .confetti:nth-child(10) {
    background-color: #f2d74e;
    left: 36%;
    animation-delay: -2.5s;
  }

  .confetti:nth-child(11) {
    background-color: ${Colors.ehfmPrimary()};
    left: 55%;
    animation-delay: -1.8s;
  }
  .confetti:nth-child(13) {
    background-color: ${Colors.ehfmPrimary()};
    left: 65%;
    animation-delay: -4.2s;
  }
  .confetti:nth-child(14) {
    background-color: ${Colors.ehfmPrimary()};
    left: 70%;
    animation-delay: -3.2s;
  }
  .confetti:nth-child(15) {
    background-color: #f2d74e;
    left: 80%;
    animation-delay: -1.4s;
  }
  .confetti:nth-child(16) {
    background-color: #f2d74e;
    left: 85%;
    animation-delay: -2.1s;
  }
  .confetti:nth-child(17) {
    background-color: ${Colors.ehfmPrimary()};
    left: 95%;
    animation-delay: -3.2s;
  }

  @keyframes confetti {
    0% {
      transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
    }
    25% {
      transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
    }
    50% {
      transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
    }
    75% {
      transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
    }
    100% {
      transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
    }
  }
`;

export default Confetti;
