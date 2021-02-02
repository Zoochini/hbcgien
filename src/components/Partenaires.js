import React, { Component } from "react";
import Menu from "./menu/Menu";

export class Partenaires extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div id="partenaires" className="container">
          {/** Partenaires régions */}
          <div className="row d-flex flex-wrap align-items-center m-3">
            <div className="col-lg-4 text-center">
              <div className="thumbnail">
                <a href="https://www.loiret.fr/" alt="Le loiret">
                  <img
                    className="img-responsive"
                    src="/resources/logo_loiret.png"
                    alt="Le Loiret"
                  ></img>
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="thumbnail">
                <a
                  href="https://www.centre-valdeloire.fr/"
                  alt="Centre val de loire"
                >
                  <img
                    className="img-responsive"
                    src="/resources/logo_centre_val_de_loire.jpeg"
                    alt="Centre val de loire"
                  ></img>
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="thumbnail">
                <a href="https://gien-tourisme.fr/" alt="La ville de gien">
                  <img
                    className="img-responsive"
                    src="/resources/logo_gien.jpg"
                    alt="La ville de Gien"
                  ></img>
                </a>
              </div>
            </div>
          </div>

          {/** Autres partenaires */}
          <div className="row d-flex flex-wrap align-items-center m-3">
            <div className="col-lg-4 text-center">
              <a href="https://www.allianz.fr/" alt="Allianz">
                <img src="/resources/logo_allianz.jpg" alt="Allianz"></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.axa.fr/" alt="Axa">
                <img src="/resources/logo_axa.png" alt="Axa"></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.mcreuzot.com/" alt="Michel Creuzot">
                <img
                  src="/resources/logo_carre_rogne.png"
                  alt="Carre rogne"
                ></img>
              </a>
            </div>
          </div>

          <div className="row d-flex flex-wrap align-items-center m-3">
            <div className="col-lg-4 text-center">
              <a href="https://agence-cohesion-territoires.gouv.fr/" alt="CGET">
                <img src="/resources/logo_cget.png" alt="CGET"></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a
                href="https://www.conceptecologiefreres.fr/"
                alt="Concept écologie Frères"
              >
                <img
                  src="/resources/logo_concept_ecologie_freres.jpg"
                  alt="Concept écologie Frères"
                ></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a
                href="https://www.creditmutuel.fr/home/index.html"
                alt="Crédit Mutuel"
              ></a>
              <img
                src="/resources/logo_credit_mutuel.jpg"
                alt="Crédit Mutuel"
              ></img>
            </div>
          </div>

          <div className="row d-flex flex-wrap align-items-center m-3">
            <div className="col-lg-4 text-center">
              <a
                href="https://www.domainedesroches-briare.fr/"
                alt="Domaine des roches"
              >
                <img
                  src="/resources/logo_domaine_des_roches.png"
                  alt="Domaines des roches"
                ></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.innov-home.fr/" alt="Innov Home">
                <img
                  src="/resources/logo_innov_home.jpg"
                  alt="Innov Home"
                ></img>
              </a>
            </div>
            <div className="col-lg-4 text-center">
              <a href="https://www.intermarche.com/" alt="Intermarché">
                <img
                  src="/resources/logo_intermarche.jpg"
                  alt="Intermarché"
                ></img>
              </a>
            </div>
          </div>

          <div className="row d-flex flex-wrap align-items-center m-3">
            <div className="col-lg-3 text-center">
              <a href="https://www.intersport.fr/" alt="Intersport">
                <img
                  src="/resources/logo_intersport.png"
                  alt="Intersport"
                ></img>
              </a>
            </div>
            <div className="col-lg-3 text-center">
              <a
                href="https://www.leboeuftricolore.fr/#/"
                alt="Le boeuf tricolore"
              >
                <img
                  src="/resources/logo_le_boeuf_tricolore.png"
                  alt="Le boeuf Tricolore"
                ></img>
              </a>
            </div>
            <div className="col-lg-3 text-center">
              <img
                src="/resources/logo_rotisserie_lolote.jpg"
                alt="Rotisserie Lolote"
              ></img>
            </div>
            <div className="col-lg-3 text-center">
              <a href="https://www.toutsurmoneau.fr/" alt="Suez">
                <img src="/resources/logo_suez.jpg" alt="Suez"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partenaires;
