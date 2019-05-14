import React from "react";
import styled from "@emotion/styled";
import { setColor, media, setFont } from "../utils/style";
import { rhythm } from "../utils/typography";
import Logo from "./logo";
const { mainWhite, darkBlack } = setColor;

const Header = styled.header`
  background: ${darkBlack};

  nav {
    padding: ${rhythm(1)} ${rhythm(2)};
    ${media.tablet`
        padding-left:${rhythm(6)};
      `}
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
    h1 {
      ${setFont.header}
      font-size: ${rhythm(1.5)};
    }

    h3 {
      margin-bottom: 0;
    }
    p {
      margin: 0 auto;
      font-size: ${rhythm(0.5)};
      margin-bottom: ${rhythm(0.5)};
    }

    ${media.tablet`
       padding: ${rhythm(1)} ${rhythm(2)};
       h1 {
          font-size: ${rhythm(2)};
        }
        p{
          width: 85%;
          font-size: ${rhythm(0.6)};
        }
      `}
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
