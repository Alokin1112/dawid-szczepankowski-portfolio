import * as React from "react";
import styled from "styled-components";
import "@fontsource/open-sans";
import Star from "../images/stars.jpg";
// styles
const NavWrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  font-family: "Open Sans";
  margin: auto 8vw;
  font-size: 1.2rem;
  background-image: url(${Star});
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  &:hover {
    text-decoration: underline;
    color: #363636;
  }
  @media (max-width: 768px) {
    margin: auto 2vw;
    font-size: 0.8em;
  }
`;
// markup
const NavPage = ({ anchors }) => {
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }
  return (
    <>
      <NavWrapper>
        {anchors.map((anchor) => (
          <Link href={"#" + anchor} key={anchor}>
            {capitalize(anchor)}
          </Link>
        ))}
      </NavWrapper>
    </>
  );
};

export default NavPage;
