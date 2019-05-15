import React from "react";
import styled from "@emotion/styled";
import { setColor, media } from "../utils/style";
import { rhythm } from "../utils/typography";
import Container from "./global/container";
import Logo from "./logo";
const { darkBlack } = setColor;

const Header = styled.header`
  background: ${darkBlack};
  position: relate;
  nav {
    padding: 0 ${rhythm(2)};
    margin-bottom: ${rhythm(1)};
    ${media.tablet`
        padding-left:${rhythm(6)};
        padding: ${rhythm(1)} ${rhythm(2)};
        margin-bottom: 0;
      `}
  }
`;

export default ({ siteMetadata }) => (
  <Header>
    <nav>
      <Logo />
    </nav>
    <Container>
      <h1>{siteMetadata.title}</h1>
      <p>{siteMetadata.description}</p>
      <h3>{siteMetadata.excerpt}</h3>
    </Container>
  </Header>
);
