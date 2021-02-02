import React, { Component } from "react";
import Layout from "../Layout";
import Calendrier from "./Calendrier";
import Score from "./Score";
import Presentation from "./Presentation";
import FacebookPage from "./FacebookPage";
import News from "./News";

export class Accueil extends Component {
  render() {
    return (
      <Layout>
        {/*<Carousel id="accueil-carousel" />*/}
        <Presentation />
        <Calendrier />
        <Score />
        <FacebookPage />
        <News />
      </Layout>
    );
  }
}

export default Accueil;
