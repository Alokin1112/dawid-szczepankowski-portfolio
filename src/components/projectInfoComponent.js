import * as React from "react";
import Star from "../images/stars.jpg";
import styled from "styled-components";
import "@fontsource/pacifico";
import "@fontsource/open-sans";
import Tilt from "react-parallax-tilt";
// styles

const ImageWrapper = styled.div`
  z-index: 5;
  border: 1px solid #001b42;
  position: relative;
  background-color: yellow;
  padding: 0;
  &::before {
    z-index: -1;
    transition: transform 0.4s ease-in-out;
    content: " ";
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(${Star});
    background-size: contain;
    transform: translate(2%, 2%);
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: white;
  @media (max-width: 768px) {
    width: 80vw;
    height: 40vh;
  }
  &:hover ${ImageWrapper}::before {
    transform: translate(0, 0);
  }
`;

const H5 = styled.h5`
  font-family: pacifico;
  font-size: 3.5rem;
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
  transition: font 0.25s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Image = styled.img`
  width: 35vw;
  vertical-align: top;
  height: auto;
  @media (max-width: 768px) {
    width: 50vw;
  }
`;
const Link = styled.a`
  text-decoration: none;
  padding: 0;

  &:hover ${H5} {
    font-size: 3.55rem;
  }
`;
const P = styled.p`
  font-size: 1.5em;
  width: 80%;
  text-align: center;
  font-family: "Open Sans";
  color: #767676;
  margin-top: 0.5em;
  @media (max-width: 768px) {
    font-size: 1.1em;
    line-height: 1.1em;
    margin: 0.25em;
    padding: 0;
  }
`;
// markup
const ProjectsInfoComponent = ({ img, name, link, description = "" }) => {
  return (
    <Link href={link} target="_blank">
      <Tilt options={{ max: 0.01 }}>
        <Wrapper>
          <H5>{name}</H5>
          <ImageWrapper>
            <Image src={img} />
          </ImageWrapper>
          <P>{description}</P>
        </Wrapper>
      </Tilt>
    </Link>
  );
};

export default ProjectsInfoComponent;
