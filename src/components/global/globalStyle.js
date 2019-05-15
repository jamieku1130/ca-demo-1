import { css } from "@emotion/core";
import { setColor } from "../../utils/style";

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Quattrocento:400,700");
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${setColor.mainWhite};
  }
`;

export default globalStyle;
