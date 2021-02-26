import React from "react";
import Menu from "./menu/Menu";

function CMSLayout({ className, children }) {
  return (
    <div id="CMSLayout">
      <Menu />
      <div id="CMS" className={className + " container"}>
        {children}
      </div>
    </div>
  );
}

export default CMSLayout;
