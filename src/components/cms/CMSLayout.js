import React from "react";
import Menu from "./menu/Menu";
import "../../scss/module/cms.scss";

function CMSLayout({ className, children }) {
  return (
    <div id="cms">
      <Menu />
      <div id="cms-content" className={`cms-content ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default CMSLayout;
