import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import ICONS from "../components/iconsImport";
import ImgComponent from "../components/img";
// styles
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const H3 = styled.h3`
  font-family: pacifico;
  font-size: 8rem;
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
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
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  heigth: 40%;
  margin: 6.5vh auto;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    height: 70%;
    align-items: space-between;
  }
`;
// markup
const LinksPage = () => {
  return (
    <Wrapper>
      <H3 data-sal="slide-up" data-sal-duration="400">
        Links
      </H3>
      <Hr />
      <Row data-sal="slide-down" data-sal-duration="400">
        <a
          href="https://github.com/Alokin1112"
          target="_blank"
          rel="noreferrer"
        >
          <ImgComponent img={ICONS.GITHUB} />
        </a>
        <a
          href="https://www.codewars.com/users/Alokin1112"
          target="_blank"
          rel="noreferrer"
        >
          <ImgComponent img={ICONS.CODEWARS} />
        </a>
        <a
          href="https://www.freecodecamp.org/dawidsz"
          target="_blank"
          rel="noreferrer"
        >
          <ImgComponent img={ICONS.FREECODECAMP} />
        </a>
      </Row>
    </Wrapper>
  );
};

export default LinksPage;
