import React, { Component } from "react";
import Joueur from "./Joueur";
import Layout from "../Layout";
import Menu from "../menu/Menu";
import "../../scss/module/equipe.scss";

export class Equipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      joueurs: [],
      image: null,
    };
    this.fetchEquipe = this.fetchEquipe.bind(this);
  }

  /** Fetch Equipe with id */
  fetchEquipe() {
    let { equipe } = this.props.match.params;
    if (equipe !== undefined)
      fetch(`${process.env.REACT_APP_API_URI}equipes?id=${equipe}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            label: res.label,
            joueurs: res.joueurs,
            image:
              "data:" + res.image.contentType + ";base64," + res.image.data,
          });
        });
  }

  componentDidMount() {
    this.fetchEquipe();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchEquipe();
    }
  }

  render() {
    let { joueurs, image, label } = this.state;
    return (
      <Layout className="equipe">
        <div className="img-card row-cols">
          <img src={image}></img>
          <h1 className="label">{label}</h1>
        </div>
        <div className="joueurs row">
          {joueurs.map((v) => {
            return <Joueur value={v} />;
          })}
        </div>
      </Layout>
    );
  }
}

export default Equipe;
