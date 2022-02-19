import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
// styles
const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  font-family: pacifico;
  font-size: 12rem;
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0;
  padding: 0;
  margin: 0;
  transition: all 0.5s ease-in-out;
  line-height: 1.2em;
  letter-spacing: 0;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 15vh;
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
  @media (max-width: 768px) {
    width: 60vw;
  }
`;
const P = styled.p`
  font-size: 1.5em;
  width: 50vw;
  text-align: center;
  font-family: "Open Sans";
  font-weight: 800;
  color: #767676;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
// markup
const AboutPage = () => {
  return (
    <ContentWrapper>
      <H1 data-sal="slide-up" data-sal-duration="350">
        Hello
      </H1>
      <Hr />
      <P data-sal="slide-down" data-sal-duration="350">
        I'm Dawid, young Developer from Warsaw, Poland.I am mainly involved in
        FronEnd, but also know lot's of other languages like C++, C# or Python.
      </P>
    </ContentWrapper>
  );
};

export default AboutPage;
