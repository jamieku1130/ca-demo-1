import React from "react";
import { Global, css } from "@emotion/core";
import globalStyle from "./global/globalStyle";
import Header from "./header";
import useSiteMetadata from "../hook/use-sitemetadata";

export default ({ children }) => {
  const siteMetadata = useSiteMetadata();
  return (
    <div>
      <Global styles={globalStyle} />
      <Header siteMetadata={siteMetadata} />
    </div>
  );
};
