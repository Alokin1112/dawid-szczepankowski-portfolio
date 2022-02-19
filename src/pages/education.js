import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import Profilowe from "../images/profilowe.jpeg";
import Tilt from "react-parallax-tilt";
// styles
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-flow: Row nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 60vw;
  height: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100vw;
    height: 60%;
  }
`;
const ImageWrapper = styled(ContentWrapper)`
  width: 40vw;
`;
const H3 = styled.h3`
  font-family: pacifico;
  font-size: 8rem;
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 1.2em;
  letter-spacing: 0;
  @media (max-width: 768px) {
    font-size: 6vh;
  }
`;
const Hr = styled.hr`
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  width: 40vw;
  margin: 0 auto 2.5vh;
  padding: 0;
`;
const P = styled.div`
  font-size: 1.5em;
  width: 50vw;
  text-align: center;
  font-family: "Open Sans";
  font-weight: 800;
  color: #767676;
  margin: 0.5em auto;
  &::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: #001b42;
    border: 1ps solid #001b42;
  }
  & ul {
    list-style-type: none;
    & li::before {
      content: "-";
      margin-right: 3px;
    }
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const IMWrapper = styled.div`
  width: 20vw;
  height: 20vw;
  transform: rotate(45deg);
  border: 2px solid #001b42;
  z-index: 5;
  &:hover {
    &::before {
      transform: translate(0, 0);
      border: none;
    }
  }
  &::before {
    transition: transform 0.5s ease-in-out;
    z-index: 0;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${Star});
    background-size: contain;
    border: 2px solid #001b42;
    transform: translate(6%, 6%);
  }
  @media (max-width: 768px) {
    width: 25vw;
    height: 25vw;
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
    z-index: 2;
    background: url(${Profilowe}) 8vw 8vw repeat;
    background-size: 25vw;
    transform: rotate(-45deg);
  }
  @media (max-width: 768px) {
    &::after {
      background-size: 30vw;
      background-position: 10vw 10vw;
    }
  }
`;
// markup
const EducationPage = () => {
  return (
    <Wrapper>
      <ContentWrapper data-sal="slide-right" data-sal-duration="400">
        <H3>Education</H3>
        <Hr />
        <P>
          Student of Computer Science at the Warsaw University of Technology
        </P>
        <P>
          Graduated with honors from the High School of Maria Konopnicka in
          Legionowo, IT Profile
        </P>
        <P>
          Completed freeCodeCamp Certificates:
          <ul>
            <li>JavaScript Algorithms and Data Structures </li>
            <li>Responsive Web Design</li>
            <li>Scientific Computing with Python</li>
          </ul>
        </P>
      </ContentWrapper>
      <ImageWrapper data-sal="slide-left" data-sal-duration="400">
        <Tilt options={{ max: 20 }}>
          <IMWrapper>
            <Image className="Tilt-inner"></Image>
          </IMWrapper>
        </Tilt>
      </ImageWrapper>
    </Wrapper>
  );
};

export default EducationPage;
