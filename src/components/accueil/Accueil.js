import React, { Component, Fragment } from "react";
import Layout from "../Layout";
import Calendrier from "./Calendrier";
import Presentation from "./Presentation";
import FacebookPage from "./FacebookPage";
import News from "./News";
import "../../scss/module/accueil.scss";

export class Accueil extends Component {
  render() {
    return (
      <Layout className="accueil">
        {/*<Carousel id="accueil-carousel" />*/}
        <div className="row justify-content-center">
          <Presentation />
        </div>
        <div className="row">
          <Calendrier />
          <News />
          <FacebookPage />
          
        </div>
      </Layout>
    );
  }
}

export default Accueil;
