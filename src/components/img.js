import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import Tilt from "react-parallax-tilt";
// styles
const IMWrapper = styled.div`
  width: 18vh;
  height: 18vh;
  transform: rotate(45deg);
  border: 2px solid #001b42;
  &:hover {
    &::before {
      transform: translate(0, 0);
      border: none;
    }
    align-items: center;
  }
  &::before {
    transition: transform 0.5s ease-in-out;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: url(${Star});
    background-size: contain;
    border: 2px solid #001b42;
    transform: translate(6%, 6%);
  }
  &::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;
    background-color: white;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 10vh;
    height: 10vh;
    margin: 3vh auto;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    z-index: 10;
    background: url(${(props) => props.photo}) 6vh 6vh repeat;
    background-size: 22vh;
    transform: rotate(-45deg);
  }
  @media (max-width: 768px) {
    &::after {
      background-size: 14vh;
      background-position: 2.25vh 2.25vh;
    }
  }
`;
// markup
const ImgComponent = ({ img, bgc = Star }) => {
  return (
    <Tilt options={{ max: 1 }}>
      <IMWrapper>
        <Image photo={img}></Image>
      </IMWrapper>
    </Tilt>
  );
};

export default ImgComponent;
