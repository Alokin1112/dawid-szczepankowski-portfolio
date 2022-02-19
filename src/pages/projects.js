import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import Carousel from "react-spring-3d-carousel";
import ProjectsInfoComponent from "../components/projectInfoComponent";
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
// markup
const ProjectsPage = () => {
  const slides = [
    {
      key: "1---",
      content: (
        <ProjectsInfoComponent
          img="https://i.ytimg.com/vi/4I3OeGJ-gpQ/maxresdefault.jpg"
          name="DrugApp"
          link="https://www.youtube.com/watch?v=QN1odfjtMoo"
          description="Web with drug corelations"
        />
      ),
    },
    {
      key: "2---",
      content: (
        <ProjectsInfoComponent
          img="https://networks.imdea.org/wp-content/uploads/2021/09/media-file-code-900x500.png"
          name="GuessWho"
          link="https://www.youtube.com/watch?v=QN1odfjtMoo"
          description="GuessWho Game"
        />
      ),
    },
  ];
  return (
    <Wrapper>
      <H3 data-sal="slide-up" data-sal-duration="450">
        Projects
      </H3>
      <Hr />
      <Carousel
        slides={slides}
        showNavigation={true}
        data-sal="slide-down"
        data-sal-duration="350"
      />
    </Wrapper>
  );
};

export default ProjectsPage;
