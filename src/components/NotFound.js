import React from "react";
import Layout from "./Layout";
import "../scss/module/notFound.scss";


function NotFound() {
  return (
    <Layout>
      <p className="notFound">Hum... Il semblerait que la page que vous recherchez n'existe pas</p>
    </Layout>
  );
}

export default NotFound;
