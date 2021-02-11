import React from "react";
import Footer from "./footer/Footer";
import Layout from "./Layout";
import Menu from "./menu/Menu";
import "../scss/module/notFound.scss";


function NotFound() {
  return (
    <Layout>
      <p className="notFound">Hum... Il semblerait que la page que vous recherchez n'existe pas</p>
    </Layout>
  );
}

export default NotFound;
