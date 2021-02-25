import React, { Component } from "react";
import Partenaire from "./Partenaire";
import Layout from "../Layout";
import "../../scss/module/partenaires.scss"

export class Partenaires extends Component {
  render() {
    return (
      <Layout className="partenaires">
        {/** Partenaires régions */}
        <div className="row justify-content-center">
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
        </div>

        {/** Autres partenaires */}
        <div className="row justify-content-center">
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_allianz.jpg"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
          <Partenaire
            name="Allianz"
            link="https://www.allianz.fr/"
            src="/resources/logo_axa.png"
          />
        </div>
      </Layout>
    );
  }
}

export default Partenaires;
