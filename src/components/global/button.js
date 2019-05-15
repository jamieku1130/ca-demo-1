import styled from "@emotion/styled";
import { rhythm } from "../../utils/typography";
import { media } from "../../utils/style";

const Button = styled.button`
  background: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: ${rhythm(0.5)};
  letter-spacing: 0.02em;
  padding: ${rhythm(0.3)} ${rhythm(0.5)};
  margin-right: ${rhythm(1)};
  letter-spacing: 0.03em;
  border-radius: 5px;
  min-height: ${rhythm(1)};
  display: inline-block;
  user-select: none;
  text-align: center;
  outline: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: ${props => props.color};
    color: ${props => props.bgColor};
  }
  ${media.tablet`
      padding: ${rhythm(0.3)} ${rhythm(1)};
      min-height: ${rhythm(1)};
    
  `}

  ${media.desktop`
      padding: ${rhythm(0.3)} ${rhythm(1)};
      min-height: ${rhythm(1)};
      font-size: ${rhythm(1)};
  `}
`;

export default Button;
