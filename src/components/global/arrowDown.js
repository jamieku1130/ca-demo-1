import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Anchor = styled.a`
  width: 41px;
  height: 41px;
  background: white;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: none;
    transform: translateY(1px);
  }
`;

const ArrowDown = ({ to }) => {
  return (
    <Anchor href={to}>
      <svg
        viewBox="0 0 189 181"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        css={css`
          width: 21px;
          margin: 9px;
        `}
      >
        <path fill="none" d="M0 0h189v181H0z" />
        <g fill="none" stroke="#000" strokeWidth={8}>
          <path d="M91.679 42.843v82.892L68.546 99.39M92.321 42.843v82.892l23.133-26.345" />
          <circle cx={92} cy={92} r={80} />
        </g>
      </svg>
    </Anchor>
  );
};

export default ArrowDown;
