import React from "react";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { media } from "../../utils/style";

const Triangle = styled.svg`
  background: ${props => props.bgColor};
  fill: ${props => props.fillColor};
  width: 100%;
  height: 150px;
  ${media.tablet`
    height:100px;
  `}
`;

// const triangle = css`
//   background: ${props => props.bgColor};
//   fill: ${props => props.fillColor};
//   width: 100%;
//   height: 150px;
//   ${media.tablet`
//     height:100px;
//   `}
// `;

export default ({ bgColor, fillColor }) => {
  return (
    <Triangle bgColor={bgColor} fillColor={fillColor}>
      <svg viewBox="0 0 500 500" role="presentation" preserveAspectRatio="none">
        <path d="M0 0l253 500L500 0H0z" />
      </svg>
    </Triangle>
  );
};
