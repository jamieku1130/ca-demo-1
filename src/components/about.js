import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Container from "./global/container";
import { setColor, setFlex } from "../utils/style";
import { rhythm } from "../utils/typography";
import ArrowDown from "./global/arrowDown";

import CaHero from "./ca-hero";

const { lightBlack, darkGray, primaryColor, lightGray, mainWhite } = setColor;

const About = styled.section`
  background: linear-gradient(
    180deg,
    ${lightBlack} 0,
    ${lightBlack} 18%,
    ${darkGray} 81%,
    ${darkGray}
  );
  width: 100%;
  padding: ${rhythm(1)};
  margin-top: -10px;
`;

export default () => (
  <About>
    <Container>
      <ul
        css={css`
          ${setFlex()};
          list-style: none;
          li {
            margin-right: ${rhythm(1)};
            font-weight: normal;
          }
        `}
      >
        <li>
          <h3>Design</h3>
        </li>
        <li>
          <h2
            css={css`
              color: ${primaryColor};
            `}
          >
            &
          </h2>
        </li>
        <li>
          <h3>Develop</h3>
        </li>
      </ul>
      <h2>
        Check Our Toolbox{" "}
        <span
          css={css`
            color: ${primaryColor};
          `}
        >
          &
        </span>{" "}
        Creative
      </h2>
      <ArrowDown to="#animation-demo" />
    </Container>
    <div id="animation-demo">
      <CaHero />
    </div>
  </About>
);
