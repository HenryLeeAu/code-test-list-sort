import * as React from "react";

import Logo from "../../images/qantas-logo.png";
import "./index.scss";

const SiteHeader: React.FC = () => (
  <div className="site-header">
    <img src={Logo} alt="logo" width="155" />
  </div>
);

export default SiteHeader;
