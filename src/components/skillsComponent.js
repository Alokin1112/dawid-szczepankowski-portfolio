import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import ImgComponent from "./img";
// styles
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;
const H3 = styled.h3`
  font-family: pacifico;
  font-size: 6rem;
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 2em;
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
  width: 30vw;
  margin: 0 auto 2.5vh;
  padding: 0;
  @media (max-width: 768px) {
    width: 75%;
  }
`;
const RowsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }
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
const SkillsComponent = ({ header, images }) => {
  return (
    <Wrapper>
      <H3 data-sal="fade" data-sal-duration="400">
        {header}
      </H3>
      <Hr />
      <RowsWrapper data-sal="slide-up" data-sal-duration="400">
        <Row>
          {images.slice(0, 3).map((img) => (
            <ImgComponent img={img} key={img} />
          ))}
        </Row>
        <Row>
          {images.slice(3, 6).map((img) => (
            <ImgComponent img={img} key={img} />
          ))}
        </Row>
      </RowsWrapper>
    </Wrapper>
  );
};

export default SkillsComponent;
