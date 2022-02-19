import * as React from "react";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SkillsComponent from "../components/skillsComponent";
import Icons from "../components/iconsImport";
import icons from "../components/iconsImport";
// styles
const D = styled.div`
  width: 100vw;
  height: 90vh;
`;
const Slider = styled(Carousel)`
  height: 80vh;
`;
// markup
const SkillsPage = () => {
  const ProgrammingTab = [
    Icons.TS,
    Icons.HTML,
    Icons.CSS,
    Icons.C,
    Icons.PYTHON,
    Icons.JAVA,
  ];
  const FrameworksTab = [
    Icons.ANGULAR,
    Icons.REACT,
    Icons.GATSBY,
    Icons.BULMA,
    Icons.SASS,
    Icons.BOOTSTRAP,
  ];
  const ToolsTab = [
    icons.GIT,
    Icons.LUNACY,
    Icons.GITHUB,
    Icons.NODE,
    Icons.VSCODE,
    Icons.BASH,
  ];
  return (
    <Slider
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
    >
      <D>
        <SkillsComponent header="Programming" images={ProgrammingTab} />
      </D>
      <D>
        <SkillsComponent header="Frameworks" images={FrameworksTab} />
      </D>
      <D>
        <SkillsComponent header="Tools" images={ToolsTab} />
      </D>
    </Slider>
  );
};

export default SkillsPage;
