import styled from "@emotion/styled";
import { media, setFont } from "../../utils/style";
import { rhythm } from "../../utils/typography";

export default styled.div`
    text-align: center;
    width: 90%;
    max-width: 970px;
    margin: 0 auto;
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
`;
