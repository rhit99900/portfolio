import React from "react";
import Helmet from 'react-helmet'
import { information } from "../utils/config/index.constants";

const Head = React.memo(() => {
  return (
    <Helmet>
      <link rel="icon" type="image/x-icon" href="favicon-color.png"></link>
      <title>{information.title}</title>
    </Helmet>
  )
});

export default Head;