import React from "react";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <div id="layout">
      <Menu />
      <div id="content">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
