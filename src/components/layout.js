import React from "react";
import { Global } from "@emotion/core";
import globalStyle from "./global/globalStyle";
import Header from "./header";
import useSiteMetadata from "../hook/use-sitemetadata";
import Triangle from "./global/triangle";
import About from "./about";
import { setColor } from "../utils/style";
const { darkBlack, lightBlack } = setColor;

export default () => {
  const siteMetadata = useSiteMetadata();
  return (
    <div>
      <Global styles={globalStyle} />
      <Header siteMetadata={siteMetadata} />
      <Triangle bgColor={lightBlack} fillColor={darkBlack} />
      <About />
    </div>
  );
};
