import * as React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import NavPage from "../components/nav";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import { createGlobalStyle } from "styled-components";
import AboutPage from "./about";
import EducationPage from "./education";
import "../styles/style.css";
import SkillsPage from "./skills";
import ProjectsPage from "./projects";
import LinksPage from "./links";
// styles
const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
`;
// markup
const IndexPage = () => {
  const options = {
    anchors: ["about", "education", "skills", "projects", "links"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "10vh",
    sectionPaddingBottom: "0",
    arrowNavigation: true,
    navigationAnchorClass: "dots",
  };
  return (
    <>
      <GlobalStyle />
      <NavPage anchors={options.anchors} />
      <SectionsContainer {...options}>
        <Section>
          <AboutPage />
        </Section>
        <Section>
          <EducationPage />
        </Section>
        <Section>
          <SkillsPage />
        </Section>
        <Section>
          <ProjectsPage />
        </Section>
        <Section>
          <LinksPage />
        </Section>
      </SectionsContainer>
    </>
  );
};

export default IndexPage;
