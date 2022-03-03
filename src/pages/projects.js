import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import ProjectsInfoComponent from "../components/projectInfoComponent";
import GuessWho from "../images/GuessWho.png";
import DrugApp from "../images/DrugApp.png";
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
const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100vw;
  height: 80vh;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
`;
// markup
const ProjectsPage = () => {
  return (
    <Wrapper>
      <H3 data-sal="slide-up" data-sal-duration="450">
        Projects
      </H3>
      <Hr />
      <ProjectsWrapper>
        <ProjectsInfoComponent
          img={DrugApp}
          name="DrugApp"
          link="https://alokin1112.github.io/DrugApp/"
          description="App showing drugs corelations"
        />
        <ProjectsInfoComponent
          img={GuessWho}
          name="GuessWho"
          link="https://alokin1112.github.io/guess_who/"
          description="GuessWho Online Game"
        />
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default ProjectsPage;
