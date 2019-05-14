import React from "react";
import styled from "@emotion/styled";
import { setColor, media } from "../utils/style";
import { rhythm } from "../utils/typography";

const { lightBlack, darkGray } = setColor;

const About = styled.section`
  background: linear-gradient(
    180deg,
    ${lightBlack} 0,
    ${lightBlack} 18%,
    ${darkGray} 81%,
    ${darkGray}
  );
  width: 100%;
  padding: 10rem 5rem;
  margin-top: -10px;
`;

export default () => <About />;
