import React from "react";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import "../scss/module/content.scss";

function Layout({ className, children }) {
  return (
    <div id="layout">
      <Menu />
      <div id="content" className={className + " container-lg"}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
