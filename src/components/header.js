import React from "react";
import styled from "@emotion/styled";
import { setColor, setFlex } from "../utils/style";
import { rhythm } from "../utils/typography";
import Logo from "./logo";
const { mainWhite, darkBlack } = setColor;

const Header = styled.header`
  background: ${darkBlack};
  nav {
    padding: ${rhythm(1)} ${rhythm(2)};
  }
  .header-textbox {
    text-align: center;
    width: 90%;
    max-width: 970px;
    margin: 0 auto;
    h1,
    h3,
    p {
      color: ${mainWhite};
    }
    p {
      width: 85%;
      margin: 0 auto;
      margin-bottom: ${rhythm(0.5)};
    }
  }
`;

export default ({ siteMetadata }) => (
  <Header>
    <nav>
      <Logo />
    </nav>
    <div className="header-textbox">
      <h1>{siteMetadata.title}</h1>
      <p>{siteMetadata.description}</p>
      <h3>{siteMetadata.excerpt}</h3>
    </div>
  </Header>
);
